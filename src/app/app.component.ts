import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'climacte';
  images = [
    "https://pbs.twimg.com/media/ELWfl4gWsAEIGHk.jpg",
    "https://images.radio-canada.ca/q_auto,w_1250/v1/ici-info/16x9/feux-forets-amazonie.jpg",
    "https://i0.wp.com/mrmondialisation.org/wp-content/uploads/2019/10/amazonie-696x392.jpeg"
  ]
}
