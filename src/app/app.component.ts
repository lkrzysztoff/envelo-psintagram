import { Component, OnInit, Input, Output } from '@angular/core';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  
  
  export class AppComponent {
  selectedBreed:string = '';
  constructor() { }

  ngOnInit(): void {
  }
  selectBreed( selectedBreed:string){
    console.log('Selected breed = ' + selectedBreed);
    this.selectedBreed = selectedBreed;
  }

}
