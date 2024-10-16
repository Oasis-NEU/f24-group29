import JobListingRow from "../../components/JobListingRow";
import jobListingModels from "../../job-listings/JobListingModels";

function AllJobs() {
  return (
    <>
      <table className="outlined-table">
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Company</th>
            <th>Location</th>
            <th>Job Type</th>
            <th>Date Posted</th>
            <th>Hours Per Week</th>
            <th>Deadline</th>
          </tr>
        </thead>
        <tbody>
          {jobListingModels.map((jobListingModel) => {
            return <JobListingRow jobListingModel={jobListingModel} />;
          })}
        </tbody>
      </table>
    </>
  );
}
export default AllJobs;
