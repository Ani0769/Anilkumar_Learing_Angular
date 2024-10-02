import { Component } from '@angular/core';
import {Perfumes} from "../Shared/perfumes";
import {PerfumesListItemComponent} from "../perfumes-list-item/perfumes-list-item.component";
import {NgForOf} from "@angular/common";

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
  //function to set which student to display
  selectPerfumes(perfumes: Perfumes): void {
    this.selectedPerfumes = perfumes;
  }

}
