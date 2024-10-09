
export default function Card() {
<>
<CardInfo>
    <CardHeader 
    jobCompany="Northeastern University"
    jobTitle="Software Engineer" />
    <CardExtraInfo 
    jobType="Internship"
    jobPay="$54-$71"
    jobDeadline="10/29/24" />
    <CardStatus
    jobStatus="Applied" />
</CardInfo>
</>
}

function CardInfo() {

    return(
        <div>

        </div>
    )
}

function CardStatus({jobStatus}) {

    return(
        <div id="card-status">
            <h2>Status</h2>
            <h1 className="large-header">{jobStatus}</h1>
        </div>
    )
}

function CardHeader({jobCompany, jobTitle}) {

    return(
        <div id="card-header">
        <h3 className="small-text">{jobCompany}</h3>
        <h1 className="large-header">{jobTitle}</h1>
        </div>
    )
}

function CardExtraInfo(jobType, jobPay, jobDeadline) {

    return(
        <div id="card-extra-info">
            <p className="small-text">{jobType}</p>
            <br className="card-divider" />
            <p className="small-text">Pay Range: {jobPay}</p>
            <br className="card-divider" />
            <p className="small-text">Deadline: {jobDeadline}</p>
        </div>
    )
}

function JobWindow() {

}

function JobInfo() {

}

function JobNotes() {

}

function JobStatus() {

}

function JobStatusBtn() {

}
