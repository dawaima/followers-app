import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  title = 'Test';

  getTitle() {
    return this.title + ' 2 ';
  }
  constructor() { }

  ngOnInit() {
  }

}
