import apiConfig from 'src/config';
import { Injectable } from '@angular/core';
import { SpinnerService } from './spinner.service';
import { LocalStorageService } from './local-storage.service';
import { BehaviorSubject, EMPTY, Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { catchError, finalize, retry, share, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly baseUrl: string = apiConfig.apiUrl;
  private readonly _store$ = new BehaviorSubject<User[]>([]);

  store$ = this._store$ as Observable<User[]>;

  constructor(
    private readonly http: HttpClient,
    private readonly localStorageService: LocalStorageService,
    private readonly spinnerService: SpinnerService
  ) { }

  loadUsers(): Observable<User[]> {
    this.spinnerService.show();
    return this.http.get<User[]>(this.baseUrl)
      .pipe(
        share(),
        retry(1),
        tap(data => {
          this.localStorageService.setData<User[]>(data);
          this._store$.next(data);
        }),
        catchError(err => {
          console.log('Error:', err);
          const backup = this.localStorageService.getData<User[]>();
          this._store$.next(backup);
          return of(backup);
        }),
        finalize(() => this.spinnerService.hide())
      );
  }

  saveUsers(): Observable<void> {
    this.spinnerService.show();
    return this.http.post<void>(this.baseUrl, this.localStorageService.getData<User[]>())
      .pipe(
        catchError(err => {
          console.log('Error:', err);
          return EMPTY;
        }),
        finalize(() => this.spinnerService.hide())
      );
  }

  addUser(user: User) {
    const newStore = this._store$.getValue();
    newStore.unshift(user);

    this.localStorageService.setData(newStore);
    this._store$.next(newStore);
  }

  deleteUser(id: number): void {
    const newStore = this._store$.getValue()
      .filter(user => user.id !== id);

    this.localStorageService.setData(newStore);
    this._store$.next(newStore);
  }

  getUserById(id: number): User {
    return this._store$.getValue()
      .filter(user => user.id === id)[0];
  }

  updateUser(newUser: User) {
    const newStore = this._store$.getValue();
    let index = newStore.findIndex(user => user.id === newUser.id);
    newStore[index] = newUser;

    this.localStorageService.setData(newStore);
    this._store$.next(newStore);
  }

}
