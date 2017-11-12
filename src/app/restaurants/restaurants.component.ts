import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from "../core/services/restaurants.service";

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  public data: any;

  constructor(private restaurantsService: RestaurantsService) {
  }

  ngOnInit() {
    this.restaurantsService.getRestaurantProfile().subscribe(
      (data) => {
        console.log("data", data);
        this.data = data;
      },
      (error) => {
        console.log("error on fetching", error);
      }
    )
  }

}
