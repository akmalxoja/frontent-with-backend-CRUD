import { User } from './../../models/user';
import { CrudService } from './../../services/crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrl: './get-all.component.scss'
})
export class GetAllComponent implements OnInit{
      users! : User[];
      constructor(private CrudService: CrudService){}
      
      ngOnInit(): void {
        this.getAllUsers();
      }
      
      getAllUsers(){
        this.CrudService.getAll().subscribe({
          next: (data) => {
            this.users = data;

            console.log(data);
          }
        })
      }

}
