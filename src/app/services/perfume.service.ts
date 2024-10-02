import { Injectable } from '@angular/core';
import {perfumesList} from "../data/mock-content";
import {Observable, of} from "rxjs";
import {Perfumes} from "../Shared/perfumes";

@Injectable({
  providedIn: 'root'
})
export class PerfumeService {

  constructor() { }

  getPerfumes(): Observable<Perfumes[]> {
    return of(perfumesList);
  }
}
