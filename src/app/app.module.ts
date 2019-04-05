import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
// pages
import { ActivitiesPage } from '../pages/activities/activities';
import { BacklogPage } from '../pages/backlog/backlog';
import { BurnChartPage } from '../pages/burn-chart/burn-chart';
import { HomePage } from '../pages/home/home';
// components
import { AccordionComponent } from '../components/accordion/accordion';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BacklogPage,
    BurnChartPage,
    ActivitiesPage,
    AccordionComponent
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BacklogPage,
    BurnChartPage,
    ActivitiesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
