import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


const routes: Routes = [{
 path: "", component: HomeComponent
},
{
  path: "about", component: AboutUsComponent
},

{
  path: "menu", component: MenuComponent
},

{
  path:"cart", component: CartComponent,
},

{
  path: "contact", component: ContactComponent
},

{
  path: "product/:id", component: ProductDetailsComponent
},

{
  path: "cart", component: CartComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
