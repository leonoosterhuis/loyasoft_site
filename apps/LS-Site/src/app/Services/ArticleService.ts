import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private _link: string = "";
  private endpoint: string = "ls-site/articles"

  constructor(private apiService: ApiService) {
  }

  private _subject: string = "";

  get subject(): string {
    return this._subject;
  }

  private _subject_2: string = "";

  get subject_2(): string {
    return this._subject_2;
  }

  private _content: string = "";

  get content(): string {
    return this._content;
  }

  private _found: boolean = false;

  get found(): boolean {
    return this._found;
  }

  getArticle(link: string): Promise<this> {
    return new Promise<this>((resolve, reject) => {
      this.apiService.get(this.endpoint).subscribe({
        next: (value) => {
          var data = <any>value
          if (data && data.length > 0) {
            const article = data.find((item: { link: string; }) => item.link === link);
            if (article) {
              this._found = true;
              this._subject = article['subject'];
              this._content = article['content'];
              this._subject_2 = article['subject_2']
              resolve(this);
            } else {
              resolve(this);
            }
          } else {
            resolve(this);
          }
        },
        error: (error) => {
          console.error('Fout bij het ophalen van het artikel:', error);
          reject(error);
        },
      });
    });
  }

}



