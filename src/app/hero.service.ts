// Exmaple of naming: the filename for SpecialSuperHeroService is special-super-hero.service.ts.
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

// A Promise essentially promises to call back when the results are ready.
@Injectable()
export class HeroService {// could get Hero data from anywhere
  // Here its
  getHeroes(): Promise<Hero[]> { //A Promise essentially promises to call back when the results are ready.
    return Promise.resolve(HEROES);
  }


  getHeroesSlowly(): Promise<Hero[]> {
  return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 1000);
    });
  }

}
