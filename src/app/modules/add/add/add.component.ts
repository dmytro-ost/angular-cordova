import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE } from 'src/app/app-routes';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddComponent implements OnInit {

  user!: User;
  constructor(
    private readonly router: Router,
    private readonly userService: UserService
  ) { }

  ngOnInit(): void {
    this.initUser()
  }

  initUser() {
    this.user = {
      id: new Date().getTime(),
      firstName: '',
      lastName: '',
      email: '',
      emailVerified: false,
      dateOfBirth: new Date(),
      createDate: new Date(),
    }
  }

  onAddUser(user: User) {
    this.userService.addUser(user);
    this.router.navigate([ROUTE.HOME]);
  }

  onCancel() {
    this.router.navigate([ROUTE.HOME]);
  }

}
