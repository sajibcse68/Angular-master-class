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

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  onSave($event) {
    $event.stopPropagation();
    console.log('Button was clicked!');
    console.log('$event: ', $event);
  }
  onDivClicked() {
    console.log('Div is clicked!');
  }
  onEnterPressed(email) {
    // console.log($event.target.value);
    console.log('email: ', email);
  }
}
