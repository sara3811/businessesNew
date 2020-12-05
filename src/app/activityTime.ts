export class ActivityTime{
    dayInWeek:number;
    startTime;
    endTime;
    startDate;
    numOfWorkers ;
    estimatedDurationOfService;

    constructor(dayInWeek,startTime,endTime,numOfWorkers,estimatedDuration) {
        this.dayInWeek=dayInWeek;
        this.startTime=startTime;
        this.endTime=endTime;
        this.numOfWorkers=numOfWorkers;
        this.estimatedDurationOfService=estimatedDuration;
    }
}