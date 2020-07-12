import { Component, OnInit, Input } from '@angular/core';
import { ApiRequestsService } from '@core/apiRequest/api-requests.service';

@Component({
  selector: 'app-comparation',
  templateUrl: './comparation.component.html',
  styleUrls: ['./comparation.component.scss']
})
export class ComparationComponent implements OnInit {

  @Input() cart: string = '0001';


  constructor(
    private apiRequestService: ApiRequestsService
  ) { }

  ngOnInit(): void {
    /*     this.fetchComparation(); */
    this.totalProducts = this.headers.reduce((acumulador, item) => acumulador + item.cheapest.total_products, 0)
    this.totalValue = this.headers.reduce((acumulador, item) => acumulador + item.cheapest.total_sum, 0)

  }
  fetchComparation() {
    /*     this.apiRequestService.postMicroservice(this.cart).subscribe((comparation) => {
        }) */
  }

}


