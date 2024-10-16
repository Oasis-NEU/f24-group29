class JobListingModel {
  public readonly jobTitle: string;
  public readonly company: string;
  public readonly location: string;
  public readonly jobType: string;
  public readonly datePosted: Date;
  public readonly hoursPerWeek: number;
  public readonly deadline: Date;

  constructor(
    jobTitle: string,
    company: string,
    location: string,
    jobType: string,
    datePosted: Date,
    hoursPerWeek: number,
    deadline: Date
  ) {
    this.jobTitle = jobTitle;
    this.company = company;
    this.location = location;
    this.jobType = jobType;
    this.datePosted = datePosted;
    this.hoursPerWeek = hoursPerWeek;
    this.deadline = deadline;
  }
}

export default JobListingModel;