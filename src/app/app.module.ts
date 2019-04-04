import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { MyApp } from './app.component';
    
    

import { BacklogPage } from '../pages/backlog/backlog';
import { BurnChartPage } from '../pages/burn-chart/burn-chart';
import { ActivitiesPage } from '../pages/activities/activities';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BacklogPage,
    BurnChartPage,
    ActivitiesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
