import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddMusicComponent } from './components/add-music/add-music.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppRoutingModule } from './/app-routing.module';
import { EditMusicComponent } from './components/edit-music/edit-music.component';
import { MusicDetailsComponent } from './components/music-details/music-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    SidebarComponent,
    AddMusicComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    NotFoundComponent,
    EditMusicComponent,
    MusicDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
