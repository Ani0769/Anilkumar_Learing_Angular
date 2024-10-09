import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Perfumes} from "../Shared/perfumes";
import {perfumesList} from "../data/mock-content";

@Injectable({
  providedIn: 'root'
})
export class PerfumesService {

  constructor() { }
  getPerfumes(): Observable<Perfumes[]> {
    return of(perfumesList);
  }
}
