import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SafeHtmlPipePipe } from './safe-html-pipe.pipe';
import { FetchHtmlService } from './services/fetchhtml.service';


@NgModule({
  declarations: [
    AppComponent,
    SafeHtmlPipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [FetchHtmlService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
