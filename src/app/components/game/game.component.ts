import {ChangeDetectionStrategy, Component, inject, OnInit, signal} from '@angular/core';
import {GameService} from "../../service/game.service";
import {DatePipe, DecimalPipe, JsonPipe, NgClass, NgOptimizedImage, NgStyle} from "@angular/common";
import {card} from "../../models/card";
import {Router} from "@angular/router";
import {slideInAnimation} from "../../animations/route-transition";

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    JsonPipe,
    NgOptimizedImage,
    NgStyle,
    NgClass,
    DecimalPipe,
    DatePipe
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
  animations: [slideInAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent implements OnInit {

  gameService = inject(GameService)

  levelSelected = this.gameService.levelSelected
  success = signal<number>(0)
  cards = signal<card[]>(this.gameService.cards.slice(0, this.levelSelected().cards))

  time = signal<Date>(new Date(98, 1))

  cardsDuplicate: card [] = []

  cardsGame: card[] = []
  router = inject(Router)

  ngOnInit(): void {
    setInterval(() => {
      this.time.set(new Date(this.time().setSeconds(this.time().getSeconds() + 1)))
    }, 1000)

    if (this.cards().length == 0) {
      this.router.navigate(['/'])
    }

    for (let i = 0; i < this.cards().length; i++) {
      let cardAux: card = new card()
      cardAux.id = this.cards()[i].id
      cardAux.extension = this.cards()[i].extension
      cardAux.card = this.cards()[i].card + '-' + 'copia'
      this.cardsDuplicate.push(cardAux)
    }
    this.cards().push(...this.cardsDuplicate)

    this.cards.set(this.shuffle(this.cards()))
    // this.cards = this.cards.sort(() => Math.random() - 0.5)
  }

  shuffle(array: card[]): card[] {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

  hidden(card: card) {
    let cardBack = card.card + '-back'
    let cardFront = card.card + '-front'

    if (this.cardsGame.length < 2) {
      let cardBackElement = document.getElementsByClassName(cardBack)[0]
      let cardFrontElement = document.getElementsByClassName(cardFront)[0]

      cardBackElement.classList.add('rotateBack')
      cardFrontElement.classList.add('rotateFront')
      this.addCardGame(card)
    }

  }

  addCardGame(card: card) {
    this.cardsGame.push(card)
    this.comparedCard()
  }

  comparedCard() {

    if (this.cardsGame.length == 2) {
      if (this.cardsGame[0].id == this.cardsGame[1].id && this.cardsGame[0].card == this.cardsGame[1].card) {
        this.hiddenCard()
      }
      if (this.cardsGame[0].id == this.cardsGame[1].id && this.cardsGame[0].card != this.cardsGame[1].card) {
        this.cardsGame.map((c) => {
          let cardBack = c.card + '-back'
          let cardFront = c.card + '-front'

          let cardBackElement = document.getElementsByClassName(cardBack)[0]
          let cardFrontElement = document.getElementsByClassName(cardFront)[0]

          setTimeout(() => {
            cardBackElement.classList.add('hidden')
            cardFrontElement.classList.add('hidden')
          }, 500)
          setTimeout(() => {
            cardBackElement.classList.add('none')
            cardFrontElement.classList.add('none')
          }, 800)

        })
        this.success.set(this.success() + 1)

      } else if (this.cardsGame[0].id != this.cardsGame[1].id) {
        this.hiddenCard()
      }
      this.cardsGame = []
      // this.attempt.set(this.attempt() + 1)
    }
    this.calculateScore()

  }

  hiddenCard() {
    this.cardsGame.map((c) => {
      let cardBack = c.card + '-back'
      let cardFront = c.card + '-front'

      let cardBackElement = document.getElementsByClassName(cardBack)[0]
      let cardFrontElement = document.getElementsByClassName(cardFront)[0]

      setTimeout(() => {
        cardBackElement.classList.remove('rotateBack')
        cardFrontElement.classList.remove('rotateFront')
      }, 1000)
    });
  }

  calculateScore() {

    if (this.success() == this.levelSelected().cards) {
      if (this.time().getSeconds() < this.levelSelected().timeMin) {
        this.gameService.score.set(100)
      } else {
        this.gameService.score.set(
          100 * (1 - ((this.time().getSeconds() - this.levelSelected().timeMin) / (this.levelSelected().timeMax - this.levelSelected().timeMin)))
        )
      }

      this.router.navigate(['score'])
    }
  }
}
