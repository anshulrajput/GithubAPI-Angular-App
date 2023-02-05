import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgxUiLoaderModule } from 'ngx-ui-loader';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {DialogModule} from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';
import {TableModule} from 'primeng/table';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { SearchComponent } from './pages/search/search.component';
import { HistoryComponent } from './pages/history/history.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { HistoryListComponent } from './components/history-list/history-list.component';
import { UserDetailsDialogComponent } from './components/user-details-dialog/user-details-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SearchComponent,
    HistoryComponent,
    SearchResultComponent,
    HistoryListComponent,
    UserDetailsDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxUiLoaderModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    DialogModule,
    ToastModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
