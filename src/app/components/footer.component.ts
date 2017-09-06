import  { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: '../views/footer.component.html'
})
export class FooterComponent {
    public footerOptions: Array<any>;
    public currentYear: number;

    constructor() {
        this.footerOptions = [
            { 'label' : 'Configuración', 'url' : '#' },
            { 'label' : 'Ayuda', 'url' : '#' },
            { 'label' : 'Soporte', 'url' : '#' }
        ];
        this.currentYear = new Date().getFullYear();
    }
}