import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../model/User';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  user?: User;

  username = new FormControl('');
  email = new FormControl('');
  mdp = new FormControl('');
  rue = new FormControl('');
  codePostal = new FormControl('');
  ville = new FormControl('');


  newUser(){
    this.user = new User(
      this.username.value,
      this.email.value,
      this.mdp.value,
      this.rue.value
      this.codePostal.value,
      this.ville.value
    )
  }
}





