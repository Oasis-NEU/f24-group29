import JobListingModel from "../job-listings/JobListingModel";

interface Props {
  jobListingModel: JobListingModel;
}

function JobListingRow({jobListingModel: jobListing}: Props) {
  return (
    <tr>
      <td>{jobListing.jobTitle}</td>
      <td>{jobListing.company}</td>
      <td>{jobListing.location}</td>
      <td>{jobListing.jobType}</td>
      <td>{jobListing.datePosted.toDateString()}</td>
      <td>{jobListing.hoursPerWeek}</td>
      <td>{jobListing.deadline.toDateString()}</td>
    </tr>
  );
}

export default JobListingRow;
