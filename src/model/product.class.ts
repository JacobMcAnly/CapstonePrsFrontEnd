import { Vendor } from "./vendor.class";

// Define a TypeScript class called "Product"
export class Product {
    // Define class properties
    id: number; 
    partNbr: string; 
    name: string; 
    price: number; 
    unit: string; 
    photoPath: string | null; 
    vendorId: number; 
    vendor: Vendor; 

    // Define a constructor function that takes eight parameters
    constructor(
        id: number = 0, 
        partNbr: string = '', 
        name: string = '', 
        price: number = 0, 
        unit: string = '',
        photoPath: string | null = null, 
        vendorId: number = 0, 
        vendor: Vendor 
    ) {
        // Initialize class properties with the constructor parameters
        this.id = id;
        this.partNbr = partNbr;
        this.name = name;
        this.price = price;
        this.unit = unit;
        this.photoPath = photoPath;
        this.vendorId = vendorId;
        this.vendor = vendor;
    }
}
