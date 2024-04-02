import { createReducer, on, Action } from "@ngrx/store";
import * as homeActions from './home.actions';
import { HomeState } from "./home.state";

export const initialHomeState: HomeState = {
    kpis: null,
    loadingKpis: true,
    orders: null,
    loadingOrders: null,
    products: null,
    loadingProducts: true
};

const homeReducerInternal = createReducer(
    initialHomeState,
    on(homeActions.successKpisAction, (state, {kpis}) => {
        return {
            ...state,
            kpis,
            loadingKpis: false
        };
    }),
    on(homeActions.successOrdersAction, (state, {orders}) => {
        return {
            ...state,
            orders,
            loadingOrders: false
        };
    }),
    on(homeActions.successProductsAction, (state, {products}) => {
        return {
            ...state,
            products,
            loadingOrders: false
        };
    }),
    );

export function homeReducer(state: HomeState | undefined, action: Action) {
    return homeReducerInternal(state, action);
}