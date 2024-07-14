import askQuery from "../../assets/agaaminImages/askQuery.png";

export default function SectionSeven(){
    return (
        <div className="sectionSevenWrapper">
            <div className="sectionSevenTop">
                <img src={askQuery} alt="" />
            </div>
            <div className="sectionSevenBottom">
                <p>Reach To Us at : </p>
                <a className="queryMail" href="#"> support@agaamin.in</a>
            </div>
        </div>
    )
}