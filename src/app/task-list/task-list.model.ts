export class TaskList {
  public description: string;
  public start_time: number;
  public start_day: string;
  public end_time: number;
  public end_day: string;
  public time: number;

  constructor(desc:string, start_time:number, start_day: string, end_time: number, end_day:string, time:number) {
    this.description = desc;
    this.start_time = start_time;
    this.start_day = start_day;
    this.end_time = end_time;
    this.end_day = end_day;
    this.time = time;
  }
}

export class staticTaskList {
  public description: string;
  public start_time: number;
  public start_day: string;
  public end_time: number;
  public end_day: string;

  constructor(desc:string, start_time:number, start_day: string, end_time: number, end_day:string) {
    this.description = desc;
    this.start_time = start_time;
    this.start_day = start_day;
    this.end_time = end_time;
    this.end_day = end_day;
  }
}
