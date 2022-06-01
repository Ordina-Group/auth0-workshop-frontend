import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styles: [
  ]
})
export class MovieItemComponent implements OnInit {

  @Input() name: string;
  @Input() image: string;

  constructor() { }

  ngOnInit(): void {
  }

}
