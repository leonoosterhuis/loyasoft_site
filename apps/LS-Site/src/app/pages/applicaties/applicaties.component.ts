import {Component} from '@angular/core';
import {SeoService} from "../../Services/seo.service";

@Component({
  selector: 'app-applicaties',
  templateUrl: './applicaties.component.html',
  styleUrls: ['./applicaties.component.css'],
})
export class ApplicatiesComponent {

  constructor(private seoService: SeoService) {
    seoService.setSEOData("Applicaties", "Applicaties pagina")
  }

}
