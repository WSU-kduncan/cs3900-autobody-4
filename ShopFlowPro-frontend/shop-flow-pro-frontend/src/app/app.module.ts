// app.module.ts
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ReactiveFormsModule,
    NgModule,
    HttpClient,
    // other modules
  ],
  // other configurations
})
export class AppModule {}
