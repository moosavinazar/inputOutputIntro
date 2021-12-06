import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inputOutputIntro';

  ratings: number[] = [3.5, 4, 1.5, 5, 2.5];

  public onStartClicked(rating: number) {
    console.log(`The rating ${rating} is clicked`);
  }
}
