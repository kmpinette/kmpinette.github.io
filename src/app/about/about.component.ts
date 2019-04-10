import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  @ViewChild('work') work:ElementRef;
    constructor() { }
    ngOnInit() {
    }
    
}