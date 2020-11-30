import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

    allCourses: Course[];
    availableCourses: Course[];
    myCourses: Course[] = [];

    noCourses: boolean = true;
    fullCourseLoad: boolean = false;

    constructor() {}

    ngOnInit(): void {

        this.allCourses = [
            new Course("Intro to Underwater Coding", "LC105", ["Mon", "Wed"], "2:00 PM", "3:30 PM", 3),
            new Course("Intermediate Underwater Coding", "LC205", ["Mon", "Wed"], "1:00 PM", "2:30 PM", 3),
            new Course("Mastering Underwater Coding", "LC305", ["Fri"], "1:00 PM", "4:00 PM", 3),
            new Course("Philosophy & Star Trek", "LC140", ["Tue", "Thu"], "9:00 AM", "10:30 AM", 3),
            new Course("Googling Like a Boss", "LC115", ["Tue", "Thu"], "11:00 AM", "12:00 PM", 2),
            new Course("Narcissism & Stack Overflow: A Case Study", "LC411", ["Mon", "Wed"], "2:30 PM", "4:00 PM", 3),
            new Course("Coding Logic with Spock", "LC240", ["Tue", "Thu"], "8:30 AM", "10:00 AM", 3),
            new Course("Senior Design Project", "LC450", ["Wed", "Fri"], "12:00 PM", "2:00 PM", 4),
            new Course("Irregular Expressions", "LC317", ["Tue", "Thu"], "2:00 PM", "3:30 PM", 3),
            new Course("Demystifying Asynchronicity", "LC230", ["Wed", "Fri"], "2:00 PM", "3:00 PM", 2),
        ];
        
        this.sort(this.allCourses);
        this.availableCourses = this.allCourses.slice(0);
    }
    
    addCourse(index: number): void {
        if (!this.fullCourseLoad) {
            this.noCourses = false;
            this.myCourses.push(this.availableCourses[index]);
            this.sort(this.myCourses);
            this.availableCourses.splice(index,1);
            this.checkLoad();
        }
    }

    removeCourse(index: number): void {
        this.availableCourses.push(this.myCourses[index]);
        this.sort(this.availableCourses);
        this.myCourses.splice(index,1);
        this.checkLoad();
        if (this.myCourses.length === 0) {
            this.noCourses = true;
        }
    }

    checkLoad(): void {
        if (this.sumCredits() >= 15 || this.myCourses.length >= 6) {
            this.fullCourseLoad = true;
        } else {
            this.fullCourseLoad = false;
        }
    }

    sumCredits(): number {
        let sum = 0; 
        for (let i=0; i < this.myCourses.length; i++) {
            sum += this.myCourses[i].credits;
        }
        return sum;
    }

    sort(array: Course[]): void {
        let key = "code";
        array.sort(function(a: Course, b: Course): number {
            if(a[key] < b[key]) {
                return -1;
            } else if (a[key] > b[key]) {
                return 1;
            }
            return 0;
        });
    }

}
