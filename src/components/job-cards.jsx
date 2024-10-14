export default function Card({jobTitle, jobCompany, jobPay, jobDeadline, jobType, jobStatus}) {

    return (
    <div id="card-container">
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
    
    function CardInfo({children}) {
    
        return(
            <div id="card-info-container">
                {children}
            </div>
        )
    }
    
    function CardStatus({jobStatus}) {
    
        return(
            <div id="card-status">
                <h2>Status</h2>
                <h1 id="status-header">{jobStatus}</h1>
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
    
    function CardExtraInfo({jobType, jobPay, jobDeadline}) {
    
        return(
            <span id="extra-info-span">
                <p className="small-text">{jobType}</p>
                <hr className="small-divider" />
                <p className="small-text">Pay Range: {jobPay}</p>
                <hr className="small-divider" />
                <p className="small-text">Deadline: {jobDeadline}</p>
            </span>
        )
    }