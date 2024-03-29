import { ILogin } from '@app/core/models/auth.model';
import {createAction, props} from '@ngrx/store';

export const loginAction = createAction(
    '[Auth] LoginAction', 
    props<{data: ILogin}>()
    );

export const loginSuccessAction = createAction('[Auth] LoginSuccessAction');
export const loginErrorAction = createAction(
    '[Auth] LoginErrorAction',
    props<{message: string}>()
    );