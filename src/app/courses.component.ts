import { CoursesService } from './services/courses.service';
import { CourseComponent } from './course/course.component';
import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'courses',
  template: `
  <h2>Courses Component </h2>
  <div>
    <div>
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
    </div>
    
    <div>
      <span>{{price | currency:'JOD':true:'3.1-1' }}  </span>    
      <br>
      <span>{{rDate | date:'shortDate' }}  </span>    
    
    
    </div>

  </div>
  `,
})
export class CoursesComponent {
  constructor(private service: CoursesService) {
  }
  courses = this.service.getCourses();

  email = 'a@a.com';
  price = 1234567.645;
  rDate = new Date(2017, 5, 20);

  onKeyUp() {
    console.log(this.email);
  }


}
