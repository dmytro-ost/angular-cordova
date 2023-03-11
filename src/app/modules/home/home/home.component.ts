import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

  usersList$: Observable<User[]> = this.userService.store$;

  constructor(
    private readonly userService: UserService,
    private readonly router: Router
  ) { }

  onEdit(user: User): void {
    console.log('edit', user);
  }

  onDelete(user: User): void {
    console.log('delete', user);
  }

  onSave(): void {

  }

  onAddNew(): void {
    this.router.navigate(['add']);
  }

  trackByFn(index: number) {
    return index;
  }

}
// new Date().toISOString().slice(0,10)
// uuid
