import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  name: string = '';
  email: string = '';

  cadastreForm!: FormGroup;

 
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("oiiii");

  }

}
