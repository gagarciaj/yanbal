import { Component } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: '../views/navbar.component.html'
})
export class NavbarComponent {
    public notifications: Array<any>;
    public accountOptions: Array<any>;

    constructor() {
        this.notifications = [
            { 'label' : 'Notification 1', 'route' : '' },
            { 'label' : 'Notification 2', 'route' : '' },
            { 'label' : 'Notification 3', 'route' : '' },
            { 'label' : 'Notification 4', 'route' : '' }
        ];
        
        this.accountOptions = [
            { 'label' : 'Actualizar perfíl', 'route' : '' },
            { 'label' : 'Ayuda', 'route' : '' },
            { 'label' : 'Cerrar sesión', 'route' : '' }
        ];
    }
}