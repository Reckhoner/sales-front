import { createAction, props } from "@ngrx/store";
import { ILogin } from "@app/core/models/auth.model";

export const getkpisAction = createAction('[Home] GetkpisAction');
export const getOrderssAction = createAction('[Home] GetOrdersAction');
export const getProductsAction = createAction('[Home] GetProductsAction');