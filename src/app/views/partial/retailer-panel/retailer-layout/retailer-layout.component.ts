import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from '../top-bar/top-bar.component';

@Component({
  selector: 'app-retailer-layout',
  standalone: true,
  imports: [
    TopBarComponent,
    NavBarComponent,
    FooterComponent,
    RouterModule,
  ],
  templateUrl: './retailer-layout.component.html',
  styleUrl: './retailer-layout.component.scss'
})
export class RetailerLayoutComponent {

}
