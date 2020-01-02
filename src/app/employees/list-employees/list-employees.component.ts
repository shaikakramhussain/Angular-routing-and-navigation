import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[]= [
    {id:1,
      name:'Akram',
      gender:'Male',
      contactPreference:'Email',
      email:'akram.shaik@ojas-it.com',
      dateOfBirth: new Date('03/06/1999'),
      department:'UI',
      isActive:true,
      photoPath:'assets/images/a.png'
    },
    {id:2,
      name:'Venu',
      gender:'Male',
      contactPreference:'Phone',
      phoneNumber:9550705555,
      dateOfBirth: new Date('03/06/1999'),
      department:'UI',
      isActive:false,
      photoPath:'assets/images/venu.jpg'
    },
    {
      id:3,
      name:'Neelima',
      gender:'Female',
      contactPreference:'Phone',
      phoneNumber:9550707777,
      dateOfBirth: new Date('04/06/1999'),
      department:'HR',
      isActive:true,
      photoPath:'assets/images/c.png'
    },
    {id:4,
      name:'Suraj',
      gender:'Male',
      contactPreference:'Phone',
      phoneNumber:9550708888,
      dateOfBirth: new Date('05/06/1999'),
      department:'UI',
      isActive:false,
      photoPath:'assets/images/d.png'
    },
    {
      id:5,
      name:'Bhanu',
      gender:'Female',
      contactPreference:'Phone',
      phoneNumber:9550709999,
      dateOfBirth: new Date('09/06/1999'),
      department:'HR',
      isActive:true,
      photoPath:'assets/images/b.png'
    },
    {id:6,
      name:'Saritha',
      gender:'Female',
      contactPreference:'Phone',
      phoneNumber:9550705555,
      dateOfBirth: new Date('03/06/1999'),
      department:'UI',
      isActive:false,
      photoPath:'assets/images/f.png'
    },
    
  ];
  constructor() { }
  ngOnInit() {
  }

}
