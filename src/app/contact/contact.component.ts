import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
  public user: User
  constructor() {
    this.user = new User('', '', '', '')
  }

  ngOnInit(): void {

  }

  onSubmit(){}
}
