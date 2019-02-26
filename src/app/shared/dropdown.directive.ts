import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
isOpen = false;

@HostListener('click') toggleOpen(event) {
if (this.isOpen === false) {
  this.renderer.addClass(this.elRef.nativeElement, "open")
  this.isOpen = true;
} else {
  this.renderer.removeClass(this.elRef.nativeElement, "open")
  this.isOpen = false;
}

}



  constructor(private elRef: ElementRef, private renderer: Renderer2 ) { }

}
