import { Component, OnInit } from "@angular/core";
import { Slide } from "./Slide";

@Component({
  selector: "app-slide",
  templateUrl: "./slide.component.html",
  styleUrls: ["./slide.component.scss"]
})
export class SlideComponent implements OnInit {
  slides: Array<Slide> = [
    {
      id: 1,
      tittle: "Card One",
      details: [
        `Lorem ipsum dolor sit amet consectetur 
    adipisicing elit. Labore asperiores sint
     dolorum voluptatibus quia ipsa`
      ]
    },
    {
      id: 2,
      tittle: "Card Two",
      details: [
        `Lorem ipsum dolor sit amet consectetur 
    adipisicing elit. Labore asperiores sint
     dolorum voluptatibus quia ipsa`
      ]
    },
    {
      id: 3,
      tittle: "Card Three",
      details: [
        `Lorem ipsum dolor sit amet consectetur 
    adipisicing elit. Labore asperiores sint
     dolorum voluptatibus quia ipsa`
      ]
    }
  ];
  currentSlide: number = 0;
  interval: any;
  constructor() {}
  ngOnInit() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 9000);
  }
  nextSlide() {
    // alert(this.currentSlide);
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 9000);
    if (this.currentSlide > this.slides.length - 2) {
      this.slides[this.currentSlide].id = 0;
      this.currentSlide = 0;
      this.slides[0].id = 1;
    } else {
      this.slides[this.currentSlide].id = this.currentSlide + 3;
      this.slides[this.currentSlide + 1].id = 1;
      this.currentSlide++;
    }
  }
  prevSlide() {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 9000);
    console.log(this.currentSlide);

    if (this.currentSlide > 0) {
      this.slides[this.currentSlide].id = this.currentSlide + 3;
      this.slides[this.currentSlide - 1].id = 1;
      this.currentSlide--;
    } else {
      this.slides[this.currentSlide].id = this.currentSlide + 4;
      this.currentSlide = this.slides.length-1;
      this.slides[this.currentSlide].id = 1;

    }
  }
}
