import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { HomeComponent } from './components/home/home.component';
import { CategorisComponent } from './components/categoris/categoris.component';
import { CartComponent } from './components/cart/cart.component';
import { BrandsComponent } from './components/brands/brands.component';
import { DetailsComponent } from './components/details/details.component';
import { ProductsComponent } from './components/products/products.component';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './shared/guards/auth.guard';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { WichlistComponent } from './components/wichlist/wichlist.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { VerifyCodeComponent } from './components/verify-code/verify-code.component';
import { SetNewDataComponent } from './components/set-new-data/set-new-data.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { UpdateUserDataComponent } from './components/update-user-data/update-user-data.component';

const routes: Routes = [
  {path:'',component:BlankLayoutComponent,
  canActivate:[authGuard],
children:[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'Categories',component:CategorisComponent},
  {path:'cart',component:CartComponent},
  {path:'brands',component:BrandsComponent},
  {path:'details/:id',component:DetailsComponent},
  {path:'products',component:ProductsComponent},
  {path:'checkout/:id',component:CheckOutComponent},
  {path:'allorders',component:AllordersComponent},
  {path:'wichlist',component:WichlistComponent},
  {path:'change-password',component:ChangePasswordComponent},
  {path:'updateUserData',component:UpdateUserDataComponent}



]},
{path:'',component:AuthLayoutComponent,
children:[
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'forget-password',component:ForgetPasswordComponent},
  {path:'verify-code',component:VerifyCodeComponent},
  {path:'set-new-data',component:SetNewDataComponent}

]},{path:'**',component:NotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
