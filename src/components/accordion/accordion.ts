import { Component, Input, OnInit, Renderer, ViewChild } from '@angular/core';

@Component({
  selector: "accordion",
  templateUrl: "accordion.html"
})
export class AccordionComponent implements OnInit {
  text: string;
  accordionExapanded = false;
  @ViewChild("content") content: any;
  @Input() history: string;
  @Input() time: string;
  buttonColor: string = '#fff';
  constructor(public renderer: Renderer) { }

  ngOnInit() {
    console.log(this.content.nativeElement);
  }

  toggleAccordion() {
    this.buttonColor ='#fff';
    if (this.accordionExapanded) {
      this.renderer.setElementStyle(
        this.content.nativeElement,
        "max-height",
        "0px"
      );
    } else {
      this.buttonColor='#d1c4e9';
      this.renderer.setElementStyle(
        this.content.nativeElement,
        "max-height",
        "7000px"
      );
    }
    this.accordionExapanded = !this.accordionExapanded;

  }
}
