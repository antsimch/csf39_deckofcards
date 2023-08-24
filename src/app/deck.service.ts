import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  readonly API_SHUFFLE = 'https://deckofcardsapi.com/api/deck/new/shuffle/'

  constructor(private http: HttpClient) { }

  getDeck(num: number) {
    const params = new HttpParams().set('deck_count', num)
    console.log(params)
    return lastValueFrom(this.http.get<any>(this.API_SHUFFLE, { params }))
  }

  getCardsFromDeck(id: string, num: number) {
    const params = new HttpParams().set('count', num)
    console.log(params)
    return lastValueFrom(this.http.get<any>(
      `https://deckofcardsapi.com/api/deck/${id}/draw/`, 
      { params }))
  }
}
