import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {GameService} from "../../service/game.service";
import {Level} from "../../models/level";
import {card} from "../../models/card";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {

  gameService = inject(GameService)
  private router: Router

  levels: Level[] = this.gameService.levels
  cards: card[] = this.gameService.cards

  changeLevel(level: Level) {
    this.gameService.levelSelected.set(level);
  }
}
