import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Perfumes } from "./Shared/perfumes";
import {JsonPipe, NgForOf} from "@angular/common";
import {PerfumesListComponent} from "./perfumes-list/perfumes-list.component";
import {PerfumesListItemComponent} from "./perfumes-list-item/perfumes-list-item.component";
import {PerfumesService} from "./service/perfumes.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, JsonPipe, PerfumesListComponent, PerfumesListItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Royal Perfumes';
  perfume?: Perfumes;

  constructor(private PerfumesService:PerfumesService ) {}

  ngOnInit(): void {

    this.PerfumesService.getPerfumeById(3).subscribe((data) => {
      this.perfume = data;
    });
  }

}

