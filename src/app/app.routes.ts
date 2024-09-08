import { Routes } from '@angular/router';
import {MenuComponent} from "./components/menu/menu.component";
import {GameComponent} from "./components/game/game.component";
import {ScoreComponent} from "./components/score/score.component";

export const routes: Routes = [
  {path:'',component:MenuComponent},
  {path:'game',component:GameComponent},
  {path:'score',component:ScoreComponent}
];
