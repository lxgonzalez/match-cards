import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {GameService} from "../../service/game.service";
import {DecimalPipe, NgClass, NgStyle} from "@angular/common";
import {RouterLink} from "@angular/router";
import {slideInAnimation} from "../../animations/route-transition";

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [
    DecimalPipe,
    NgStyle,
    NgClass,
    RouterLink
  ],
  templateUrl: './score.component.html',
  styleUrl: './score.component.scss',
  animations: [slideInAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScoreComponent {
  gameService = inject(GameService)

  score = this.gameService.score

}
