import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ToDo App';

  minhafuncao() {
    this.title = "Mudei de nome";
  }
}
