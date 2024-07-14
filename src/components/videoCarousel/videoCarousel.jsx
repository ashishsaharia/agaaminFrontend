import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const VideoCarousel = () => {


    const videos = [
        {
            id: 1,
            title: "video One",
            src: "https://www.youtube.com/embed/PSFtA-zX4G4?si=3r5L_L_zT4zID_Ty",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
            referrerPolicy: "strict-origin-when-cross-origin"
        },
        {
            id: 2,
            title: "video Two",
            src: "https://www.youtube.com/embed/TgDA-qK40pc?si=BmP6J58BNJ9UO5eH",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
            referrerPolicy: "strict-origin-when-cross-origin"
        },
        {
            id: 3,
            title: "video Three",
            src: "https://www.youtube.com/embed/LaMsPbuFQUU?si=gdqP3JrGZYx4aiqO",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
            referrerPolicy: "strict-origin-when-cross-origin"
        },
        {
            id: 4,
            title: "video Four",
            src: "https://www.youtube.com/embed/pfhcLcad448?si=MR13eEnGJAODAKjW",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
            referrerPolicy: "strict-origin-when-cross-origin"
        }
    ];


    





    return (
        <Carousel className='videoCarousel' showStatus={false} infiniteLoop={true} autoPlay={true}>
        {videos.map(obj=>{
        return(
            <div key={obj.id}>
                <iframe src={obj.src} ></iframe>
            </div>
        )
    })}
        </Carousel>
    );
};

export default VideoCarousel;
