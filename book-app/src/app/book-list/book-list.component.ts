import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import {Book, Review} from '../book.model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];
  selectedBook : Book;
  inputForm;

  constructor(private formBuilder: FormBuilder,private bookService: BookService) {
    this.inputForm = this.formBuilder.group({
      email: '',
      note: '',
      star: ''
    })
  }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){
    this.bookService.get().subscribe(books=> this.books = books);
    console.log(this.books);
  }

  onSelect(book:Book){
    this.selectedBook = book;
  }

  onSubmit(reviewData) {
    const review : Review = {
      email:reviewData.email,
      note:reviewData.note,
      star:reviewData.star
    };
    this.bookService.addReview(this.selectedBook,review);
    this.inputForm.reset();
    alert("Review has been added!");
  }
}
