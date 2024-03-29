import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as AuthActions from './auth.actions';
import { catchError, exhaustMap, map, switchMap, tap } from "rxjs";
import { of } from 'rxjs';
import { AuthAPiService } from "@app/data/services/auth/auth.service";

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private _router: Router,
        private _authService: AuthAPiService
    ) { }

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.loginAction),
            exhaustMap((action) =>
                this._authService.login(action.data).pipe(
                    map((response) => {
                        localStorage.setItem('sales.token', response.jwt);
                        return AuthActions.loginSuccessAction();
                    }),
                    catchError(() => of(AuthActions.loginErrorAction({ message: 'Wrong user or password' })))
                )
            )
        ));

    loginSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(AuthActions.loginSuccessAction),
        tap((_) => {
            this._router.navigateByUrl('home');
        })
    )
        , { dispatch: false });
}