import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { REST_URLS } from '../../core/constants';
import { IMedia, IQuote } from '../interfaces/random';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor(
    private http: HttpClient
  ) { }

  getRandomQuote(): Observable<IQuote> {
    return this.http.get(REST_URLS.KANYE).pipe(
      map((val: any) => {
        return {
          quote: `"${val.quote}" - Kanye West`
        }
      })
    );
  }

  getRandomImage() {
    return <Observable<IMedia>>this.http.get(REST_URLS.IMAGE + '/1920x1080');
  }

}
