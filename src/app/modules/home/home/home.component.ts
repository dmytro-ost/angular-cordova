import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ROUTE } from 'src/app/app-routes';
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
    this.router.navigate([ROUTE.EDIT], { queryParams: { id: user.id } });
  }

  onDelete(user: User): void {
    this.router.navigate([ROUTE.DELETE], { queryParams: { id: user.id } });
  }

  onSave(): void {

  }

  onAddNew(): void {
    this.router.navigate([ROUTE.ADD]);
  }

  trackByFn(index: number) {
    return index;
  }

}
