import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AssessoriesComponent } from './assessories/assessories.component';
import { ContactComponent } from './contact/contact.component';
import { PricePackageComponent } from './price-package/price-package.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'album-detail', component: AlbumDetailComponent },
  { path: 'album-list', component: AlbumListComponent },
  { path: 'assessories', component: AssessoriesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'price-package', component: PricePackageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
