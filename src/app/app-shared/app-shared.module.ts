import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForbiddenValuesDirective } from './forbidden-values.directive';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [ForbiddenValuesDirective, HighlightDirective],
  imports: [
    CommonModule
  ],
  exports: [ForbiddenValuesDirective, HighlightDirective]
})
export class AppSharedModule { }
