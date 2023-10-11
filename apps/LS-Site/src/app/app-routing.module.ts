import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {HostingComponent} from './pages/hosting/hosting.component';
import {WebsitesComponent} from './pages/websites/websites.component';
import {ApplicatiesComponent} from './pages/applicaties/applicaties.component';
import {ProjectsComponent} from './pages/projects/projects.component';
import {ContactComponent} from './pages/contact/contact.component';
import {KnowledgeCenterComponent} from "./pages/knowledge-center/knowledge-center.component";
import {ArticleComponent} from "./pages/article/article.component";
import {ErrorPageComponent} from "./components/error-page/error-page.component";


const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'websites', component: WebsitesComponent},
  {path: 'applicaties', component: ApplicatiesComponent},
  {path: 'hosting', component: HostingComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'kenniscentrum', component: KnowledgeCenterComponent},
  {path: 'kenniscentrum/:artikel', component: ArticleComponent, pathMatch: 'full'},

  {
    path: '**', pathMatch: 'full',
    component: ErrorPageComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
