import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { collapsible } from '@app/shared';
import { DashboardService } from '../../dashboard.service';
import { MatSidenav } from '@angular/material';
import { Page, Section } from './interfaces';
import { Router, NavigationEnd } from '@angular/router';
import { UtilService } from '@app/core';

@Component({
	selector: 'tr-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss'],
	animations: [collapsible]
})
export class SidenavComponent implements OnInit {

	constructor(
		private dashboardService: DashboardService,
		private utilService: UtilService,
		private router: Router
	) { }

	user = this.utilService.getLS('user', true);

	sections: Section[] = [
		{
			title: 'inicio',
			children: [
				{ url: '/inicio', title: 'inicio', icon: 'home' },
				{ url: '/indicadores', title: 'indicadores', icon: 'dashboard' },
				{
					title: 'Preguntas', icon: 'question_answer', pages: [
						{ url: '/pagina', title: 'Pendientes' },
						{ url: '/pagina', title: 'Historial' },
						{ url: '/pagina', title: 'Reportes' },
						{ url: '/pagina', title: 'Configuración' },
					]
				},
				{
					title: 'Ventas', icon: 'arrow_forward', pages: [

						{ url: '/pagina', title: 'Nueva Orden' },
						{ url: '/pagina', title: 'Órdenes de Venta' },
						{ url: '/pagina', title: 'Cobros' },
						{ url: '/pagina', title: 'Envíos' },
						{ url: '/pagina', title: 'Configuración' },

					]
				},
				{
					title: 'Publicaciones', icon: 'list', pages: [
						{ url: '/pagina', title: 'Mercadolibre' },
						{ url: '/pagina', title: 'Linio' },
						{ url: '/pagina', title: 'Tienda Nube' },
						{ url: '/pagina', title: 'WooCommerce' },
						{ url: '/pagina', title: 'Prestashop' },
						{ url: '/pagina', title: 'Shopify' },
						{ url: '/pagina', title: 'Publicador' },
						{ url: '/pagina', title: 'Campañas de Ofertas' },
						{ url: '/pagina', title: 'Reglas Precio / Stock' },
					]
				},
				{
					title: 'Inventario', icon: 'local_grocery_store', pages: [

						{ url: '/pagina', title: 'Nuevo Articulo' },
						{ url: '/pagina', title: 'Artículos' },
						{ url: '/pagina', title: 'Ver precios de venta' },
						{ url: '/pagina', title: 'Editar precios de Venta' },
						{ url: '/pagina', title: 'Números de Serie' },
						{ url: '/pagina', title: 'Importar Artículos' },
						{ url: '/pagina', title: 'Historial de Importación' },
						{ url: '/pagina', title: 'Configuración' },

					]
				},
				{
					title: 'Finanzas', icon: 'attach_money', pages: [

						{ url: '/pagina', title: 'Cuentas' },
						{ url: '/pagina', title: 'Gastos' },
						{ url: '/pagina', title: 'Configuración' },

					]
				},
				{
					title: 'Compras', icon: 'add_shopping_cart', pages: [

						{ url: '/pagina', title: 'Nueva Orden' },
						{ url: '/pagina', title: 'Órdenes de Compra' },
						{ url: '/pagina', title: 'Configuración' },

					]
				},
				{
					title: 'Contactos', icon: 'person', pages: [

						{ url: '/pagina', title: 'Nuevo' },
						{ url: '/pagina', title: 'Contactos' },
						{ url: '/pagina', title: 'Configuración' },

					]
				},
				{
					title: 'Reportes', icon: 'file_copy', pages: [

						{ url: '/pagina', title: 'Publicaciones' },
						{ url: '/pagina', title: 'Productos' },
						{ url: '/pagina', title: 'Control de precios' },

					]
				},
				{ title: 'Integraciones', icon: 'loop', pages: [] },

				{
					title: 'dropdown',
					icon: 'clear_all',
					pages: [
						{ url: '/pagina', title: 'pagina' }
					]
				},
				{
					title: 'Configuraciones', icon: 'settings', pages: [

						{ url: '/pagina', title: 'Mis Datos' },
						{ url: '/pagina', title: 'Datos Empresa' },
						{ url: '/pagina', title: 'Usuarios' },
						{ url: '/pagina', title: 'Cargos' },
						{ url: '/pagina', title: 'Mensajes Automáticos' },
						{ url: '/pagina', title: 'Configuración de Mensajes' },

					]
				},
				{ url: '/pagina', title: 'tutoriales', icon: 'help_outline' }
			]
		}
	];

	@ViewChild(MatSidenav) snav: MatSidenav;

	ngOnInit() {
		if (document.documentElement.clientWidth <= 768) {
			setTimeout(() => {
				this.snav.close();
			});
		}
		this.dashboardService.onSidenavToggle.subscribe(() => {
			this.snav.toggle();
		});
		this.sections.forEach((section: Section) => {
			section.children.forEach((child: any) => {
				if (child.pages) {
					child.pages.forEach((page: Page) => {
						if (window.location.pathname.includes(page.url)) {
							child.expanded = true;
						}
					});
				}
			});
		});
		this.dashboardService.isSnavOpened = this.snav.opened;
		this.router.events.subscribe((event) => {
			if (event instanceof NavigationEnd) {
				if (window.innerWidth <= 768 && this.snav.opened) {
					this.snav.close();
				}
			}
		})
	}

	isActive(page: Page) {
		return this.router.url === page.url;
	}

	@HostListener('window:resize', ['$event'])
	onResize(event) {
		if (event.target.innerWidth <= 768 && this.snav.opened) {
			this.snav.close();
		}
	}

}
