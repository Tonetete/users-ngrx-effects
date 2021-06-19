import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from '../models/user.model';
import { userActions } from '../store/actions';
import { AppState } from '../store/app.reducer';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [],
})
export class UserComponent implements OnInit {
  user!: User | null;
  error!: any;

  constructor(private router: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('user').subscribe(({ user, error }) => {
      this.user = user;
      this.error = error;
    });

    this.router.params.subscribe(({ id }) => {
      this.store.dispatch(userActions.loadUser({ id }));
    });
  }
}
