import www from '../../assets/agaaminImages/www.png';
import email from '../../assets/agaaminImages/email.png';
import metaverse from '../../assets/agaaminImages/metaverse.png';
import signIn from '../../assets/agaaminImages/signIn.png';
import upi from '../../assets/agaaminImages/upi.png';
import wallet from '../../assets/agaaminImages/wallet.png';


import Service from './service';



// eslint-disable-next-line react/prop-types
function Icon({src}){
    return(
        <div className='serviceIconWrapper'>
            <img className='serviceIcon' src={src} alt="logo" />
        </div>
    )
}


export default function Services(){
    return(
        <div className='servicesWrapper'>
            <Service heading={"Domain Name"} text={"Use your name as a web3 domain name"}>
                <Icon src={www}></Icon>
            </Service>
            <Service heading={"Email Address"} text={"Use your name as a personal email zone"} >
                <Icon src={email}></Icon>
            </Service>
            <Service heading={"Payment ID"} text={"Your name will be your defacto payment id"}>
                <Icon src={upi}></Icon>
            </Service>
            <Service heading={"Name in Metaverse"} text={"Your avatar's handle in the metaverse"}>
                <Icon src={metaverse}></Icon>
            </Service>
            <Service heading={"Single Sign on for Apps"}  text={"Your universal signIn to all Apps"}>
                <Icon src={signIn}></Icon>
            </Service>
            <Service heading={"Wallet ID"} text={"Your universal wallet address for crypto and rupees"}>
                <Icon src={wallet}></Icon>
            </Service>
        </div>
    )
}


