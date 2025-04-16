import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './Gallery.css'

const Gallery = () => {

    const [dataImg, setDataImg] = useState([]);

    useEffect(() => {
        const fetchImg = async () => { 
            try {
                const res = await fetch(process.env.PUBLIC_URL + '/data/data.json');
                const data = await res.json();
                setDataImg(data);

            } catch(err) { 
                console.error(err);
            }
        }
        fetchImg();
    }, []);

    const points = [
        {x:-80, y:-80},
        {x:-80, y:80},
        {x:80, y:-80},
        {x:80, y:80},
    ];

  return (
      <div className='gallery-outBox'>
        {/* flooding image start */}
        <div className='scroll-img'>                 
            <div className='scroll-track'>
                {
                    dataImg.concat(dataImg).map(( item, idx ) => (
                        <div
                            className='scroll-inbox'
                            key={idx}
                        >
                            <div>{item.title}</div>
                            <img src={process.env.PUBLIC_URL + item.src} alt={item.title} />
                            <div>{ item.desc}</div>
                        </div>
                    ))  // {}대신 ()는 div가 들어가서 바로 가능하도록
                }
              </div>
        </div>
        {/* fade image */}
          <motion.div
            className="fade-section"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.4, delay: 1 }}
        > 
              <div className='img-box'>
                  <img src={process.env.PUBLIC_URL+'/images/img1.jpg'} alt="img1" />
            </div>
              <div className='text-box'>
                  <h2>hello</h2>
                  <p>deep contents hello</p>
            </div>
          </motion.div>
          <motion.div
            className="fade-section"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.4, delay: 1 }}
        > 
              <div className='img-box'>
                  <img src={process.env.PUBLIC_URL+'/images/img1.jpg'} alt="img1" />
            </div>
              <div className='text-box'>
                  <h2>hello</h2>
                  <p>deep contents hello</p>
            </div>
          </motion.div> 
          {/* collected image */}
          <div className='group-img'>
              {
                  [0, 1, 2, 3].map((i) => (
                    <motion.img
                        key={i}
                        src={process.env.PUBLIC_URL + `/images/img${i+1}.jpg`}
                        initial={{ opacity: 0, y: points[i].y, x: points[i].x }}
                        whileInView={{ opacity: 1, y: 0, x: 0 }}
                        transition={{duration:1, delay: i*0.5}}
                        viewport={{ once: true, amount: 0.5 }}
                    /> 
                ))
              }
          </div>
    </div>
  )
}

export default Gallery
