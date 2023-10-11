import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './pages/home/home.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {FooterComponent} from './components/footer/footer.component';
import {ServicesCardComponent} from './components/elements/services-card/services-card.component';
import {ProjectsCardComponent} from './components/elements/projects-card/projects-card.component';
import {HostingComponent} from './pages/hosting/hosting.component';
import {WebsitesComponent} from './pages/websites/websites.component';
import {ProjectsComponent} from './pages/projects/projects.component';
import {ApplicatiesComponent} from './pages/applicaties/applicaties.component';
import {ContactComponent} from './pages/contact/contact.component';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {KnowledgeCenterComponent} from "./pages/knowledge-center/knowledge-center.component";
import {ArticleComponent} from "./pages/article/article.component";
import {ErrorPageComponent} from "./components/error-page/error-page.component";
import {CacheInterceptor} from "./Interceptors/cache.interceptor";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    ServicesCardComponent,
    ProjectsCardComponent,
    HostingComponent,
    WebsitesComponent,
    ProjectsComponent,
    ApplicatiesComponent,
    ContactComponent,
    KnowledgeCenterComponent,
    ArticleComponent,
    ErrorPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    // ...
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
