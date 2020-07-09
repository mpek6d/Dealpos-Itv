import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookAddComponent} from './book-add/book-add.component';
import { BookListComponent} from './book-list/book-list.component';


const routes: Routes = [
  {path: 'add', component: BookAddComponent},
  {path: 'list', component: BookListComponent},
  {path: '', component: BookListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
