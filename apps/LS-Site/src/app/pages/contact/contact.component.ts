import {Component} from '@angular/core';
import {ContactFormService} from "../../Services/ContactFormService";
import {SeoService} from "../../Services/seo.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  formData: any = {};
  isSubmitting: boolean = false;

  statusMessage: string = '';
  isSent: boolean = false;


  constructor(private contactFS: ContactFormService, private seoService: SeoService) {
    seoService.setSEOData("Contact", "Contact pagina")
  }

  async onSubmit() {
    // Kopieer de formuliergegevens naar het contactFS-serviceobject
    this.contactFS.email = this.formData.email;
    this.contactFS.name = this.formData.name;
    this.contactFS.subject = this.formData.subject;
    this.contactFS.content = this.formData.message;


    this.contactFS.submit().subscribe({
      next: (v) => {
        this.statusMessage = 'Verzenden...';
        this.isSent = true;
        console.log("1")

      },
      error: (e) => {
        this.isSent = true;
        this.statusMessage = 'Er is iets fout gegaan bij het verzenden van dit bericht.';
        this.isSubmitting = false; // Zet isSubmitting op false om de knop in te schakelen
        console.log("2")


      },
      complete: () => {
        this.isSent = true;
        this.statusMessage = 'Bedankt! Je bericht is succesvol verzonden';
        this.isSubmitting = true;
        console.log("3")

      }
    });


  }


}
