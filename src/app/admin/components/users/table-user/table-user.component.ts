import { Component, OnInit } from '@angular/core';
import { UserTable } from '@core/user/user.modele';
import { UserService } from '@core/user/user.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.scss']
})

export class TableUserComponent implements OnInit {
  users: Observable<UserTable[]>;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.fetchUsers()
  }
  fetchUsers() {
    this.users = this.userService.getAllUsers()
      .pipe(map((users) => {
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

}
