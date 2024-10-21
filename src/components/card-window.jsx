import { useState, useEffect } from 'react'
import { supabase } from '../supabase-client'


export default function CardWindow({ jobTitle, jobCompany, jobPay, jobDeadline, jobType, jobStatus, jobLocation, jobDateUpdated }) {

    const [isCardClicked, setIsCardClicked] = useState(false);

        async function fetchJob(appId) {
            await supabase
            .from('JobApplications')
            .select('*')
            .eq(id, appId)
            .single()
        };

        async function updateJob(id, updatedFields) {
            await supabase
            .from('JobApplications')
            .update(updatedFields)
        }

    return (
        <div id="card-window-parent-container">
            <Card
                jobTitle={"Software Engineer"}
                jobCompany={"Northeastern University"}
                jobDeadline={"10/25/24"}
                jobPay={"$45-$61/hr"}
                jobType={"Internship"}
                jobStatus={"Applied"}
                setIsCardClicked={setIsCardClicked} />
            <div className="vertical-spacer" />
            {isCardClicked && <JobWindow
                jobTitle={"Software Engineer"}
                jobCompany={"Northeastern University"}
                jobLocation={"Cambridge, MA"}
                jobDeadline={"10/25/24"}
                jobPay={"$45-$61/hr"}
                jobType={"Internship"}
                jobStatus={"Applied"}
                jobDateUpdated={"10/12/24"}
                setIsCardClicked={setIsCardClicked}
                 />}
        </div>
    )
}

// CARD COMPONENTS STARTING HERE

function Card({ jobTitle, jobCompany, jobPay, jobDeadline, jobType, jobStatus, setIsCardClicked }) {

    return (
        <div id="card-container"
        onClick={() => setIsCardClicked(true)}>
            <CardInfo>
                <CardHeader
                    jobCompany={jobCompany}
                    jobTitle={jobTitle} />
                <CardExtraInfo
                    jobType={jobType}
                    jobPay={jobPay}
                    jobDeadline={jobDeadline} />
            </CardInfo>
            <CardStatus
                jobStatus={jobStatus} />
        </div>
    )
}

function CardInfo({ children }) {

    return (
        <div id="card-info-container">
            {children}
        </div>
    )
}

function CardStatus({ jobStatus }) {

    return (
        <div id="card-status">
            <h2>Status</h2>
            <h1 id="status-header">{jobStatus}</h1>
        </div>
    )
}

function CardHeader({ jobCompany, jobTitle }) {

    return (
        <div id="card-header">
            <h3 className="small-text">{jobCompany}</h3>
            <h1 className="large-header">{jobTitle}</h1>
        </div>
    )
}

function CardExtraInfo({ jobType, jobPay, jobDeadline }) {

    return (
        <span id="extra-info-span">
            <p className="small-text">{jobType}</p>
            <hr className="small-divider" />
            <p className="small-text">Pay Range: {jobPay}</p>
            <hr className="small-divider" />
            <p className="small-text">Deadline: {jobDeadline}</p>
        </span>
    )
}

// WINDOW COMPONENTS STARTING HERE


function JobWindow({ jobTitle, jobCompany, jobLocation, jobPay, jobDeadline, jobDateUpdated, jobType, setIsCardClicked }) {

    const [isNotesClicked, setIsNotesClicked] = useState(false);

    return (
        <div id="window-container">
            <WindowHeader
                jobTitle={jobTitle}
                jobCompany={jobCompany}
                jobLocation={jobLocation}
                jobType={jobType}
                setIsCardClicked={setIsCardClicked} />
            <WindowCategories 
            setIsNotesClicked={setIsNotesClicked} />
            {isNotesClicked ? <WindowNotes /> :
            <WindowInfo 
            jobPay={jobPay}
            jobDeadline={jobDeadline}
            jobDateUpdated={jobDateUpdated} />}
            <WindowBtns />
        </div>
    )
}

function WindowHeader({ jobTitle, jobCompany, jobLocation, jobType, setIsCardClicked }) {

    return (
        <div id="window-header-container">
            <div id="close-window-container">
                <button 
                    id="close-window-btn" 
                    onClick={() => setIsCardClicked(false)}>X</button>
                    </div>
            <h1 className="large-header">{jobTitle}</h1>
            <span id="window-header-span">
                <h3 className="sub-header">{jobCompany}</h3>
                <h3 className="sub-header">{jobLocation}</h3>
                <h3 className="sub-header">{jobType}</h3>
            </span>
        </div>
    )
}

function WindowCategories({ setIsNotesClicked }) {

    return (
        <div id="window-category-container">
            <button
                className="category-btn"
                id="info-btn"
                onClick={() => setIsNotesClicked(false)}>Info</button>
            <button
                className="category-btn"
                id="notes-btn"
                onClick={() => setIsNotesClicked(true)}
            >Notes</button>
        </div>
    )
}


function WindowInfo({ jobPay, jobDeadline, jobDateUpdated }) {

    return (
        <div id="window-info-container">
            <p className="standard-text">Pay Range: {jobPay}</p>
            <span id="status-container">
                <p className="standard-text">Status:</p>
                <select id="status-input">
                    <option value="Pick a status">Pick a status</option>
                    <option value="Applied">Applied</option>
                    <option value="Screened">Screened</option>
                    <option value="Interviewing">Interviewing</option>
                    <option value="Accepted">Accepted</option>
                    <option value="Rejected">Rejected</option>
                </select>
            </span>
            <p className="standard-text">Date Applied: {jobDateUpdated}</p>
            <p className="standard-text">Deadline: {jobDeadline}</p>
        </div>
    )
}

function WindowNotes() {

    return (
        <div id="window-note-container">
            <textarea id="window-note-input" placeholder="Add a note..." />
        </div>

    )
}

function WindowBtns() {

    return (
        <span id="window-btns-container">
            <button className="window-btn" id="edit-button">Edit</button>
            <button className="window-btn" id="update-button">Update</button>
        </span>
    )
}