import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './auth.service';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { FirelistComponent } from './firelist/firelist.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyCKaSA7DTkqDk_gHIuGgvzO3VvlIPlBveA',
      authDomain: 'pedrosalvinoapp.firebaseapp.com',
      projectId: 'pedrosalvinoapp',
      storageBucket: 'pedrosalvinoapp.appspot.com',
      messagingSenderId: '433475040645',
      appId: '1:433475040645:web:01c321c7127b4e91bec0ec',
    }),
    AngularFireAuthModule,
    RouterModule.forRoot([
      { path: '', component: IndexComponent },
      { path: 'firelist', component: FirelistComponent },
    ]),
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [AuthService],
})
export class AppModule {}
