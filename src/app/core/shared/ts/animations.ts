import { trigger, transition, style, animate } from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('800ms', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    animate('800ms', style({ opacity: 0 })),
  ]),
]);

export const fadeInOutAndScale  = trigger('fadeInOutAndScale', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'scale(0.5)'
    }),
    animate('2000ms ease-out', style({
      opacity: 1,
      transform: 'scale(1)'
    })),
  ]),
  transition(':leave', [
    animate('2000ms ease-in', style({
      opacity: 0,
      transform: 'scale(0.5)'
    })),
  ]),
]);
