import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  @ViewChild('nameInput',{static: true}) nameInputRef: ElementRef; 
  @ViewChild('amountInput',{static: true}) amountInputRef: ElementRef;
  ingredients:Ingredient[]=[];
  editName: string;
  editAmt: number;
  isUpdate: boolean = false;
  index: number;

  constructor() { }

  ngOnInit(): void {
  }
  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredients.push(newIngredient);
    this.nameInputRef.nativeElement.value = '';
    this.amountInputRef.nativeElement.value = '';
  }
  onDelete(i:any){
    this.ingredients.splice(i,1);
  }
  onModify(i:any){
    this.editName =this.ingredients[i].name;
    this.editAmt = this.ingredients[i].amount;
    this.nameInputRef.nativeElement.value = this.editName;
    this.amountInputRef.nativeElement.value = this.editAmt;
    this.isUpdate = true;
    this.index = i;
  }
  onUpdateItem(){
    this.isUpdate = false;
    const updateIngredientName = this.nameInputRef.nativeElement.value;
    const updateIngredientAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(updateIngredientName, updateIngredientAmount);
    this.ingredients[this.index] = newIngredient;
    this.nameInputRef.nativeElement.value = '';
    this.amountInputRef.nativeElement.value = '';   
  }
}
