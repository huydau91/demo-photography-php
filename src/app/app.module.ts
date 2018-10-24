import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { library, icon } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faFacebookF, faFlickr} from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { PricePackageComponent } from './price-package/price-package.component';
import { AssessoriesComponent } from './assessories/assessories.component';
import { ContactComponent } from './contact/contact.component';
library.add(fas, far, faInstagram, faFacebookF, faFlickr);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AlbumDetailComponent,
    AlbumListComponent,
    PricePackageComponent,
    AssessoriesComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
