import { Component, OnInit } from '@angular/core';
import { IKpi } from '@app/core/models/products.model';
import { HomeFacade } from '@app/facade/home.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  kpis$: Observable<IKpi[] | null>;
  constructor(private _homeFacade: HomeFacade) {
    this.kpis$ = this._homeFacade.kpis$;
    this.kpis$.subscribe((data) => {console.log(data)});
  }

  ngOnInit() {
      this._homeFacade.getKpis();
  }

}
