import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DeckService } from 'src/app/deck.service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent {
  
  numberArr: number[] = [ 1, 2, 3, 4 ]
  deckId!: string
  remainingCards!: number

  constructor(
      private deckSvc: DeckService,
      private router: Router) {}

  createDeck(num: number) {
    this.deckSvc.getDeck(num)
        .then(
            result => {
                this.deckId = result['deck_id']
                this.remainingCards = result['remaining']
                console.log('deck id >>>> ' + this.deckId)
                console.log('cards remaining >>>> ' + this.remainingCards)
                this.router.navigate(['/deck', this.deckId])
            }
        )
  }
}
