import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ArticleService} from "../../Services/ArticleService";
import {SeoService} from "../../Services/seo.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

  public _subject: string = ""
  public _subject_2: string = ""
  public _content: string = ""
  public _loading: boolean = true;

  constructor(private route: ActivatedRoute, private articleService: ArticleService, private router: Router, private seoService: SeoService) {
  }

  private _url: string = ""

  get url(): string {
    return this._url;
  }

  ngOnInit() {
    const urlParam = this.route.snapshot.paramMap.get('url');

    // Nu kun je 'urlParam' gebruiken in je component
    this.route.params.subscribe({
      next: value => this._url = value['artikel']
    })

    this.articleService.getArticle(this._url).then(r => {
        if (r.found) {
          this._content = r.content;
          this._subject = r.subject;
          this._subject_2 = r.subject_2
          this._loading = false;
          this.seoService.setSEOData(this._subject, this._subject_2)

        } else {
          this.router.navigate(['/kenniscentrum']);
        }
      }
    )


  }


}
