import { Component, OnInit } from '@angular/core';
import { UserTable } from '@core/user/user.modele';
import { UserService } from '@core/user/user.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '@core/user/user.modele';
import { AuthService } from '@core/authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.scss']
})

export class TableUserComponent implements OnInit {
  users: Observable<UserTable[]>;
  public btnNew: boolean = false;

  constructor(
    private userService: UserService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.fetchUsers()
    const { user } = this.auth.getCookie('user');
    if (user.rol === 'ADMIN') {
      this.btnNew = true;
    }
  }
  fetchUsers() {
    this.users = this.userService.getAllUsers()
      .pipe(map((users: User[]) => {
        // TODO:
        // Identifier 'tableUsers' is never reassigned; use 'const' instead of 'let'
        let tableUsers = [];
        users.map((user) => {
          tableUsers.push({
            status: user.active,
            id: user.id,
            rol: user.rol,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            verified: user.verified
          })
        })
        return tableUsers;
      }))
  }

  redirectUsers() {
    const cookie = this.auth.getCookie('user');
    if (!cookie) {
      console.log('Session close');
      this.router.navigateByUrl('/home');
    }

    const { user } = cookie;
    const { rol } = user;

    if (rol === 'ADMIN') {
      this.router.navigate(['admin/users/new'], { queryParams: { action: 'edit' } });
    } else {
      this.router.navigate(['admin/users/new'], { queryParams: { action: 'view' } });
    }

  }

}
