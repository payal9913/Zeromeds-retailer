import { Component } from '@angular/core';
import { SidebarService } from '../../../../services/sidebar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {

  constructor(
    private sidebar:SidebarService
  ){}
}
