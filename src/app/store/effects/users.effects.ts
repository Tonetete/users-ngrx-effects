import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { usersActions } from '../actions';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersActions.loadUsers),
      tap((data) => console.log('effect tap', data)),
      mergeMap(() =>
        this.userService.getUsers().pipe(
          map((users) => usersActions.loadUsersSuccess({ users })),
          catchError((err) => of(usersActions.loadUsersError({ payload: err })))
        )
      )
    )
  );
}
