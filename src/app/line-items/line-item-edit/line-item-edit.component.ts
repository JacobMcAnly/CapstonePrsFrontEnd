import { Component } from '@angular/core';

@Component({
  selector: 'app-line-item-edit',
  templateUrl: './line-item-edit.component.html',
  styleUrls: ['./line-item-edit.component.css']
})
export class LineItemEditComponent {
  lineItem: any =
    {
      "id": 34,
      "requestId": 14,
      "productId": 16,
      "quantity": 2,
      "product": { 
    "partNbr": "SRX-300",
    "name": "Rupture Disc Holder",
    "price": 264.41,
    "unit": "each",
    "photoPath": "https://cdn-images.yodify.com/productimages/Fike/Conventional-Bolted-Type-Rupture-Disc-Holder/main_Fike_Conventional_Bolted_Type_Rupture_Disc_Holder.png",
    "vendor": {
      "id": 13,
      "code": "Fk-7915",
      "name": "Fike",
      "address": "704 SW 10th Street",
      "city": "Blue Springs",
      "state": "MO",
      "zip": "64015",
      "phone": "816-229-3405",
      "email": "help@fike.com"
          }
    }
    }
}