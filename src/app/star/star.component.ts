import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  @Input() rating: number = 3.5;
  width: number = 90;

  constructor() { }

  ngOnInit(): void {
    this.width = this.rating * 90 / 5;
  }

}
