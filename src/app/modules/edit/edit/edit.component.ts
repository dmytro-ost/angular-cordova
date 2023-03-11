import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ROUTE } from 'src/app/app-routes';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditComponent implements OnInit {

  user!: User;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly userService: UserService
  ) { }

  ngOnInit(): void {
    this.getQueryParams();
  }

  onSaveUser(user: User) {
    this.userService.updateUser(user);
    this.router.navigate([ROUTE.HOME]);
  }

  onCancel() {
    this.router.navigate([ROUTE.HOME]);
  }

  private getQueryParams() {
    this.user = this.userService.getUserById(+this.route.snapshot.queryParams['id']);
  }

}
