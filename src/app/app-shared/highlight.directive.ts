import { Directive, ElementRef, Renderer, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @Input() highlight: string;

  @HostBinding("class.ng-hover")
  isHover: boolean;

  constructor(private elementRef: ElementRef, private renderer: Renderer) { 
    //this.renderer.setElementStyle(this.elementRef.nativeElement, "background-color", "yellow");

  }
  @HostListener("mouseenter")
  onMouseOver(){

    this.renderer.setElementStyle(this.elementRef.nativeElement, 
                            "background-color", this.highlight);
                            this.isHover = true;
  }
  @HostListener("mouseleave")
  onMouseLeave(){

    this.renderer.setElementStyle(this.elementRef.nativeElement, "background-color", "white");
    this.isHover = false;
  }

}
