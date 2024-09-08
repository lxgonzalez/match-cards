import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {GameService} from "../../service/game.service";
import {DecimalPipe, NgClass, NgStyle} from "@angular/common";

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [
    DecimalPipe,
    NgStyle,
    NgClass
  ],
  templateUrl: './score.component.html',
  styleUrl: './score.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScoreComponent {
  gameService = inject(GameService)

  score = this.gameService.score

}
