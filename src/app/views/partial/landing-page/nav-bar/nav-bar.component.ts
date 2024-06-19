import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  navMenu=[
    {
      title:'Home',
      path:'home',
      scrollspy:'#home'
    },
    {
      title:'Services',
      path:'services',
      scrollspy:'#services'
    },
    {
      title:'FAQs',
      path:'faqs',
      scrollspy:'#faqs'
    },
    {
      title:'About Us',
      path:'about-us' ,
      scrollspy:'#about-us'
   },
    {
      title:'Contact',
      path:'contact',
      scrollspy:'#contact'
    },
    {
      title:'Login',
      path:'login',
      scrollspy:'#login'
    }
  ]
}
