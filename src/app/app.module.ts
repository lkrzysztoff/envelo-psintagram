import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SelectListComponent } from './select-list/select-list.component';
import { ContentBoxComponent } from './content-box/content-box.component';
import { DogPatternFooterComponent } from './dog-pattern-footer/dog-pattern-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectListComponent,
    ContentBoxComponent,
    DogPatternFooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
