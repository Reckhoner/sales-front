import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { HomeState } from "@app/domain/store/home/home.state";
import * as homeSelectors from "@app/domain/store/home/home.selectors";
import { RootState } from "@app/domain/store";
import { IKpi } from "@app/core/models/products.model";
import { getkpisAction } from "@app/domain/store/home/home.actions";

@Injectable({
    providedIn: 'root'
})
export class HomeFacade {
    isLoadingKpis$: Observable<boolean | null>;
    kpis$: Observable<IKpi[] | null>;
    // isError$: Observable<string | null>;

    constructor(private readonly _store: Store<RootState>, private _storee: Store<HomeState>) {
        this.isLoadingKpis$ = this._store.select(homeSelectors.selectIsLoadingKpis);
        this.kpis$ = this._store.select(homeSelectors.selectKpis);
    }

    getKpis() {
        this._store.dispatch(getkpisAction());
    }

}