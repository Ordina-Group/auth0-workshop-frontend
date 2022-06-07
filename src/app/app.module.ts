import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { UserComponent } from './component/user/user.component';
import { MovieComponent } from './component/movie/movie.component';
import { MovieItemComponent } from './component/movie-item/movie-item.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    MovieComponent,
    MovieItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AuthModule.forRoot({
      domain: environment.domain,
      clientId: environment.clientId,
      redirectUri: environment.redirectUri
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
