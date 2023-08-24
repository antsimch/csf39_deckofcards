import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeckComponent } from './components/deck/deck.component';
import { DrawCardComponent } from './components/draw-card/draw-card.component';

const routes: Routes = [
  { path: '', component: DeckComponent },
  { path: 'deck/:deckId', component: DrawCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
