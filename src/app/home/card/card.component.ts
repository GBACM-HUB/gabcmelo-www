import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
linkedin: string = "https://www.linkedin.com/company/gabcmelo-it-solutions/";
facebook: string = "https://www.facebook.com/profile.php?viewas=100000686899395&id=61559907663147";
github: string = "https://github.com/GBACM-HUB";

  sendTo(str: string) {
    window.open(str, '_blank');
  }

}
