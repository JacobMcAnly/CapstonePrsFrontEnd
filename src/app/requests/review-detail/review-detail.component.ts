import { Component } from "@angular/core";

@Component({
    selector: 'review-detail',
    templateUrl: './review-detail.component.html',
    styleUrls: ['./review-detail.component.html']
})
export class ReviewDetailComponent {
    pageTitle: string = "Review Detail"
    reviews: any[] = [
        {
            "id": 14,
            "description": "Need Product",
            "justification": "Need to finish project",
            "rejectionReason": "need it",
            "deliveryMode": "air mail",
            "submittedDate": "2023-03-11T00:00:00",
            "dateNeeded": "2023-06-21",
            "status": "Review",
            "total": 3128.82,
            "user": {
                "id": 10,
                "username": "JAMcAnly",
                "password": "strongpassword",
                "firstname": "Jacob",
                "lastname": "McAnly",
                "phone": "513-302-6026",
                "email": "jacob.mcanly@gmail.com",
                "isReviewer": true,
                "isAdmin": true
            }
        }
    ]
}