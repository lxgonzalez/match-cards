import {Injectable, signal} from '@angular/core';
import {Level} from "../models/level";
import {card} from "../models/card";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  levels: Level[] = [
    {
      "text": "EASY",
      "cards": 6,
      "timeMin": 10,
      "timeMax": 60
    },
    {
      "text": "MEDIUM",
      "cards": 12,
      "timeMin": 60,
      "timeMax": 120
    },
    {
      "text": "HARD",
      "cards": 15,
      "timeMin": 120,
      "timeMax": 180
    }
  ];
  extension: string = ".jpg";
  addressImg: string = "cards"
  cards: card[] = [
    {
      "id": 1,
      "card": "card1",
      "extension": `${this.addressImg}/1${this.extension}`,
    },
    {
      "id": 2,
      "card": "card2",
      "extension": `${this.addressImg}/2${this.extension}`,
    },
    {
      "id": 3,
      "card": "card3",
      "extension": `${this.addressImg}/3${this.extension}`,
    },
    {
      "id": 4,
      "card": "card4",
      "extension": `${this.addressImg}/4${this.extension}`,
    },
    {
      "id": 5,
      "card": "card5",
      "extension": `${this.addressImg}/5${this.extension}`,
    },
    {
      "id": 6,
      "card": "card6",
      "extension": `${this.addressImg}/6${this.extension}`,
    },
    {
      "id": 7,
      "card": "card7",
      "extension": `${this.addressImg}/7${this.extension}`,
    },
    {
      "id": 8,
      "card": "card8",
      "extension": `${this.addressImg}/8${this.extension}`,
    },
    {
      "id": 9,
      "card": "card9",
      "extension": `${this.addressImg}/9${this.extension}`,
    },
    {
      "id": 10,
      "card": "card10",
      "extension": `${this.addressImg}/10${this.extension}`,
    },
    {
      "id": 11,
      "card": "card11",
      "extension": `${this.addressImg}/11${this.extension}`,
    },
    {
      "id": 12,
      "card": "card12",
      "extension": `${this.addressImg}/12${this.extension}`,
    },
    {
      "id": 13,
      "card": "card13",
      "extension": `${this.addressImg}/13${this.extension}`,
    },
    {
      "id": 14,
      "card": "card14",
      "extension": `${this.addressImg}/14${this.extension}`,
    },
    {
      "id": 15,
      "card": "card15",
      "extension": `${this.addressImg}/15${this.extension}`,
    },
    {
      "id": 16,
      "card": "card16",
      "extension": `${this.addressImg}/16${this.extension}`,
    },
    {
      "id": 17,
      "card": "card17",
      "extension": `${this.addressImg}/17${this.extension}`,
    },
    {
      "id": 18,
      "card": "card18",
      "extension": `${this.addressImg}/18${this.extension}`,
    },
    {
      "id": 19,
      "card": "card19",
      "extension": `${this.addressImg}/19${this.extension}`,
    },
    {
      "id": 20,
      "card": "card20",
      "extension": `${this.addressImg}/20${this.extension}`,
    },
    {
      "id": 21,
      "card": "card21",
      "extension": `${this.addressImg}/21${this.extension}`,
    },
    {
      "id": 22,
      "card": "card22",
      "extension": `${this.addressImg}/22${this.extension}`,
    },
    {
      "id": 23,
      "card": "card23",
      "extension": `${this.addressImg}/23${this.extension}`,
    },
    {
      "id": 24,
      "card": "card24",
      "extension": `${this.addressImg}/24${this.extension}`,
    },
    {
      "id": 25,
      "card": "card25",
      "extension": `${this.addressImg}/25${this.extension}`,
    },
    {
      "id": 26,
      "card": "card26",
      "extension": `${this.addressImg}/26${this.extension}`,
    },
    {
      "id": 27,
      "card": "card27",
      "extension": `${this.addressImg}/27${this.extension}`,
    },
    {
      "id": 28,
      "card": "card28",
      "extension": `${this.addressImg}/28${this.extension}`,
    },
    {
      "id": 29,
      "card": "card29",
      "extension": `${this.addressImg}/29${this.extension}`,
    },
    {
      "id": 30,
      "card": "card30",
      "extension": `${this.addressImg}/30${this.extension}`,
    },
  ]

  levelSelected = signal<Level>({
    "text": "",
    "cards": 0,
    "timeMin": 0,
    "timeMax": 0
  })

  score = signal<number>(0)

  constructor() {
  }

}
