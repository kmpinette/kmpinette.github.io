import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';  
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  animations:[ 
    trigger('fade',
    [ 
      state('void', style({ opacity : 0})),
      transition(':enter',[ animate(300)]),
      transition(':leave',[ animate(500)]),
    ]
  )]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
}

