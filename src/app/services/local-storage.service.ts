import { Injectable } from '@angular/core';
import apiConfig from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private STORAGE_KEY = apiConfig.localStorageKey;

  getData<T>(): T {
    return JSON.parse(window.localStorage.getItem(this.STORAGE_KEY) || '[]') as T
  }

  setData<T>(payload: T) {
    window.localStorage.setItem(this.STORAGE_KEY, JSON.stringify(payload));
  }

  removeData() {
    window.localStorage.removeItem(this.STORAGE_KEY);
  }


}

