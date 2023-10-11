import {Component} from '@angular/core';
import {SeoService} from "../../Services/seo.service";

@Component({
  selector: 'app-websites',
  templateUrl: './websites.component.html',
  styleUrls: ['./websites.component.css'],
})
export class WebsitesComponent {

  constructor(private seoService: SeoService) {
    seoService.setSEOData("Websites", "Websites pagina")
  }

}
