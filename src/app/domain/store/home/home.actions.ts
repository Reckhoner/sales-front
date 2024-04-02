import { createAction, props } from "@ngrx/store";
import { ILogin } from "@app/core/models/auth.model";
import { IKpi, IOrders, IProducts } from "@app/core/models/products.model";

export const getkpisAction = createAction('[Home] GetkpisAction');
export const getOrderssAction = createAction('[Home] GetOrdersAction');
export const getProductsAction = createAction('[Home] GetProductsAction');

export const successKpisAction = createAction('[Home] successKpisAction', props<{ kpis: IKpi[] }>());
export const successOrdersAction = createAction('[Home] successOrdersAction', props<{ orders: IOrders[] }>());
export const successProductsAction = createAction('[Home] successProductsAction', props<{ products: IProducts[] }>());