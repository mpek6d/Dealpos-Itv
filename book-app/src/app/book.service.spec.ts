import { TestBed } from '@angular/core/testing';

import { BookGetService } from './book.service';

describe('BookGetService', () => {
  let service: BookGetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookGetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
