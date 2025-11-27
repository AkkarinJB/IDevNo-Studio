import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent:() => import('./pages/home/home').then(m => m.Home),
        title:'Portfolio -Home'
    },
    {
        path:'login',
        loadComponent:() => import('./core/auth/pages/login/login').then(m => m.Login),
        title:'Login'
    },
    {
        path:'register',
        loadComponent:() => import('./core/auth/pages/register/register').then(m => m.Register),
        title:'Register'
    },
    {
        path:'dashboard',
        loadComponent:() => import('./pages/dashboard/dashboard').then(m => m.Dashboard),
        title:'Dashboard'
    },
    {
        path:'**',
        redirectTo:'',
        pathMatch:'full'
    }
];

