
export default function JobWindow({jobTitle, jobCompany, jobLocation, jobPay, jobDeadline, jobDateUpdated, jobType}) {

    return (
        <div id="window-container">
        <WindowHeader 
        jobTitle={jobTitle}
        jobCompany={jobCompany}
        jobLocation={jobLocation}
        jobType={jobType} />
        <WindowCategories />
        <WindowInfo
        jobPay={jobPay}
        jobDeadline={jobDeadline}
        jobDateUpdated={jobDateUpdated} />
        <WindowBtns />
        </div>
    )
}

function WindowHeader({jobTitle, jobCompany, jobLocation, jobType}) {

    return (
        <div id="window-header-container">
            <h1 className="large-header">{jobTitle}</h1>
            <span id="window-header-span">
                <h3 className="sub-header">{jobCompany}</h3>
                <h3 className="sub-header">{jobLocation}</h3>
                <h3 className="sub-header">{jobType}</h3>
            </span>
        </div>
    )
}

function WindowCategories() {

    return (
        <div id="window-category-container">
            <button className="category-btn" id="info-btn">Info</button>
            <div id="vertical-divider"></div>
            <button className="category-btn" id="notes-btn">Notes</button>
        </div>
    )
}

function WindowInfo({jobPay, jobDeadline, jobDateUpdated}) {
   
    return (
        <div id="window-info-container">
    <p className="standard-text">Pay Range: {jobPay}</p>
    <span id="status-container">
    <p className="standard-text">Status:</p>
    <input type="range" id="status-input" />
    </span>
    <p className="standard-text">Date Applied: {jobDateUpdated}</p>
    <p className="standard-text">Deadline: {jobDeadline}</p>
    </div>
    )
}

function WindowNotes() {

    return (
        <input id="window-note-input" type="text" placeholder="Add a note..." />
    )
}

function WindowBtns() {

    return(
        <span id="window-btns-container">
            <button id="edit-button">Edit</button>
            <button id="update-button">Update</button>
        </span>
    )
}