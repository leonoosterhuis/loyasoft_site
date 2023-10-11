import {Component} from '@angular/core';
import {SeoService} from "../../Services/seo.service";

@Component({
  selector: 'app-knowledge-center',
  templateUrl: './knowledge-center.component.html',
  styleUrls: ['./knowledge-center.component.css']
})
export class KnowledgeCenterComponent {

  constructor(private seoService: SeoService) {
    seoService.setSEOData("Kenniscentrum", "Kenniscentrum pagina")
  }

}
