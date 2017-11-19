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

  course = {
    title: 'The Complete Angular Course',
    rating: 4.9745,
    students: 12345,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  };

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

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
}
