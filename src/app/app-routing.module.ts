import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';


// Configuración básica del router
const routes: Routes = [
// {
//   path: '',
//   component: HomePageComponent
// },
{
  path: 'about',
  component: AboutPageComponent
},
{
  path: 'contact',
  component: ContactPageComponent
},
{
  // path: 'countries' es el texto que quieres que aparezca en la barra de búsqueda
  // o que se le agregue a la ruta para redirigirte al módulo con el que se encuentra enlazado
  path: 'countries',
  // loadChildren es una función del módulo Routes que se usa cuando se necesita cargar el módulo
  // hijo
  // import: carga el módulo que está enlazado a la ruta que hay dentro de los paréntesis
  // Despues de cargar el módulo, la función then() obtiene la instancia del módulo exportado
  // En resumen, estamos cargando el módulo de forma diferida, cargando solo el pedazo de
  // código que se necesita.
  loadChildren: () => import('./countries/countries.module').then( m => m.CountriesModule )
},
{
  // Si no es ninguna de las rutas que hay en routes
  // al hacer recargar la página se va a redirigir al home
  path: '**',
  redirectTo: 'countries'
},
];

@NgModule({
  imports: [
    // Si es el router principal, (o sea, si el archivo se encuentra
    // en la carpeta del proyecto, en este caso si porque está dentro de
    // la carpeta app) entonces vamos a usar RouterModule.forRoot(),
    // Para los demás es con forChild
    RouterModule.forRoot( routes ),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
