import {animate, animateChild, group, query, style, transition, trigger} from "@angular/animations";

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({
        position: 'relative'
      }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          width: '100%',
          height: '100%'
        })
      ], {optional: true}),

      query(' :enter', [
        // style({left: '-100%'})
        style({opacity: 0})
      ], {optional: true}),

      query(':leave', animateChild(), {optional: true}),
      group([

        query(':leave', [
          animate('10ms', style({opacity: 0}))
        ], {optional: true}),

        query(':enter', [
          animate('1000ms', style({opacity: 1}))
        ], {optional: true}),

        query('@*', animateChild(), {optional: true})
      ]),
    ])
  ]);
