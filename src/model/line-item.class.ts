import { Request } from "./request.class";
import { Product} from "./product.class";

// Define a class called "LineItem"
export class LineItem {
    id: number; 
    request: Request; 
    product: Product; 
    quantity: number; 

    // Define a constructor function that takes four parameters
    constructor(
        id: number,
        request: Request, 
        product: Product, 
        quantity: number = 1
    ) 
    
    {
        // Initialize class properties with the constructor parameters
        this.id = id;
        this.request = request;
        this.product = product;
        this.quantity = quantity;
    }
}