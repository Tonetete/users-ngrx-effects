import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { userActions } from '../actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.loadUser),
      tap((data) => console.log('effect tap', data)),
      mergeMap((data) =>
        this.userService.getUserById({ id: data.id }).pipe(
          map((user) => userActions.loadUserSuccess({ user })),
          catchError((err) => of(userActions.loadUserError({ payload: err })))
        )
      )
    )
  );
}
