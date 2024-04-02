import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IKpi } from '@app/core/models/products.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { }

  getKpis(): Observable<IKpi[]> {
    return this._http.get('kpis').pipe(
      map((response: any) => {
        const { data } =  response;
        const values = data.map((value: any) => ({ id: value.id, ...value.attributes}));
        return values;
      })
    );
  }
}
