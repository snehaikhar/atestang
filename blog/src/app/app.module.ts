import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Additionals : 
import {HttpClientModule} from '@angular/common/http';

import { ProfileComponent } from './componants/profile/profile.component';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { RepoComponent } from './componants/repo/repo.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    RepoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // NgxSkeletonLoaderModule
    NgxSkeletonLoaderModule.forRoot({ animation: 'pulse', loadingText: 'This item is actually loading...' }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

 

}
