import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { CustFilterPipe } from './pipes/cust-filter.pipe';
import { DataService } from './services/DataService';
import { CustomerDataService } from './services/customer-data.service';
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { AppSharedModule } from '../app-shared/app-shared.module';

const routes: Routes = [
  {path: "customers", component: ListComponent},
  {path: "customers/:id", component: DetailsComponent}
]


@NgModule({
  declarations: [ListComponent, EditComponent, CustFilterPipe, DetailsComponent],
  imports: [
    CommonModule, FormsModule, 
      HttpClientModule, RouterModule.forChild(routes), AppSharedModule
  ],
  exports: [],
  providers: [{provide: DataService, useClass: CustomerDataService}]
})
export class CustomersModule { }
