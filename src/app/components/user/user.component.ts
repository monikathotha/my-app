import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];

  constructor(private dataService:DataService) { 
  }

  ngOnInit() {
    this.name = 'Monika Thotha';
    this.age = 30;
    this.email = 'test@test.com';
    this.address = {
      street:'149 Santa Lucia Ave',
      city:'San Bruno'
    }
    this.hobbies = ['play1', 'play2', 'play3'];
  }

  onClick(){
    this.hobbies.push('New Hobby');
    
  }

  addHobby(newHobby){
    this.hobbies.unshift(newHobby);
    return false;
    
  }

  onDelete(index) {
    console.log(index);
    this.hobbies.splice(index,1);
    //return false;
  }

}

interface Address {
  street:string;
  city:string;
}
