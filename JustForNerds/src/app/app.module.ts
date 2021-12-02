import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowAllEmpComponent } from './show-all-emp/show-all-emp.component';
import { LoginComponent } from './login/login.component';
import { DemoComponent } from './demo/demo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { GenderPipe } from './gender.pipe';
import { ExperiencePipe } from './experience.pipe';
import { CountrycodePipe } from './countrycode.pipe';
import { ShowgalleryComponent } from './showgallery/showgallery.component';
import { EmpidComponent } from './empid/empid.component';
import {RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { NewarrivalComponent } from './newarrival/newarrival.component';
import { BestsellersComponent } from './bestsellers/bestsellers.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { SellComponent } from './sell/sell.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { Upload1Component } from './upload1/upload1.component';
import { ShowdbimagesComponent } from './showdbimages/showdbimages.component';
import { PaymentComponent } from './payment/payment.component';
import { BuynowComponent } from './buynow/buynow.component';
import { ChatComponent } from './chat/chat.component';
//import { ChatroomComponent } from './chatroom/chatroom.component';

const appRoot: Routes = [{path: '', component: LoginComponent},
                        {path: 'login', component: LoginComponent},
                        {path: 'register', component: RegisterComponent},
                        {path: 'showgallery', component: ShowgalleryComponent},
                        {path: 'cart', canActivate: [AuthGuard], component: CartComponent},  
                        {path: 'bestsellers', component: BestsellersComponent},
                        {path: 'newarrival', component: NewarrivalComponent},
                        {path: 'imageupload',canActivate: [AuthGuard], component: UploadImageComponent},
                        {path: 'imageupload1',
                        // canActivate : [AuthGuard],
                        component: Upload1Component},
                        {path: 'showDbImages',
                        
                        component: ShowdbimagesComponent},
                        {path:'buyNow',component:BuynowComponent},
                        {path: "chat",component: ChatComponent}
                        
                        ];
                        //{path: 'chatroom', component: ChatroomComponent}];
@NgModule({
  declarations: [
    AppComponent,
    ShowAllEmpComponent,
    LoginComponent,
    DemoComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    GenderPipe,
    ExperiencePipe,
    CountrycodePipe,
    ShowgalleryComponent,
    EmpidComponent,
    NewarrivalComponent,
    BestsellersComponent,
    CartComponent,
    SellComponent,
    UploadImageComponent,
    Upload1Component,
    ShowdbimagesComponent,
    PaymentComponent,
    BuynowComponent,
    ChatComponent
    //ChatroomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoot)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
