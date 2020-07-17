import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice3',
  templateUrl: './practice3.component.html',
  styleUrls: ['./practice3.component.css']
})
export class Practice3Component implements OnInit {
  toggleStatus = false;
  presses = [];
  constructor() { }

  ngOnInit(): void {
  }
  toggle(){
    this.presses.push(new Date());
    this.toggleStatus = !this.toggleStatus;
  }
}
