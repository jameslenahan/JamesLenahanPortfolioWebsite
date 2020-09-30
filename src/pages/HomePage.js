import React from 'react';


import ContactPage from "./ContactPage";
import AboutPage from "./AboutPage";

import Draggable from 'react-draggable';


function HomePage(props) {


    return(

        <div className="container">
            <Draggable>
            <div className="leftpane">
                <h1>
                    Hello,
                </h1>
                <h1>
                    I'm James Lenahan.
                </h1>
                <h3>
                    I am a full stack engineer.
                </h3>
                <p>
                    My primary languages are Ruby, Javascript, React/Redux, and Python.
                </p>
                    </div>
            </Draggable>
            <Draggable>
                <div className="middlepane">
                    <a className="link-1" href="https://github.com/jameslenahan">Check out my Github here </a>
                    <a className="link-2" href="https://www.linkedin.com/in/james-lenahan-9ba40682/">Check out my LinkedIn here</a>

                </div>
            </Draggable>
            <Draggable>
            <div className="rightpane">
                <ContactPage>

                </ContactPage>
                </div>
            </Draggable>
        </div>
    );

}

export default HomePage;
