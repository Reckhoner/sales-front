import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as homeActions from "./home.actions";
import { catchError, exhaustMap, map, switchMap, tap, of } from "rxjs";
import { IUserResponse } from "@app/core/models/auth.model";
import { ProductsService } from "@app/data/services/products/products.service";

@Injectable()   
export class HomeEffects {
    constructor(
        private actions$: Actions,
        private _router: Router,
        private _productsService: ProductsService
    ){}

    getKpis$ = createEffect(() => this.actions$.pipe(
        ofType(homeActions.getkpisAction),
        switchMap((action) => this._productsService.getKpis().pipe(
            map((response) => {
                const kpis = response;
                return homeActions.successKpisAction({kpis})
            })
        )
    )));
}