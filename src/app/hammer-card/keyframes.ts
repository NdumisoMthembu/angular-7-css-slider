import { keyframes , style} from '@angular/animations';

export const swing = [
    style({transform:'rotate3d(0, 0, 1, 15deg)', offset:.2}),
    style({transform:'rotate3d(0, 0, 1, -10deg)', offset:.4}),
    style({transform:'rotate3d(0, 0, 1, 5deg)', offset:.6}),
    style({transform:'rotate3d(0, 0, 1, -5deg)', offset:.8}),
    style({transform:'none', offset:1}),
]
export const wobble = [
    style({transform:'translate3d(0, 0, 0)', offset:0}),
    style({transform:'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)', offset:.15}),
    style({transform:'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)', offset:.3}),
    style({transform:'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)', offset:.45}),
    style({transform:'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)', offset:.6}),
    style({transform:'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)', offset:.75}),
    style({transform:'none', offset:1}),
]
export const jello = [
    style({transform:''})
]
export const zoomOurRight = [
    style({transform:'translate3d(0, 0, 0)', offset:0}),
    style({transform:'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)', offset:.15}),
    style({transform:'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)', offset:.3}),
    style({transform:'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)', offset:.45}),
    style({transform:'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)', offset:.6}),
    style({transform:'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)', offset:.75}),
    style({transform:'none', offset:1}),
]
export const zoomOurLeft = [
    style({transform:'translate3d(0, 0, 0)', offset:0}),
    style({transform:'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)', offset:.15}),
    style({transform:'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)', offset:.3}),
    style({transform:'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)', offset:.45}),
    style({transform:'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)', offset:.6}),
    style({transform:'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)', offset:.75}),
    style({transform:'none', offset:1}),
]
export const flipOutY = [
    style({transform:''})
]

/*

 from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

*/