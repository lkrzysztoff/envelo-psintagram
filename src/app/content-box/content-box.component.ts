import { Component, OnInit,Input,SimpleChanges  } from '@angular/core';
import {ApiService} from './../api.service';

@Component({
  selector: 'app-content-box',
  templateUrl: './content-box.component.html',
  styleUrls: ['./content-box.component.css']
})
export class ContentBoxComponent implements OnInit {
  @Input() selectedBreed = '';
  pictureUrl:string = '';
  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges){
    if( changes['selectedBreed'] && changes['selectedBreed'].currentValue  != '' ) {
      // trzeba pobrac z api adres fotki
      this.api.getBreedPicture(changes['selectedBreed'].currentValue).subscribe( (data)=>{
        this.pictureUrl = JSON.parse(JSON.stringify(data)).message;
      });
    }
  }
}
