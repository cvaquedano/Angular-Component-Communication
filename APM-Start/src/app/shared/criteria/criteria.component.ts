import { Component, OnInit, ViewChild, ElementRef, Input, OnChanges, AfterViewInit, SimpleChanges, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'pm-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.css']
})
export class CriteriaComponent implements OnInit,OnChanges,AfterViewInit {
 

 
  @Input()hitCount:number;
  @Input() displayDetail:boolean
  @ViewChild('filterElement') filterElementRef: ElementRef;
  hitMessages:string;
  @Output() valueChange:EventEmitter<string> = 
            new EventEmitter<string>();

  private _listFilter: string;
  public get listFilter(): string {
    return this._listFilter;
  }
  public set listFilter(value: string) {
    this._listFilter = value;
    this.valueChange.emit(value);
  }


  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit():void{
    if(this.filterElementRef)
      this.filterElementRef.nativeElement.focus();
}

ngOnChanges(changes:SimpleChanges):void{
if(changes['hitCount']&& !changes['hitCount'].currentValue){
  this.hitMessages='Not matches found';
}else{
  this.hitMessages = 'Hits: ' + this.hitCount;
}
}

}
