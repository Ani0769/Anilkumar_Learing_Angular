import { Injectable } from '@angular/core';
import {perfumesList} from "../data/mock-content";
import {Observable, of} from "rxjs";
import {Perfumes} from "../Shared/perfumes";

@Injectable({
  providedIn: 'root'
})
export class PerfumeService {
  private perfumes: Perfumes[] = perfumesList;

  constructor() { }

  getPerfumes(): Observable<Perfumes[]> {
    return of(this.perfumes);
  }

  getPerfumeById(id: number): Observable<Perfumes | undefined> {
    const perfume = this.perfumes.find(p => p.id === id);
    return of(perfume);
  }

  addPerfume(perfume: Perfumes): Observable<Perfumes[]> {
    this.perfumes.push(perfume);
    return of(this.perfumes);
  }

  updatePerfume(updatedPerfume: Perfumes): Observable<Perfumes[]> {
    const index = this.perfumes.findIndex(p => p.id === updatedPerfume.id);
    if (index !== -1) {
      this.perfumes[index] = updatedPerfume;
    }
    return of(this.perfumes);
  }

  removePerfume(id: number): Observable<Perfumes | null> {
    const index = this.perfumes.findIndex(p => p.id === id);
    if (index !== -1) {
      const removedPerfume = this.perfumes.splice(index, 1)[0];
      return of(removedPerfume);
    }
    return of(null);
  }
}
