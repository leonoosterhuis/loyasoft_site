import {Component} from '@angular/core';
import {SeoService} from "../../Services/seo.service";

@Component({
  selector: 'app-hosting',
  templateUrl: './hosting.component.html',
  styleUrls: ['./hosting.component.css'],
})
export class HostingComponent {

  constructor(private seoService: SeoService) {
    seoService.setSEOData("Hosting", "Hosting pagina")
  }

}
