import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'home', component:HomeComponent},
  { path: 'products', component: ProductComponent},
  { path: '**', component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
