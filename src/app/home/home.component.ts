import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel';
import { BadgeModule } from 'primeng/badge';
import { CardComponent } from "./card/card.component";
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { BannerComponent } from "../banner/banner.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
        AvatarModule,
        CommonModule,
        CardComponent,
        AnimateOnScrollModule,
        BannerComponent
    ]
})
export class HomeComponent {


}
