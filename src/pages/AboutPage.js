import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
                <p>Hello, my name is James. I'm a full stack engineer with experience in Javascript & React/Redux, Ruby on Rails, and Python.</p>

                <p>My dream is to contribute to a meaningful product or service which makes differences in peoples lives.</p>

                <p>I'm constantly learning new things, currently I am growing as a Python developer, and learning the ins and outs of Node.js.</p>

            </Content>
        </div>
    );

}

export default AboutPage;