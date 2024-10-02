import { Component } from '@angular/core';
import {Perfumes} from "../Shared/perfumes";
import {PerfumesListItemComponent} from "../perfumes-list-item/perfumes-list-item.component";
import {NgForOf} from "@angular/common";
import {PerfumeService} from "../services/perfume.service";

@Component({
  selector: 'app-perfumes-list',
  standalone: true,
  imports: [
    PerfumesListItemComponent,
    NgForOf
  ],
  templateUrl: './perfumes-list.component.html',
  styleUrl: './perfumes-list.component.css'
})
export class PerfumesListComponent {

  selectedPerfumes?: Perfumes;

  selectPerfumes(perfumes: Perfumes): void {
    this.selectedPerfumes = perfumes;
  }

  perfumes: Perfumes[] = [];
  constructor(private perfumeService: PerfumeService) {}
}
