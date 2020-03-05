import React from 'react';
import {Carousel} from 'react-bootstrap';
import Weightbar from '../assets/bar.jpeg';
import Healthy from '../assets/healthy.jpeg';
import Sled from '../assets/sled.jpeg';
import Ropes from '../assets/ropes.jpeg';


export const Home = () => (
        <div class="Whole-page">
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Weightbar}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Workout</h3>
      <p>Select from premade workouts or create your own.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Ropes}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Exercise</h3>
      <p>Fill your workouts with a variety of diffrent exercises</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Sled}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Coming Soon</h3>
      <p>Schedule your workouts and plan for next week</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Healthy}
      alt="Fourth slide"
    />

    <Carousel.Caption>
      <h3>Coming Soon</h3>
      <p>Enter what you eat to stay on top of your diet</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
