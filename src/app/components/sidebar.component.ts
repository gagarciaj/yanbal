import { Component } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: '../views/sidebar.component.html'
})
export class SidebarComponent {
    public companyLogo: string;
    public sidebarOptions: Array<any>;

    constructor() {
        this.companyLogo = 'assets/img/logo.png';
        this.sidebarOptions = [
            { 'icon' : 'graph' , 'label' : 'Dashboard', 'route' : 'dashboard' },
            { 'icon' : 'cart' , 'label' : 'Compras', 'route' : 'compras' },
            { 'icon' : 'graph2' , 'label' : 'Producción', 'route' : 'produccion' },
            { 'icon' : 'news-paper' , 'label' : 'Inventarios', 'route' : 'inventarios' },
            { 'icon' : 'ticket' , 'label' : 'Ventas', 'route' : 'ventas' },
            { 'icon' : 'piggy' , 'label' : 'Finanzas', 'route' : 'finanzas' },
            { 'icon' : 'calculator' , 'label' : 'Contabilidad', 'route' : 'contabilidad' },
            { 'icon' : 'credit' , 'label' : 'Créditos', 'route' : 'creditos' },
            { 'icon' : 'note2' , 'label' : 'Reportes', 'route' : 'reportes' },
            { 'icon' : 'id' , 'label' : 'Nómina', 'route' : 'nomina' },
            { 'icon' : 'map-marker' , 'label' : 'Sucursales', 'route' : 'sucursales' }
        ];
    }
}