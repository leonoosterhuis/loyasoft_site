import {Component} from '@angular/core';
import {SeoService} from "../../Services/seo.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {

  constructor(private seoService: SeoService) {
    seoService.setSEOData("Projects", "Projects pagina")
  }

}
