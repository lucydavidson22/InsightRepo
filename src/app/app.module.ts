import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MciListComponent } from './mci/mci-list/mci-list.component';
import { MciComponent } from './mci/mci.component';


@NgModule({
  declarations: [
    AppComponent,
    MciListComponent,
    MciComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
