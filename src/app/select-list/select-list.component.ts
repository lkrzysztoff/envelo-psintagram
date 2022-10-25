import { ChangeDetectionStrategy, Component, OnInit, SimpleChanges, Output, EventEmitter } from '@angular/core';
import {ApiService} from './../api.service';

@Component({
  selector: 'app-select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.css']
  
  
})


export class SelectListComponent implements OnInit {
  @Output() selectedBreedEvent:EventEmitter<string> = new EventEmitter<string>();
  title = 'my-application';
  breedsData: string[] = [];

  constructor(private api:ApiService) { }
  ngOnInit() {
    var datas = this.breedsData;
    this.api.getBreeds().subscribe( (data)=>{
      //data.[message.each()//this.breedsData = data;
      Object.keys(JSON.parse(JSON.stringify(data)).message).forEach(function(key){ //
        datas.push( key );
      });
      this.selectedBreedEvent.emit( datas[0] );
    });
  }
  onChange(event:any) {
    this.selectedBreedEvent.emit( event.target.value );
  }

}







//function gettingValue(){
  //let labelValue = document.getElementById("slct");
  //let finalValue = labelValue?.

  //console.log(finalValue)
//}
//gettingValue();

