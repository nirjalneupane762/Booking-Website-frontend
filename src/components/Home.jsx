import React from "react";
import "../styles/Home.css";
import { Button, Heading } from "@chakra-ui/react";
const Home = () => {
  return (
    <div id='home'>
      <div className='resp'>
        <div id='imgSection'>
          <div className='box1'>
            <img
              id='main'
              src='https://th.bing.com/th/id/OIP.yqT6OdeWaSO-IBPL83gSYwHaHV?rs=1&pid=ImgDetMain'
              alt='img1'
            />
          </div>
          <div className='box2'>
            <img
              id='main'
              src='https://media.architecturaldigest.com/photos/57e42deafe422b3e29b7e790/master/pass/JW_LosCabos_2015_MainExterior.jpg'
              alt='img2'
            />
          </div>
        </div>
        <div className='container'>
          <div id='textSection'>
            <Heading id='heading'>Explore the beauty of Journey with us</Heading>
            <span id='span'>
              Welcome to our Yatra Booking, where convenience meets exploration! 
              Discover the world at your fingertips with our seamless hotel, flight, and place booking website. 
              Embark on a hassle-free journey as you browse through an extensive selection of accommodations, ranging from luxurious hotels to cozy guesthouses.
            </span>
          </div>

          <Button id='btn'>
            <a href='#about'>Learn More</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
