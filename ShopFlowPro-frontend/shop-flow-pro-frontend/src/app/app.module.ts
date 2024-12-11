// app.module.ts
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ReactiveFormsModule,
    NgModule,
    FormsModule,
    HttpClient,
    // other modules
  ],
  // other configurations
})
export class AppModule {}
