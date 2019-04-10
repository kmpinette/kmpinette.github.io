import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'work-page',
  templateUrl: './work.component.html'
})
export class WorkComponent implements OnInit {
    constructor(private elementRef: ElementRef) {}
    @ViewChild('work') work:ElementRef;
    ngOnInit(){
    }
    hovered(elem){
        if(elem.target.nextSibling.classList.contains('hiddenbtn')){
            elem.target.nextSibling.classList.remove('hiddenbtn');
        }
        elem.target.classList.add('hidden');
    }
    notHovered(elem){
        console.log(elem);
        let box = elem.target.children;
        for(let i = 0; i < box.length; i++){
            if(box[i].classList.contains('hidden')){
                box[i].classList.remove('hidden')
            } else if(box[i].classList.contains('btn-project')){
                box[i].classList.add('hiddenbtn')
            }
        }
    }
    
    
}