import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent implements OnInit {

  isSubmitted: boolean = false;

  resultData! : User;

  setValue: User = {
    full_name: "",
    age: 0,
    course_id: 0,
    perent_phone: ""

  }

  constructor(private crudService: CrudService) {

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  createUser(data: User) {
     this.crudService.create(data).subscribe({
      next: (result) => {
        this.resultData = result;
        console.log(result);
        this.isSubmitted = true;
      },
      error: (err) => {
        console.log(`Error ketti: ${err}`);
      }
    });
  }

  setUser() {
    this.createUser(this.setValue);
    
  }




}