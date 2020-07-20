import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
                <p>Text here</p>

                <p></p>

                <p></p>

                <p> <a href="" target="_blank" rel="noopener noreferrer">here</a></p>

                <p> <a href="https://github.com/jameslenahan?tab=repositories" target="_blank" rel="noopener noreferrer">here</a></p>
            </Content>
        </div>
    );

}

export default AboutPage;