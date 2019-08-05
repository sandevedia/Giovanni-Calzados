import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SearchComponent } from './pages/search/search.component';


    // '**' cualquier path
    // pathMatch: 'full' que tome todo el path
    // cualquier otro path redirecciona al 'home'
const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'item', component: ItemComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'seach/:termino', component: SearchComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

// decorador ngModule
@NgModule({
    // para que importe las rutas declaradas en la constante 'appRoutes'
    imports: [
        RouterModule.forRoot(appRoutes, {useHash: true})
        // useHash:true para que agregue el #
        // en las rutas url, y el navegador entienda que es un archivo y no un directorio
        // ejemplo: localhost:4200/#/item/2
    ],
    // si no las exportamos no se pueden usar
    exports: [
        RouterModule
    ]
})

// en angular todo es una clase
export class AppRoutingModule {}
