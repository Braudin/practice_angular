import { Component, OnInit } from '@angular/core';
import { ComicsService } from 'src/app/services/comics.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
})
export class ListComponent implements OnInit {
  constructor(private comicsService: ComicsService) {}

  public getComics(): void {
    this.comicsService.getComics().subscribe((data) => {
      console.log(data);
    });
  }

  public ngOnInit(): void {
    this.getComics();
  }
}
