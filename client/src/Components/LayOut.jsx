import React from "react";
import Header from "./Header";
import Footer from "./Footer";



const LayOut = (BaseComponent) => (props) => {
    const match = props.match;
    return (
        <div>
            <Header match={match} />
            <BaseComponent />
            <Footer />
        </div>
    )
}


export default LayOut