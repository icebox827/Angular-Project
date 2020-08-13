import { Component} from '@angular/core';
import { trigger, state, style, transition, animate, animation } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations :[

  ]
})
export class ContactComponent {
  input = {
    'width': '360px',
    'background': '#fff',
    'box-shadow': '0 6px 10px 0 rgba(0, 0, 0, .1)',
    'border': '0',
    'outline': '0',
    'padding': '22px 18px',
  }
  contacts = [{"first_name":"Tatum","last_name":"Vernon","email":"tvernon0@lycos.com","gender":"Female","company":"Youopia"},
  {"first_name":"Anet","last_name":"Bellis","email":"abellis1@cnn.com","gender":"Female","company":"Oloo"},
  {"first_name":"Pippa","last_name":"Goymer","email":"pgoymer2@ihg.com","gender":"Female","company":"Browsecat"},
  {"first_name":"Addison","last_name":"Lawther","email":"alawther3@walmart.com","gender":"Male","company":"Yoveo"},
  {"first_name":"Anya","last_name":"Franzman","email":"afranzman4@bravesites.com","gender":"Female","company":"Twitterbeat"}]

  first_name = '';
  last_name = '';
  gender = '';
  email = '';
  company = '';
  addContact(value:any){
    this.contacts.unshift({
      first_name = value.first_name,
      last_name = value.last_name,
      gender = value.gender,
      email = value.email,
      company = value.company
    });
    this.first_name = '';
    this.last_name = '';
    this.gender = '';
    this.email = '';
    this.company = '';
  };
}
