import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { History } from '../../interfaces/History';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.css']
})
export class HistoryListComponent {
  @Input() searchHistory: History[] = [];
  @Output() showUserDetails = new EventEmitter();
  
  display: boolean = true

  constructor(
    private toastService: MessageService,
    private localStorageService: LocalStorageService,
  ) { }

  resultClicked(record: History){
    console.log(record)
    if(record.userData)
      this.showUserDetails.emit(record)
  }

  clearHistory(){
    this.localStorageService.clearData()
    this.searchHistory = []
    this.toastService.add({severity:'success', summary:'Success', detail:'History Cleared'});
  }

}
