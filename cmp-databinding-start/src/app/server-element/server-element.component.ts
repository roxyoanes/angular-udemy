import { 
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck {
 @Input("srvElement") element: { type: string, name: string, content: string };
 @ViewChild('heading', {static:true}) header: ElementRef;
 @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() { }

  ngOnChanges(changes: SimpleChanges){

  }

  ngOnInit() {
  }

  ngDoCheck(){

  }

}
