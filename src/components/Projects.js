import React from 'react';
import { Tab, ListGroup, Row, Col } from 'react-bootstrap';
import {Button} from 'react-bootstrap';

export default function Projects() {
    return (
        <div>
            <h4>Projects</h4>
            <hr />
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                    <Col sm={4}>
                        <ListGroup>
                            <ListGroup.Item action href="#link1">
                                BBB Auto School
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link2">
                                Hello Cloud
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={8}>
                        <Tab.Content>
                            <Tab.Pane eventKey="#link1">
                                <p>A simple ReactJS driven SPA (using
                                <a href="https://www.gatsbyjs.org/" target="_blank">&nbsp;GatsbyJs&nbsp;</a>) 
                                created for a driving school in Taunton, MA.</p>
                                <a href="https://github.com/skhati1/bbbautoschool"><Button variant="outline-info">Source Code</Button></a>
                                &emsp;
                                <a href="https://www.bbbautoschool.com/"><Button variant="outline-info">Live Demo</Button></a>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link2">
                                <p>A hands-on workshop designed for students of Towson University, along with <a href="https://www.codebyalex.com/" target="_blank">Alex Wilson</a>, about the basics of cloud development using AWS with an emphasis on development in conjunction with DevOps.</p>
                                <a href="https://github.com/CodeByAlex/HelloCloud"><Button variant="outline-info">Starter Code</Button></a>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
            <hr />
        </div>
    );
}
