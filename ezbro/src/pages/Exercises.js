<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import ExerciseList from '../components/ExerciseList';
import axios from 'axios';
=======
import React from 'react';
import { Nav, Container, Card, ListGroup, Row, Col, Image } from 'react-bootstrap';

>>>>>>> 264b0859835cc190d95140a4d73a017012f5aa53

function Exercises() ç{
    const [exerciseState, setExerciseState] = useState({
        
        excercises: []
    });

<<<<<<< HEAD
    useEffect(() => {
        // For demonstration purposes, we mock an API call.
        axios.get('https://wger.de/api/v2/exercise/?limit=700')
    .then(res => {
        setExerciseState(res);
        for (let i = 0; i < res.data.results.length; i++){
            const singleEntry = {}
            let exercises = res.data.results[i].exercises
            let exercisesName = res.data.results[i].name
            let exercisesEquipment = res.data.results[i].equipmentgi
            singleEntry.category = exercises;
            singleEntry.name = exercisesName;
            singleEntry.equipment = exercisesEquipment;
}
        console.log(res)
        });
      }, []);




    return (
        <div class="Whole-page">
            <div class="header">
                <h1>Exercises</h1>
            </div>
            <div>
                <Nav variant="tabs" defaultActiveKey="link-arms">
                    <Nav.Item>
                        <Nav.Link eventKey="link-arms" onClick={() => setExerciseState({ ...exerciseState, category: 8 })}>Arms</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-legs" onClick={() => alert("legs!")}>Legs</Nav.Link>
                        {/* <Nav.Link eventKey="link-legs" onClick={() => setExerciseState({ ...exerciseState, category: 9 })}>Legs</Nav.Link> */}
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-abs" onClick={() => setExerciseState({ ...exerciseState, category: 10 })}>Abs</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-chest" onClick={() => setExerciseState({ ...exerciseState, category: 11 })}>Chest</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-back" onClick={() => setExerciseState({ ...exerciseState, category: 12 })}>Back</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-shoulders" onClick={() => setExerciseState({ ...exerciseState, category: 13 })}>Shoulders</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-calves" onClick={() => setExerciseState({ ...exerciseState, category: 14 })}>Calves</Nav.Link>
                    </Nav.Item>

                </Nav>
                <ExerciseList />

            </div>

        </div>
    )
}

export default Exercises;
=======
export const Exercises = () => (
    <div class="Whole-page">
        <div class="header">
            <h1>Exercises</h1>
        </div>
        <div>
            <Nav variant="tabs" defaultActiveKey="link-arms">
                <Nav.Item>
                    <Nav.Link eventKey="link-arms">Arms</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-legs">Legs</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-abs">Abs</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-chest">Chest</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-back">Back</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-shoulders">Shoulders</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-calves">Calves</Nav.Link>
                </Nav.Item>

            </Nav>
            <Card>
                <ListGroup varient="flush">
                    <ListGroup.Item>
                        <Container>
                            <Row>
                                <Col sm={4}>
                                <Image src="holder.js/171x180" thumbnail />

                                </Col>
                                <Col sm={8}>
                                    <Row><h5>Exercise Name</h5></Row>
                                    <Row><h6>Exercise Equipment</h6></Row>
                                </Col>
                            </Row>
                        </Container>
                    </ListGroup.Item>
                </ListGroup>
            </Card>

        </div>

    </div>
)
>>>>>>> 264b0859835cc190d95140a4d73a017012f5aa53
