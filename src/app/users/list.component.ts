import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../models/user.model';
import { loadUsers } from '../store/actions/users.actions';
import { AppState } from '../store/app.reducer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  users!: User[];
  loading: boolean = false;
  error: any;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('users').subscribe(({ users, loading, error }) => {
      this.loading = loading;
      this.error = error;
      this.users = users;
    });

    this.store.dispatch(loadUsers());
    // this.userService.getUsers().subscribe((data: User[]) => {
    //   this.users = data;
    // });
  }
}
