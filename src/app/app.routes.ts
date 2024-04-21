import { Routes } from '@angular/router';
import { GreetingsComponent } from './greetings/greetings.component';
import { MainContentComponent } from './main-content/main-content.component';

export const routes: Routes = [
    {
        path: '',
        component: GreetingsComponent
    },
    {
        path: 'content',
        component: MainContentComponent
    }
];
