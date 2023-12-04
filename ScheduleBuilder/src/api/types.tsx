export interface Subject {
    name: string;
    friendlyName: string;
}

export interface Course {
    crn: string;
    id: string;
    name: string;
    section: string;
    dateRange: string;
    type: string;
    instructor: string;
    subject: string;
    campus: string;
}

export interface Time {
    crn: string;
    days: string;
    startTime: string;
    endTime: string;
    location: string
    id: number;
}