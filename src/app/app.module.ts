import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HelloComponent} from './hello/hello.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomersModule } from './customers/customers.module';
import { RxjsComponent } from './rxjs/rxjs.component';
import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import { AppSharedModule } from './app-shared/app-shared.module';

const routes: Routes = [
  {path: "home", component: HelloComponent},
  {path: "databinding", component: DataBindingComponent},
  {path: "rxjs", component: RxjsComponent},
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "**", component: RxjsComponent}
]


@NgModule({
  declarations: [
    AppComponent, 
    HelloComponent, 
    DataBindingComponent, 
    RxjsComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    CustomersModule, 
    ReactiveFormsModule, 
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppSharedModule
  ],
  providers: [],
  // bootstrap: [AppComponent, HelloComponent]
  bootstrap: [AppComponent]
})
export class AppModule { }
