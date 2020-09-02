import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
                <p>Hello, my name is James. I'm a full stack engineer with experience in  React.</p>

                <p>My dream is to one day start my own business and become an entrepreneur (currently working on some ideas).</p>

                <p>I'm constantly learning new things. currently those things include gaining more experience withNode JS</p>

                <p>My latest project<a href="https://devgrub.com" target="_blank" rel="noopener noreferrer">here</a>, or on the homepage. Node JS. However, I will be rebuilding it using React in the coming months</p>

                <p>When I'm not learning som. You can find those <a href="youtubelink" target="_blank" rel="noopener noreferrer">here</a></p>
            </Content>
        </div>
    );

}

export default AboutPage;