import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  openGitHub() {
    window.open('https://github.com/gabuoff', '_blank');
  }

  sendToFiverr() {
    window.open('https://br.fiverr.com/gabc_melo', '_blank');
  }
}
