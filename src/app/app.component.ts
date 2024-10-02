import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Perfumes } from "./Shared/perfumes";
import {JsonPipe, NgForOf, NgIf} from "@angular/common";
import {PerfumesListComponent} from "./perfumes-list/perfumes-list.component";
import {PerfumesListItemComponent} from "./perfumes-list-item/perfumes-list-item.component";
import {PerfumeService} from "./services/perfume.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, JsonPipe, PerfumesListComponent, PerfumesListItemComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Royal Perfumes';
  selectedperfumes?: Perfumes;

  constructor(private PerfumeService : PerfumeService){}

  ngOnInit(): void {

    this.PerfumeService.getPerfumeById(3).subscribe(perfumes =>{
      this.selectedperfumes = perfumes;
    })
  }


}

