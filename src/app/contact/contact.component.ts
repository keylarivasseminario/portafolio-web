import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ContactDataForm } from './contact.form';
import { HttpClient } from '@angular/common/http';
import { delay, filter, tap } from 'rxjs';

@Component({
  selector: 'keyla-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  public form: FormGroup = ContactDataForm();
  public sendSuccefully = false;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}

  public sendEmail(): void {
    let body = {
      service_id: 'service_b67hzm7',
      template_id: 'email_web',
      user_id: 'cJhOAg4y74fTrUkz3',
      template_params: {},
    };

    body = { ...body, template_params: { ...this.form.value } };

    const params = {
      accessToken: '-kfUCvxP1sn4Z6p7jhO8k',
    };

    const url = `https://api.emailjs.com/api/v1.0/email/send`;
    this.httpClient.post<any>(url, body, { params }).subscribe({
      next: (x) => console.log('got value ' + x),
      error: () => this.showSuccessMessage(),
      complete: () => {
        this.showSuccessMessage();
      },
    });
  }

  private showSuccessMessage() {
    this.form.reset();
    this.sendSuccefully = true;
    setTimeout(() => {
      this.sendSuccefully = false;
    }, 3000);
  }
}
