import { Component, OnInit } from '@angular/core';
import { ListService } from 'app/service/list.service';
// defining component with all detail like selector ,templateUrl and styleUrls
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  arrayList: any[] = [];
  constructor(private _listService: ListService) { }

  ngOnInit() {
    this.arrayList = this._listService.getList();
  }

}
