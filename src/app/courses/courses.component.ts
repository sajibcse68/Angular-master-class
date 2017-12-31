import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  title = 'List of Courses';
  imgUrl = 'http://images.all-free-download.com/images/graphiclarge/butterfly_flower_01_hd_pictures_166973.jpg';
  colSpan = 2;
  courses;
  isActive = true;
  email = 'sajib@example.com';
  text = 'Lorem Ipsum is simply dummy industry. Lorem Ipsen an unknown printer took a galley of type and scrambled it to';
  course = {
    title: 'The Complete Angular Course',
    rating: 4.9745,
    students: 12345,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  };

  books;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  viewMode = 'map';

  // event handling, stop event bubbling
  onSave($event) {
    $event.stopPropagation();
    console.log('Button was clicked!');
    console.log('$event: ', $event);
  }
  onDivClicked() {
    console.log('Div is clicked!');
  }

  // use template variable
  onEnterPressed(emaill) {
    // console.log($event.target.value);
    console.log('email: ', emaill);
  }

  // two way binding
  onClickedTwoWayBinding() {
    console.log('Email: ', this.email);
  }

  // load default books
 onLoadBooks() {
    this.books = [
      { id: 1, name: 'book1' },
      { id: 2, name: 'book2' },
      { id: 3, name: 'book3' },
    ];
  }

  // add a book
  onBookAdd() {
    this.books.push({ id: 4, name: 'book4' });
  }

  onRemoveBook(book) {
    const index = this.books.indexOf(book);
    this.books.splice(index, 1);
  }

  onChangeBook(book) {
    book.name = 'sajib';
  }

  trackBooks(index, book) {
    console.log('index: ', index);
    console.log('book: ', book);
    return book ? book.id : undefined;
  }
}
