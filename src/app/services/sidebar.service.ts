import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

  list:any[]=[
    {
      moduleName:'Modules',
      menus:[
        {
          title:'Dashboard',
          link:'dashboard',
          icon:'ri-home-4-fill'
        },
      ]
    },
    {
      moduleName:'Orders',
      menus:[
        {
          title:'Upload Orders',
          link:'orders/upload Orders'
        }
      ]
    }
  ]
}
