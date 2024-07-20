import React from 'react';
import { IoIosSearch } from "react-icons/io";

export default function Domain({ heading, price }) {
    return (
        <div className="domainWrapper">
            <h1 className="domainHeading">{heading}</h1>
            <h2 className="domainText">{price}</h2>
            <IoIosSearch className="domainSearch" />
        </div>
    );
}