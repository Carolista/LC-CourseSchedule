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

    // Format days for display in lists
    getDays() {
        return this.days.join("/");
    }

}
