export class TaskList {
  public description: string;
  public time: number;

  constructor(desc:string, time:number) {
    this.description = desc;
    this.time = time;
  }
}
