import { Component, OnInit, Renderer, ViewChild } from '@angular/core';

@Component({
  selector: "accordion",
  templateUrl: "accordion.html"
})
export class AccordionComponent implements OnInit{
  text: string;
  accordionExapanded = false;
  @ViewChild("content") content: any;
  constructor(public renderer: Renderer) {}

  ngOnInit() {
    console.log(this.content.nativeElement);
  }

  toggleAccordion() {
    if (this.accordionExapanded) {
      this.renderer.setElementStyle(
        this.content.nativeElement,
        "max-height",
        "0px"
      );
    } else {
      this.renderer.setElementStyle(
        this.content.nativeElement,
        "max-height",
        "7000px"
      );
    }

    this.accordionExapanded = !this.accordionExapanded;
  }
}
