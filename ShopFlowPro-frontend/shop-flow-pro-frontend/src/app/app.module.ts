// app.module.ts
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ReactiveFormsModule,
    NgModule,
    FormGroup,
    FormsModule,
    HttpClient,
    // other modules
  ],
  // other configurations
})
export class AppModule {}
