import agaaminLogo from '../../assets/agaaminImages/logo.png'
export default function Logo(){
    return (
        <div className="logoWrapper">
        <img className= "logo" src={agaaminLogo} alt="Logo" />
        </div>
    )
}