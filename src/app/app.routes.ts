import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { LayoutComponent } from './views/partial/landing-page/layout/layout.component';
import { ContentSectionComponent } from './views/pages/landing-page/content-section/content-section.component';
import { LoginComponent } from './views/partial/retailer-panel/auth/login/login.component';
import { RetailerLayoutComponent } from './views/partial/retailer-panel/retailer-layout/retailer-layout.component';
import { UploadOrdersComponent } from './views/pages/retailer-panel/orders/upload-orders/upload-orders.component';
export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    {
        path: '', component: LayoutComponent, children: [
            { path: 'home', component: ContentSectionComponent }
        ]
    },
    { path: 'login', component: LoginComponent },
    {
        path: 'retailer', component: RetailerLayoutComponent, children: [
            {path:'orders/upload-Orders',component:UploadOrdersComponent}
        ],
    }
];
