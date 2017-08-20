import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

export const show = trigger('show',[
  state('in', style({
  })),
  // transition(':enter', [
  //   style({
  //     transform: 'translateX(-100%)',
  //   }),
  //   animate(500)
  // ]),
  transition(':enter', [
    animate(300, keyframes([
      style({opacity: 0, transform: 'translateX(-100%)'}),
      style({opacity: 1, transform: 'translateX(15px)'}),
      style({opacity: 1, transform: 'translateX(0)'})
    ]))
  ]),
  transition(':leave', [
    animate(300, keyframes([
      style({opacity: 1, transform: 'translateX(0)'}),
      style({opacity: 1, transform: 'translateX(-15px)'}),
      style({opacity: 0, transform: 'translateX(100%)'})
    ]))
  ])
])
