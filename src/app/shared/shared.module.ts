import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, NotFound404Component, HeaderSectionComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })

  ],

  exports: [
    TranslateModule,
    FontAwesomeModule,
    HeaderComponent,
    RouterModule,
    BrowserAnimationsModule,
    HeaderSectionComponent
  ]
})
export class SharedModule { }
// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
