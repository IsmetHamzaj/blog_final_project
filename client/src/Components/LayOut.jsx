import React from "react";
import Header from "./Header";
import Footer from "./Footer";



const LayOut = (BaseComponent) => ({ id }) => {
    return (
        <div>
            <Header id={id} />
            <BaseComponent />
            <Footer />
        </div>
    )
}


export default LayOut