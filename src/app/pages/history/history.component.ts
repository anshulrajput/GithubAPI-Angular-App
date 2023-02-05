import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MessageService } from 'primeng/api';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  searchHistory: any = []
  userDetailsVisible: boolean = false

  constructor(
    private apiService: ApiService,
    private loaderService: NgxUiLoaderService,
    private toastService: MessageService,
    private localStorageService: LocalStorageService,
  ) { }

  ngOnInit(): void {
    let historyData: string | null = this.localStorageService.getData('history')
    if(!historyData)
      this.searchHistory  = []
    else
      this.searchHistory  = JSON.parse(historyData)
  }

  showUserDetails(data: any){
    this.userDetailsVisible = true
  }

}
