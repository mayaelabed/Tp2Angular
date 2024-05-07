
 // src/app/carte-visite/carte-visite.component.ts
 import { Component, OnInit } from '@angular/core';
 import { CarteVisite } from './carte-visite.model';
 @Component({
 selector: 'app-carte-visite',
 templateUrl: './carte-visite.component.html',
 styleUrls: ['./carte-visite.component.css']
 })
 export class CarteVisiteComponent implements OnInit {
carteVisite: CarteVisite = new CarteVisite();
 constructor() { }
 ngOnInit(): void {
 }
 onSubmit(): void {
 // Ici, vous pouvez implémenter la logique pour enregistrer les données
 // ou simplement afficher les données dans la console pour l'instant
 console.log(this.carteVisite);
 }
 }
