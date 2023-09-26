import { useState } from 'react'
import './App.css'
import sun from './images/sun.png'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios';



const App = () => {
  const [data, setData] = useState(
    {
      city: 'kathmandu',
      temprature: 0,
      speed: 0
    }
  )
  const [input, setInput] = useState("")

  // const getData = (url) => {
  //   axios.get(url)
  //     .then((res) => setData({
  //       city: res.data.name,
  //       temprature: res.data.main.temp,
  //       speed: res.data.wind.speed
  //     }))
  // }

  const getData = async (url) =>{
try {
  const res = await axios.get(url)
  setData({
    city: res.data.name,
        temprature: res.data.main.temp,
        speed: res.data.wind.speed
  });
} catch (error) {
  console.log("Error fetching data:", error)
}
  }

  const handleClick = () => {
    getData(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=eda80415d0def7e08af7cb613aefada7`)
  }
  return (
    <Container>
    <Row>
    <div className='App mt-5'>
    <div className='d-flex'>
    <div className='search-container col-md-6 mb-5 mt-5  '>
    <input
    className='my-3'
    type='text'
    placeholder='Enter a City...'
    onChange={(e) => setInput(e.target.value)}
    />
    <button onClick={handleClick} className='mb-5 btn btn-primary'>Click Me</button>
    </div>
    </div>
      <div class="area">
        <div className='sun-img  ms-4 d-flex col-md-6'></div>
        <div className='col-md-6 details-temperature'>
          <h3>Today</h3>
          <h1 className='new-york'>{data.city}</h1>
          <p className='temperature'>{data.temprature} C</p>
          <p className='temperature'>{data.speed}</p>
        </div>
      </div>

      <Container >
        <Row>
          <div className= 'd-flex ms-5' >

            <div className='day-1 ms-5  '>
              <h6 className='text-center'>Wednesday</h6>
              <div className='day-1-img'>
                <img src={sun} alt=' ' />
                <p className='text-center mt-2 mb-3 degree-details'>21C</p>
              </div>
            </div>
            <div className='day-1 ms-3 '>
              <h6 className='text-center'>Sunday</h6>
              <div className='day-1-img'>
                <img src={sun} alt=' ' />
                <p className='text-center mt-2 mb-3 degree-details'>21C</p>
              </div>
            </div>
            <div className='day-1 ms-3 '>
              <h6 className='text-center'>Wednesday</h6>
              <div className='day-1-img'>
                <img src={sun} alt=' ' />
                <p className='text-center mt-2 mb-3 degree-details'>21C</p>
              </div>
            </div>
            <div className='day-1 ms-3 '>
              <h6 className='text-center'>Wednesday</h6>
              <div className='day-1-img'>
                <img src={sun} alt=' ' />
                <p className='text-center mt-2 mb-3 degree-details'>21C</p>
              </div>
            </div>

          </div>
        </Row>
      </Container>

    </div>
    </Row>
    </Container>
  )
}
export default App;

