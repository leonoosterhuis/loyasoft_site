import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  private endpoint: string = "ls-site/contact-entries"

  constructor(private apiService: ApiService) {
  }

  private _name: string = "";

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  private _email: string = "";

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  private _subject: string = "";

  get subject(): string {
    return this._subject;
  }

  set subject(value: string) {
    this._subject = value;
  }

  private _content: string = "";

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }

  submit() {
    var formData = {
      "name": this.name,
      "email": this.email,
      "subject": this.subject,
      "content": this.content
    }
    return this.apiService.post(this.endpoint, formData)
  }
}
