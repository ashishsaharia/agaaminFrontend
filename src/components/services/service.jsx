

export default function Service({children, heading, text}){
    return(
        <div className="serviceWrapper">
            {children}
            <h2 className="serviceHeading">{heading}</h2>
            <h3 className="serviceText">{text}</h3>
        </div>
    )
}