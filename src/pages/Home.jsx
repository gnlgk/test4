import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './Home.css';

// rafce 기본 함수 생성
const Home = () => {
    const images = [
        {src: 'img1.jpg', title:'img1'},
        {src: 'img2.jpg', title:'img2'},
        {src: 'img3.jpg', title:'img3'}
    ];
    const [inx, setInx] = useState(0);
    const [weather, setWeather] = useState(null);

    useEffect(()=>{
        const timer = setInterval(() => {
            setInx(prev => prev === images.length - 1 ? 0 : prev + 1);
        }, 5000);
        return () => clearInterval(timer); // return 다른 페이지로 넘어갈때 씀
    },[images.length]);

    useEffect(()=>{
        const API_KEY = 'a77dc0b837bf3d059de62157c5c63322';
        const CITY = 'ansan';
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric&lang=kr`;

        const fetchWeather = async () =>{
            try {
                const res = await axios.get(URL);
                setWeather(
                    {
                        temp : res.data.main.temp,
                        description : res.data.weather[0].description,
                        icon : res.data.weather[0].icon
                    }
                );
            } catch (error) {
                console.error('Error',error);
            }
        };
        fetchWeather();
    },[]);


  return (
    <div className='home-container'>
        {
            images.map((img,idx)=>(
                <div key = {idx}
                className={`slide ${inx === idx ? 'active' : ''}`}
                style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/${img.src})`}}
                >
                <h1 className={`slide-title ${inx === idx ? 'on' : ''}`}>{img.title}</h1>
                </div>    
            ))
        }

        {
            weather && (
                <div className='weather'>
                    <img 
                    src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                    alt={weather.description}
                    referrerPolicy='no-referrer' />
                    <div>{weather.temp} ℃</div>
                    <div>{weather.description}</div>
                </div>
            )
        }
    </div>
  )
}

export default Home