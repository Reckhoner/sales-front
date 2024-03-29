import { createReducer, on, Action } from "@ngrx/store";
import * as homeActions from './home.actions';
import { HomeState } from "./home.state";

export const initialAuthState: HomeState = {
    kpis: [],
    loadingKpis: null,
    orders: null,
    loadingOrders: null,
    products: null,
    loadingProducts: null
};

