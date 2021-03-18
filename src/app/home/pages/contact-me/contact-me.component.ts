import { HttpClient } from '@angular/common/http';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faEnvelope, faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faMobileAlt, faLightbulb as faLightbulbOn } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  form: FormGroup;
  title: string = "";
  lightsOn: boolean = false;
  faMapMarkerAlt = faMapMarkerAlt;
  faEnvelope = faEnvelope;
  faMobileAlt = faMobileAlt;
  faWhatsapp = faWhatsapp;
  faGithub = faGithub;
  faLinkedinIn = faLinkedinIn;
  faLightbulb = faLightbulb;
  faLightBulbOn = faLightbulbOn;

  constructor(private translate: TranslateService, private http: HttpClient) {
    this.translate.get('ContactMe').subscribe((data: any) => {
      this.title = data;
    });
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      message: new FormControl("", Validators.required),
      honeypot: new FormControl(""),
    });
  }

  onSubmit() {
    if (this.form.status == 'VALID' && this.form.get('honeypot').value == '') {
      this.form.disable();
      var formData: FormData = new FormData();
      formData.append("name", this.form.get("name").value);
      formData.append("email", this.form.get("email").value);
      formData.append("message", this.form.get("message").value);
      this.http.post("https://script.google.com/macros/s/AKfycbxAyqqbgw5h9oIk6abPXgp3a6VEtIQCN-wPQPjV/exec", formData).subscribe((response) => {
        if (response["result"] == "success") {
          console.log('exito')
        } else {
          console.log('fallo')
        }
        this.form.enable();
        console.log(response);
      });
    }
  }

  lights() {
    this.lightsOn = !this.lightsOn;
  }
}
