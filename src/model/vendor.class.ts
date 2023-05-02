// Define a TypeScript class called "Vendor"
export class Vendor {
    // Define class properties
    id: number; 
    code: string; 
    name: string; 
    address: string; 
    city: string; 
    state: string; 
    zip: string;
    phone: string | null;
    email: string | null; 

    // Define a constructor function that takes eight parameters
    constructor(
        id: number, 
        code: string, 
        name: string, 
        address: string,
        city: string, 
        state: string, 
        zip: string,
        phone: string | null, 
        email: string | null 
    ) {
        // Initialize class properties with the constructor parameters
        this.id = id;
        this.code = code;
        this.name = name;
        this.address = address;
        this.city = city;
        this.phone = phone;
        this.email = email;
        this.state = state;
        this.zip = zip;
    }
}