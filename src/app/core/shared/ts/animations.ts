// Importaciones necesarias de Angular para animaciones
import { trigger, transition, style, animate } from '@angular/animations';

/**
 * Animación de desvanecimiento (fade in/out).
 */
export const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('800ms', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    animate('800ms', style({ opacity: 0 })),
  ]),
]);

/**
 * Animación de desvanecimiento y escala al entrar y salir.
 */
export const fadeInOutAndScale = trigger('fadeInOutAndScale', [
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
