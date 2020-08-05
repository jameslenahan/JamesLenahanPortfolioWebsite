import React from 'react';

import Card from '../components/Card';

// import devgrub from '../assets/images/devgrub.png';
// import youtube from '../assets/images/youtube.png';
// import evverest from '../assets/images/evverest.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'james',
                    subTitle: 'yes',
                 //    imgSrc: ,
                    link: 'm',
                    selected: false
                },
                {
                    id: 1,
                    title: 'e',
                    subTitle: '',
            //      imgSrc: ,
                    link: '',
                    selected: false
                },
                {
                    id: 2,
                    title: '',
                    subTitle: '',
            //         imgSrc: ,
                    link: 'https://github.com/jameslenahan?tab=repositories',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
// add new carousel item here
}

export default Carousel;