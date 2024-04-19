import React from 'react';
import './Home.css';
import side from './side.jpg';
import side1 from './side1.jpg';



const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
       <center> <h1> Beyond-Meat </h1></center>
      </header>
      <section className="features">
        <img src={side} alt="Beyond-Meat" />
        <div>
        <img src={side1} alt="Beyond-Meat" />
        
        </div>
      </section>
    </div>
  );
}

export default Home;
