import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-greetings',
  standalone: true,
  imports: [],
  templateUrl: './greetings.component.html',
  styleUrl: './greetings.component.scss'
})
export class GreetingsComponent {
  constructor(private route: Router){}
  
  
  routeToAnother(){
    this.route.navigate(['content'])
  }
}
