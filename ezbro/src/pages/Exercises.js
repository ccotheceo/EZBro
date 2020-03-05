import React, { useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import ExerciseList from '../components/ExerciseList';
import axios from 'axios';

<<<<<<< HEAD
function Exercises() {
=======
function Exercises() ç{
>>>>>>> master
    const [exerciseState, setExerciseState] = useState({
        
        excercises: []
    });

    useEffect(() => {
        // For demonstration purposes, we mock an API call.
        axios.get('https://wger.de/api/v2/exercise/?limit=700')
    .then(res => {
        setExerciseState(res);
        for (let i = 0; i < res.data.results.length; i++){
            const singleEntry = {}
            let exercises = res.data.results[i].exercises
            let exercisesName = res.data.results[i].name
<<<<<<< HEAD
            let exercisesEquipment = res.data.results[i].equipment
=======
            let exercisesEquipment = res.data.results[i].equipmentgi
>>>>>>> master
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