import { Injectable } from '@angular/core';
import { ApiRequestsService } from '@core/apiRequest/api-requests.service';

@Injectable({
  providedIn: 'root'
})
export class MeasureService {

  private url: string = 'measures';

  constructor(
    private apiResquests: ApiRequestsService
  ) { }

  getAllMeasures() {
    return this.apiResquests.getQuery(`${this.url}`)
  }
  getMeasures(id: number) {
    return this.apiResquests.getQuery(`${this.url}/${id}`)
  }
}
