import React from 'react';
import Header from "../containers/Header/Header";
import {Link} from "react-router-dom";
import Main from "../containers/Main/Main";
import Footer from "../containers/Footer/Footer";

const Home = () => {
    return (
        <div>
            <Header />
            <Main/>
            <Footer/>
        </div>
    );
}

export default Home;