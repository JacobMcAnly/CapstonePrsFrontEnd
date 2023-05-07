// Define a class called "User"
export class User {
    // Define class properties
    id: number; 
    username: string; 
    password: string; 
    firstname: string; 
    lastname: string; 
    phone: string | null; 
    email: string | null; 
    isReviewer: boolean; 
    isAdmin: boolean; 

    // Define a constructor function that takes nine parameters
    constructor(
        id: number = 0, 
        username: string = '', 
        password: string = '', 
        firstname: string = '', 
        lastname: string = '', 
        phone: string | null = null, 
        email: string | null = null, 
        isReviewer: boolean = false, 
        isAdmin: boolean = false 
    ) {
        // Initialize class properties with the constructor parameters
        this.id = id;
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
        this.email = email;
        this.isReviewer = isReviewer;
        this.isAdmin = isAdmin;
    }
}