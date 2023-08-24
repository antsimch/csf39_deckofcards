import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeckService } from 'src/app/deck.service';

@Component({
  selector: 'app-draw-card',
  templateUrl: './draw-card.component.html',
  styleUrls: ['./draw-card.component.css']
})
export class DrawCardComponent implements OnInit {

  numberArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
  deckId!: string
  remainingCards!: number
  cardArr: string[] = []

  constructor(
    private route: ActivatedRoute,
    private deckSvc: DeckService
  ) {}

  ngOnInit(): void {
    this.deckId = this.route.snapshot.params['deckId']
    console.log('deckId >>>> ' + this.deckId)
    this.deckSvc.getCardsFromDeck(this.deckId, 0)
        .then(
            result => {
                this.remainingCards = result['remaining']
                console.log('remaining cards >>>> ' + this.remainingCards)
            }
        )
  }

  drawFromDeck(num: number) {
    if (this.remainingCards - num >= 0) {
      this.deckSvc.getCardsFromDeck(this.deckId, num)
      .then(
          result => {
              this.remainingCards = result['remaining']
              console.log('remaining cards >>>> ' + this.remainingCards)
              console.log(result['cards'])
              
              for (let i = 0; i < num; i++) {
                this.cardArr.push(result['cards'][i].image)
              }

              console.log(this.cardArr)
          }
      )
    }
  }
}
