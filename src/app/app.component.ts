import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, animation } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations :[
    trigger('headerAnimation', [
      state('inactive', style({
        transform: 'scale(1)'
      })),
      state('active', style({
        transform: 'scale(1.5)'
      })),
      transition('active <=> inactive', animate('500ms 10ms ease-in-out'))
    ])
  ]
})
export class AppComponent {
  headerState = 'inactive';
  animateHeader(){
    //alert('Button clicked');
    this.headerState = (this.headerState === 'inactive' ? 'active' : 'inactive');

  }
  background = '#f5f6fa';
  person = 'Pipa';
  header = 'CRM';
  title = 'Gestion des relations clients';
}
