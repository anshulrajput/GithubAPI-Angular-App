import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MessageService } from 'primeng/api';
import { User } from '../../interfaces/User';
import { History } from '../../interfaces/History';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchValue: string = ''
  userDetailsVisible: boolean = false
  searchedUser: User | null = null
  searched: boolean = false

  constructor(
    private apiService: ApiService,
    private loaderService: NgxUiLoaderService,
    private toastService: MessageService,
    private localStorageService: LocalStorageService,
  ) { }

  ngOnInit(): void {
  }

  showUserDetails(){
    this.userDetailsVisible = true
  }

  searchUser(){
    if(this.searchValue === ''){
      return this.toastService.add({severity:'error', summary:'Input Error', detail:'No Text Entered in Search'});
    }

    this.loaderService.start()
    this.apiService.getUsers(this.searchValue)
      .subscribe({
        next: (searchedUser: User) => {
          console.log(searchedUser)

          this.searched = true
          this.searchedUser = searchedUser
          this.loaderService.stop()
          this.toastService.add({severity:'success', summary:'Success', detail:'User Fetched'});

          // add search keyword to history
          this.updateHistory(this.searchValue,this.searchedUser)
          
        },
        error: (err) => {
          console.log(err)
          if(err.status === 404){
            this.searched = false
            this.toastService.add({severity:'error', summary:'Error', detail:'User Not Found'});

            // add search keyword to history
            this.updateHistory(this.searchValue,null)
          }
          else
            this.toastService.add({severity:'error', summary:'Error', detail:'Something went wrong'});
          
            this.loaderService.stop()
        }
      })
  }

  updateHistory(searchTerm: string,currentResult: User | null){
    // get existing data from localStorage
    let existingData = this.localStorageService.getData('history')
    console.log(existingData)

    let updatedData: History[] = []
    if(existingData){
      updatedData = [...JSON.parse(existingData)]
    }

    updatedData.push({
      'searchTerm': searchTerm,
      'userData': currentResult
    })
    this.localStorageService.saveData('history',JSON.stringify(updatedData))
  }

}
