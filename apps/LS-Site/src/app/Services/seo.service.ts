import {Injectable} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {app} from "../../environments/version";

@Injectable({
  providedIn: 'root'
})
export class SeoService {


  constructor(private titleService: Title, private metaService: Meta) {
  }

  setSEOData(title: string, description: string) {
    this.titleService.setTitle("Loyasoft | " + title);
    this.metaService.updateTag({name: 'description', content: description});
    this.metaService.updateTag({
      name: "keywords",
      content: "Loyasoft, software, websites, hosting, applicaties, " + title
    })
    this.metaService.addTag({name: 'version', content: app.appVersion})
  }

}
