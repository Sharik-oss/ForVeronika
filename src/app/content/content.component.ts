import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  @Input() img = ''
  @Input() text = ''
  @Input() direction = "row"
  constructor(){
    console.log(this.img, "img");

  }
} 
