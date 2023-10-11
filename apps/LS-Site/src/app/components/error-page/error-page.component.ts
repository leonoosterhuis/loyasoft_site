import {Component} from '@angular/core';
import {SeoService} from "../../Services/seo.service";

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent {

  constructor(private seoService: SeoService) {
    seoService.setSEOData("Whoops! 404!", "404 pagina")
  }

}
