import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { RequestCreateComponent } from './requests/request-create/request-create.component';
import { RequestDetailComponent } from './requests/request-detail/request-detail.component';
import { RequestEditComponent } from './requests/request-edit/request-edit.component';
import { RequestListComponent } from './requests/request-list/request-list.component';
import { RequestReviewComponent } from './requests/request-review/request-review.component';
import { ReviewDetailComponent } from './requests/review-detail/review-detail.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { VendorCreateComponent } from './vendors/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './vendors/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendors/vendor-edit/vendor-edit.component';
import { VendorListComponent } from './vendors/vendor-list/vendor-list.component';



// routes to the pages
const routes: Routes = [
  {path: " ", component: HomeComponent},
  {path: "product/create", component: ProductCreateComponent},
  {path: "product/detail/:id", component: ProductDetailComponent},
  {path: "product/edit/:id", component: ProductEditComponent},
  {path: "product/list", component: ProductListComponent},
  {path: "request/create", component: RequestCreateComponent},
  {path: "request/detail/:id", component: RequestDetailComponent},
  {path: "request/edit/:id", component: RequestEditComponent},
  {path: "request/list", component: RequestListComponent},
  {path: "request/review", component: RequestReviewComponent},
  {path: "review/detail/:id", component: ReviewDetailComponent},
  {path: "user/create", component: UserCreateComponent},
  {path: "user/detail/:id", component: UserDetailComponent},
  {path: "user/edit/:id", component: UserEditComponent},
  {path: "user/list", component: UserListComponent},
  {path: "user/login", component: UserLoginComponent},
  {path: "vendor/create", component: VendorCreateComponent},
  {path: "vendor/detail/:id", component: VendorDetailComponent},
  {path: "vendor/edit/:id", component: VendorEditComponent},
  {path: "vendor/list", component: VendorListComponent},
  {path: "home", component:HomeComponent},
  {path: "**", component: HomeComponent} //If you mess up, this will send you home (not secure)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
