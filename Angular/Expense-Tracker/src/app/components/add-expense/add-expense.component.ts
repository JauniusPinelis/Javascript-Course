import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/models/expense';
import { CategoryService } from 'src/app/services/category.service';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {

  public category: string = "";
  public amount: string = "";
  public success: boolean = false;
  public validationMessage = "";
  public categories: string[] = [];

  constructor(
    private expenseService: ExpenseService,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.categoryService.GetAll().subscribe({
      next: (data) => {
        this.categories = data.map(d => d.name);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  public addExpense(): void {
    this.validationMessage = this.validate();
    if (this.validationMessage == ""){
      let newExpense: Expense = {
        amount: +this.amount,
        category: this.category
      }

      this.expenseService.add(newExpense).subscribe({
        next: () => {
          this.success = true;
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
    else {
      this.success = false;
    }
  }

  public clearForm():void {
    this.amount = "";
    this.category = "";
  }

  /*
  Returns empty string if validation passes
  Return Error description string if validatio fails
   */
  private validate(): string {
    let numberValue = +this.amount;
    if (numberValue <= 0){
      return "The amount you entered is not valid";
    }
    
    if (this.category == ""){
      return "Category does not have a value";
    }
    return "";
  }

}
