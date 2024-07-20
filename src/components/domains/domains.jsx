import React from 'react';
import Domain from "./domain";

export default function Domains() {
    return (
        <div className="domainsWrapper" >
            <Domain className={"domainOdd"} heading=".भ" price="Rs 499/Only" />
            <Domain heading=".অ" price="Rs 499/Only" />
            <Domain className={"domainOdd"} heading=".bh3" price="Rs 899/Only" />
            <Domain heading=".foodz" price="Rs 399/Only" />
            <Domain className={"domainOdd"} heading=".ব" price="Rs 499/Only" />
            <Domain heading=".e₹" price="Rs 800/Only" />
            <Domain className={"domainOdd"} heading=".rarity" price="Rs 2000/Only" />
            <Domain heading=".🇮🇳🦁" price="Rs 199/Only" />
        </div>
    );
}