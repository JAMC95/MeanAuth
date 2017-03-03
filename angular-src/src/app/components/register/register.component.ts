import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(private ValidateService: ValidateService, private flashMessage: FlashMessagesService) { }

  ngOnInit() {

  }

  onRegisterSubmit () {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    // Required Field 
    if(!this.ValidateService.validateRegister(user)) {
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000})
      return false;
    }
    // Validate email
    if(!this.ValidateService.validateEmail(user)) {
      this.flashMessage.show('Please type a valid email', {cssClass: 'alert-danger', timeout: 3000})
      return false;
    }
  }
}
