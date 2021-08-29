import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExpenseComponent } from '../components/add-expense/add-expense.component';
import { ExpenseStatisticsComponent } from '../components/expense-statistics/expense-statistics.component';
import { ExpensesComponent } from '../components/expenses/expenses.component';

const routes: Routes = [
  {path: "expenses", component: ExpensesComponent },
  {path: "add-expense", component: AddExpenseComponent},
  {path: "statistics", component: ExpenseStatisticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
