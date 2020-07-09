import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BookService } from '../book.service';
import {Book} from '../book.model';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  inputForm;

  constructor(private formBuilder: FormBuilder,private bookService: BookService) {
    this.inputForm = this.formBuilder.group({
      name: '',
      year: ''
    })
  }

  ngOnInit(): void {
  }

  onSubmit(bookData) {
    const book : Book = {
      name:bookData.name,
      year:bookData.year,
      reviews:null
    };
    this.bookService.add(book);
    this.inputForm.reset();
    alert("Book has been added!");
  }

}
