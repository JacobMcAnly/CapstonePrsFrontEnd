import { User } from "./user.class";

// Define a TypeScript class called "Request"
export class Request {
    // Define class properties
    id: number; // A number that represents the Request's identifier
    description: string; // A string that represents the Request's description
    justification: string; 
    rejectionReason: string; 
    deliveryMode: string; 
    submittedDate: Date; 
    dateNeeded: Date; 
    status: string; 
    total: number; 
    user: User; 

    // Define a constructor function that takes ten parameters
    constructor(
        id: number, 
        description: string, 
        justification: string,
        rejectionReason: string, 
        deliveryMode: string = "Pickup", 
        submittedDate: Date = new Date(), 
        dateNeeded: Date, 
        status: string = "New", 
        total: number = 0, 
        user: User 
    ) {
        // Initialize class properties with the constructor parameters
        this.id = id;
        this.description = description;
        this.justification = justification;
        this.rejectionReason = rejectionReason;
        this.deliveryMode = deliveryMode;
        this.submittedDate = submittedDate;
        this.dateNeeded = dateNeeded;
        this.status = status;
        this.total = total;
        this.user = user;
    }
}