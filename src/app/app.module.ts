import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategorisComponent } from './components/categoris/categoris.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DetailsComponent } from './components/details/details.component';
import { NavBlankComponent } from './components/nav-blank/nav-blank.component';
import { NavAuthComponent } from './components/nav-auth/nav-auth.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HTTP_INTERCEPTORS, HttpClientModule} from'@angular/common/http'
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SearchPipe } from './search.pipe';
import { ToastrModule } from 'ngx-toastr';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { WichlistComponent } from './components/wichlist/wichlist.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { VerifyCodeComponent } from './components/verify-code/verify-code.component';
import { SetNewDataComponent } from './components/set-new-data/set-new-data.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './shared/intercaptors/loading.interceptor';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { UpdateUserDataComponent } from './components/update-user-data/update-user-data.component';
import { MyHttpInterceptor } from './shared/intercaptors/my-http.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent,
    BrandsComponent,
    CategorisComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    DetailsComponent,
    NavBlankComponent,
    NavAuthComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    SearchPipe,
    CheckOutComponent,AllordersComponent, WichlistComponent, ForgetPasswordComponent, VerifyCodeComponent, SetNewDataComponent, ChangePasswordComponent, UpdateUserDataComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ToastrModule.forRoot(),NgxSpinnerModule

  ],
  providers: [ 
     {provide:HTTP_INTERCEPTORS,useClass:MyHttpInterceptor,multi:true}
    ,{provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi:true},],
  bootstrap: [AppComponent]
})
export class AppModule { }
