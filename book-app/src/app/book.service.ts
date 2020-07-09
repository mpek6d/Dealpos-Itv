import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Book, Review } from "./book.model";
import * as data from "../assets/book.json";
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { isNgTemplate } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books : Book[] = [];

  constructor(private http: HttpClient) {
    this.getBooksfromJSON();
  }

  add(book: Book){
    return of (this.books.push(book));
  }

  addReview(book: Book, review: Review){
    this.books.forEach(function(item){
      if (item.name == book.name){
        item.reviews.push(review);
      }
    });
  }

  get(){
    return of (this.books);
  }

  getBooksfromJSON() {
    this.books = (data as any).default;
  }
}
