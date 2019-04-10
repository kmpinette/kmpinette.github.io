import { Component, OnInit, ViewChild, ElementRef, Renderer2, OnDestroy  } from '@angular/core';
import {interval, Subscription } from 'rxjs';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  subscription: Subscription;
  constructor(private renderer:Renderer2) { }

  ngOnInit() {
    this.headerImage.nativeElement.setAttribute("style", "height: " + window.innerHeight + "px");
    const source = interval(3000);
    this.subscription = source.subscribe(() => this.generateStars());
    this.genTwinkleStars();
    let body = document.getElementsByTagName('body')[0].setAttribute('max-width', window.innerWidth + 'px');
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  doTimeout(count){
    setTimeout(()=>{ this.randomLocation()}, count);
  }
  generateStars(){
    let stars = this.howManyStars();
    this.randomLocation();
    let count = 500;
    for(let i = 0; i < stars; i++){
      this.doTimeout(count);
      count += 500;
    }
  }
  genTwinkleStars(){
    let onPageLoad = true;
    const source = interval(1);
    if (onPageLoad){
      for(var i = 0; i < 100; i++){
        this.genTwinkle();
      }
    }
    this.subscription = source.subscribe(() => this.genTwinkle());
  }
  genTwinkle(){
    let height = window.innerHeight;
    let width = window.innerWidth;
    let div = this.renderer.createElement('div');
    let newLocationH = Math.random() * (height - 1 ) + 1;
    let newLocationW = Math.random() * (width - 1 ) + 1;
    let size = Math.floor(Math.random() * ( 5 - 1 )) +1;
    div.setAttribute("class", "shine-star");
    div.setAttribute("style", "top: " + newLocationH+"px; " + "left: " + newLocationW +"px; " + "height: " + size + "px; width: " + size + "px");
    this.renderer.appendChild(this.headerImage.nativeElement, div);
    let elem = this.headerImage;
    setTimeout(function(){
      elem.nativeElement.removeChild(div);
    }, 2000);
  }
  howManyStars(){
    return Math.floor(Math.random() * (5 - 1)) + 1;
  }
  @ViewChild('headerImage') headerImage:ElementRef;
  randomLocation(){
    let height = window.innerHeight - 800;
    let width = window.innerWidth + 200;
    let newLocationH = Math.random() * (height - 1 ) + 1;
    let newLocationW = Math.random() * (width - 1 ) + 1;
    let div = this.renderer.createElement('div');
    div.setAttribute("class", "star");
    div.setAttribute("style", "top: " + newLocationH+"px; " + "left: " + newLocationW +"px");
    this.renderer.appendChild(this.headerImage.nativeElement, div);
    let elem = this.headerImage;
    setTimeout(function(){
      elem.nativeElement.removeChild(div);
    }, 3000);
  }
}