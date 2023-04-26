import { Component } from "@angular/core";

//export to make the class available to other parts of the application
@Component({
    selector: 'products-list', 
    templateUrl: './product-list.component.html'
})
export class ProductListComponent {
    
    pageTitle: string = "Products List"
    products: any[] = [
        {
            "id": 11,
            "partNbr": "RD500",
            "name": "Reverse Acting Rupture Disc",
            "price": 900.0,
            "unit": "each",
            "photoPath": "https://exionasiavn.com/fike-reverse-acting-rupture-disc.html",
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
        },
        {
            "id": 12,
            "partNbr": "AVC-0777",
            "name": "End-of-line Flame Arrestor",
            "price": 806.91,
            "unit": "each",
            "photoPath": "https://www.protectoseal.com/product/vapor-and-flame-solutions/flame-detonation-arresters/end-of-line-deflagration-flame-arresters/avc/",
            "vendor": {
                "id": 14,
                "code": "PROSL-8899",
                "name": "Protectoseal",
                "address": "225 Foster Ave",
                "city": "Bensenville",
                "state": "IL",
                "zip": "60106",
                "phone": "6305950800",
                "email": "help@protectoseal.com"
            }
        },
        {
            "id": 13,
            "partNbr": "SCRD-8930",
            "name": "Forward Acting Rupture Disc",
            "price": 4293.0,
            "unit": "each",
            "photoPath": "https://exionasiavn.com/fike-foward-acting-rupture-disc.html",
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
        },
        {
            "id": 15,
            "partNbr": "DN80-200",
            "name": "Bi-Directional Rupture Disc",
            "price": 1300.0,
            "unit": "each",
            "photoPath": "https://exionasiavn.com/fike-bi-directional-rupture-disc.html",
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
        },
        {
            "id": 16,
            "partNbr": "SRX-300",
            "name": "Rupture Disc Holder",
            "price": 264.41,
            "unit": "each",
            "photoPath": "https://www.nriparts.com/products/fike-srx-gi-rupture-discs/656240",
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
        },
        {
            "id": 17,
            "partNbr": "S-928410",
            "name": "Explosion Vent",
            "price": 652.05,
            "unit": "each",
            "photoPath": "https://www.nriparts.com/products/fike-cv-s-bi-d3737-2bi-rupture-disc-24in-175psi-at-72f/665764?option_ids=&item_id=928410&combination_id=",
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
        },
        {
            "id": 18,
            "partNbr": "FA-25000",
            "name": "In-Line Flame Arrestor",
            "price": 3851.55,
            "unit": "each",
            "photoPath": "https://www.protectoseal.com/product/vapor-and-flame-solutions/flame-detonation-arresters/in-line-detonation-flame-arresters/series25000-26000/",
            "vendor": {
                "id": 14,
                "code": "PROSL-8899",
                "name": "Protectoseal",
                "address": "225 Foster Ave",
                "city": "Bensenville",
                "state": "IL",
                "zip": "60106",
                "phone": "6305950800",
                "email": "help@protectoseal.com"
            }
        },
        {
            "id": 19,
            "partNbr": "PS-5200G",
            "name": "Pressure/Vacuum Relief Vent",
            "price": 800.0,
            "unit": "each",
            "photoPath": "https://www.protectoseal.com/product/vapor-and-flame-solutions/pressure-and-vacuum-vents/series5200g/",
            "vendor": {
                "id": 14,
                "code": "PROSL-8899",
                "name": "Protectoseal",
                "address": "225 Foster Ave",
                "city": "Bensenville",
                "state": "IL",
                "zip": "60106",
                "phone": "6305950800",
                "email": "help@protectoseal.com"
            }
        },
        {
            "id": 20,
            "partNbr": "PS-1073",
            "name": "Tank Blanketing Valve",
            "price": 750.68,
            "unit": "each",
            "photoPath": "https://www.protectoseal.com/product/vapor-and-flame-solutions/tank-blanketing-valves/series10/",
            "vendor": {
                "id": 14,
                "code": "PROSL-8899",
                "name": "Protectoseal",
                "address": "225 Foster Ave",
                "city": "Bensenville",
                "state": "IL",
                "zip": "60106",
                "phone": "6305950800",
                "email": "help@protectoseal.com"
            }
        },
        {
            "id": 21,
            "partNbr": "PS-7800",
            "name": "Emergency Relief Vent",
            "price": 1000.0,
            "unit": "each",
            "photoPath": "https://www.protectoseal.com/product/vapor-and-flame-solutions/emergency-pressure-vents/series7800/",
            "vendor": {
                "id": 14,
                "code": "PROSL-8899",
                "name": "Protectoseal",
                "address": "225 Foster Ave",
                "city": "Bensenville",
                "state": "IL",
                "zip": "60106",
                "phone": "6305950800",
                "email": "help@protectoseal.com"
            }
        },
        {
            "id": 22,
            "partNbr": "DHS-3007",
            "name": "Screws (SRX Holder)",
            "price": 14.99,
            "unit": "4 pcs",
            "photoPath": "",
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
        },
        {
            "id": 23,
            "partNbr": "CE-7991",
            "name": "End-of-line Conservation Vent",
            "price": 675.0,
            "unit": "each",
            "photoPath": "",
            "vendor": {
                "id": 14,
                "code": "PROSL-8899",
                "name": "Protectoseal",
                "address": "225 Foster Ave",
                "city": "Bensenville",
                "state": "IL",
                "zip": "60106",
                "phone": "6305950800",
                "email": "help@protectoseal.com"
            }
        },
        {
            "id": 24,
            "partNbr": "TST-0000",
            "name": "Test Product",
            "price": 800.99,
            "unit": "each",
            "photoPath": "",
            "vendor": {
                "id": 14,
                "code": "PROSL-8899",
                "name": "Protectoseal",
                "address": "225 Foster Ave",
                "city": "Bensenville",
                "state": "IL",
                "zip": "60106",
                "phone": "6305950800",
                "email": "help@protectoseal.com"
            }
        },
        {
            "id": 26,
            "partNbr": "test-123",
            "name": "test",
            "price": 0.0,
            "unit": "each",
            "photoPath": "",
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
    ]
}