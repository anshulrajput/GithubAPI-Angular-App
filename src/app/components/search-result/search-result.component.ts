import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../interfaces/User';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {
  @Input() searchedUser: User | null = null;
  @Output() showUserDetails = new EventEmitter();
  
  display: boolean = true

  userClicked(){
    console.log('showUserDetails')
    this.showUserDetails.emit()
  }

}
