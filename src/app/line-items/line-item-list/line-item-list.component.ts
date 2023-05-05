import { Component, OnInit } from '@angular/core';
import { LineItem } from 'src/model/line-item.class';
import { LineItemService } from 'src/app/services/line-item.service';
import { Request } from 'src/model/request.class';
import { RequestService } from 'src/app/services/request.service';
import { Product } from 'src/model/product.class';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-line-item-list',
  templateUrl: './line-item-list.component.html',
  styleUrls: ['./line-item-list.component.css']
})
export class LineItemListComponent {
  title: string = "Line Items"
  lineItems: any[] = [
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
  ]
  
}