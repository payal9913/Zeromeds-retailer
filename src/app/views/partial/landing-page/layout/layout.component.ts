import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { ContentSectionComponent } from '../../../pages/landing-page/content-section/content-section.component';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    NavBarComponent,
    FooterComponent,
    RouterModule,
    ContentSectionComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
