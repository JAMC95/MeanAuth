import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';

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

  constructor(private ValidateService: ValidateService) { }

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
      console.log('Please fill in all fields')
      return false;
    }
    // Validate email
    if(!this.ValidateService.validateEmail(user)) {
      console.log('Please type a valid email')
      return false;
    }
  }
}
