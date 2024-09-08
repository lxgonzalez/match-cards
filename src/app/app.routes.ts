import {Routes} from '@angular/router';
import {MenuComponent} from "./components/menu/menu.component";
import {GameComponent} from "./components/game/game.component";
import {ScoreComponent} from "./components/score/score.component";

export const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    data: {animation: 'menuPage'}
  },
  {
    path: 'game',
    component: GameComponent,
    data: {animation: 'gamePage'}
  },
  {
    path: 'score',
    component: ScoreComponent,
    data: {animation: 'scorePage'}
  },
  {
    path: '**',
    redirectTo: 'menu',
    pathMatch: 'full'
  }
];
