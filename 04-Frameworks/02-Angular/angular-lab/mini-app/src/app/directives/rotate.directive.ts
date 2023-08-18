import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[rotate]'
})
export class RotateDirective implements OnInit {
  @Input() step = '10';
  @Input() rotate = '0';

  constructor(private el: ElementRef) {
  }
  
  ngOnInit() {
    if(this.el.nativeElement.tagName === 'IMG') {
      console.log(this.el.nativeElement.tagName)
      this.el.nativeElement.style.transform = `rotate(${this.rotate}deg)`;
    }    
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    if(event.button === 0 && event.shiftKey && this.el.nativeElement.tagName === 'IMG' ){
      this.el.nativeElement.style.transform += `rotate(-${this.step}deg)`;
    } else if(this.el.nativeElement.tagName === 'IMG') {
      this.el.nativeElement.style.transform += `rotate(${this.step}deg)`;
    }
  }
}
