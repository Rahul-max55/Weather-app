import React, { useState, useContext, useEffect } from 'react';
import CardOne from './CardOne';
import CardTwo from './CardTwo';
import { Create_context } from './Context/CreateContext';


const Home = () => {

    const context = useContext(Create_context);
    const { handleChange , API } = context


    const [show, setShow] = useState("0%")

    const showSlide = () => {
        show === "0%" ? setShow("50%") : setShow("0%");
    }

    useEffect(() => {
        setShow("0%")
    }, [API])

    const ExtraInfo = (e) => {
        // console.log(e.key);
        e.key === "Enter" ? show === "0%" ? setShow("50%") : setShow("0%") : setShow(show);
    }

    return (
        <>
            <header onKeyDownCapture={ExtraInfo}>
                <div className="container">
                    <div className="div_searchBar">
                        <input type="search" placeholder='Please enter City Name' name="search" id="search" onChange={handleChange} />
                    </div>
                    <div className="cards">
                        <CardOne showSlide={() => showSlide()} />
                        <CardTwo show={show} />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Home;