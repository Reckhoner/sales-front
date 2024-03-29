import { createReducer, on, Action } from "@ngrx/store";
import * as AuthActions from './auth.actions';
import { AuthState } from "./auth.state";

export const initialAuthState: AuthState = {
    loginData: null,
    isLoading: false,
    isError: null,
    isSuccess: false
};

const authReducerInternal = createReducer(
    initialAuthState, 
    on(AuthActions.loginAction, (state, { data }) => {
        return {
            ...state,
            loginData: data,
            isLoading: true,
        };
    }),
    on(AuthActions.loginSuccessAction, (state) => {
        return {
            ...state,
            isLoading: false,
            isSuccess: true,
        };
    }),
    on(AuthActions.loginErrorAction, (state, { message }) => {
        return {
            ...state,
            isLoading: false,
            isError: message,
        };
    })
);

export function authReducer(state: AuthState | undefined, action: Action) {
    return authReducerInternal(state, action);
}