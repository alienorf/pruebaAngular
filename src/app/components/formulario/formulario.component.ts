import { Component, OnInit, ViewChild } from '@angular/core';
import { Persona } from 'src/app/components/formulario/persona';
import { FormControl, FormBuilder, FormGroup, Validators, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import { SelectionModel } from '@angular/cdk/collections';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {
  	person: FormGroup = new FormGroup({});
	personas : Persona[] = [];
	indexEdited:number=-1;

	constructor(){
		this.person = new FormGroup({
			nombre : new FormControl("", [Validators.required, Validators.minLength(3)]),
			apellidos : new FormControl("", [Validators.required,  Validators.minLength(3)]),
			edad : new FormControl("", [Validators.required, Validators.min(0), Validators.max(125)]),
			dni : new FormControl("", [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
			cumpleanos : new FormControl("", Validators.required),
			colorFavorito : new FormControl("", [Validators.required, Validators.minLength(3)]),
			sexo : new FormControl("", Validators.required)
		});
	}

	ngOnInit() : void{
		}

	onsubmit() {
		let persona = new Persona();

		persona.nombre = this.person.value.nombre;
		persona.apellidos = this.person.value.apellidos;
		persona.edad = this.person.value.edad;
		persona.dni = this.person.value.dni;
		persona.cumpleanos = this.person.value.cumpleanos;
		persona.colorFavorito = this.person.value.colorFavorito;
		persona.sexo = this.person.value.sexo;

		if (this.indexEdited==-1)
		this.personas.push(persona);
	 else
		this.personas[this.indexEdited]=persona;
 
	 this.indexEdited=-1;  
	 this.person.reset();
	}


	borraritem(i: any) : void {
        this.personas.splice(i, 1)
    }
	
	edititem(i:number,persona:Persona) : void {
			 this.person.patchValue(persona)
			 this.indexEdited=i; 
		}
	}