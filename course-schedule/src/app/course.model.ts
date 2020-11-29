export class Course {

    // Declare properties
    title: string;
    code: string;
    days: string[];
    startTime: string; // we are not messing with the Date object for now
    endTime: string;
    credits: number;

    // Set up constructor
    constructor(title: string, code: string, days: string[], startTime: string, endTime: string, credits: number) {
        this.title = title;
        this.code = code;
        this.days = days;
        this.startTime = startTime;
        this.endTime = endTime;
        this.credits = credits;
    }

    // Calculate block of time based on credits and number of days per week
    getHours() {
        return this.credits / this.days.length;
    }

}
