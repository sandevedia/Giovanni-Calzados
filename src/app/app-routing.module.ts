import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';


    // '**' cualquier path
    // pathMatch: 'full' que tome todo el path
    // cualquier otro path redirecciona al 'home'
const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'item', component: ItemComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

// decorador ngModule
@NgModule({
    // para que importe las rutas declaradas en la constante 'appRoutes'
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    // si no las exportamos no se pueden usar
    exports: [
        RouterModule
    ]
})

// en angular todo es una clase
export class AppRoutingModule {}
