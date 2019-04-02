import { Component, OnInit } from "@angular/core";
import { trigger, keyframes, animate, transition } from "@angular/animations";
import * as kf from './keyframes'

@Component({
  selector: "app-hammer-card",
  templateUrl: "./hammer-card.component.html",
  styleUrls: ["./hammer-card.component.scss"],
  animations: [
    trigger("cardAnimator", [
      transition("* => wobble", animate(1000, keyframes(kf.wobble))),
      transition("* => swing", animate(1000, keyframes(kf.swing))),
      transition("* => jello", animate(1000, keyframes(kf.jello))),
      transition(
        "* => zoomOutRight",
        animate(1000, keyframes(kf.zoomOurRight))
      ),
      transition("* => slideOutLeft", animate(1000, keyframes(kf.zoomOurLeft))),
      transition("* => flipOutY", animate(1000, keyframes(kf.flipOutY)))
    ])
  ]
})
export class HammerCardComponent implements OnInit {
  animationState: string;
  strartAnimation(state) {
    console.log(state);
    if (!this.animationState) {
      this.animationState = state;
    }
  }
  resetAnimation(){this.animationState=''}
  constructor() {}

  ngOnInit() {}
}
