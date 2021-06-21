import React from 'react'
import Card from './Card'
import image1 from '../articuls/fenyr.jpg'
import image2 from '../articuls/martin.jpg'
import image3 from '../articuls/DEPORTIVO.png'

const cards = [
    {
        id: 1,
        title: 'Nahua Web',
        image: image1,
        url: 'https://www.linkedin.com/in/facundo-nahuel-aranda-754109111/',
        text: 'Este es mi linkedin si apretas el boton te van a dar ganas de contratarme con locura.'
    },
    {
        id: 2,
        title: 'Facu Web',
        image: image2,
        url: 'https://www.youtube.com/',
        text: 'si miras mucho youtube te va a dañar los ojos.'
    },
    {
        id: 3,
        title: 'Aranda Web',
        image: image3,
        url: 'https://www.facebook.com/'
    }
]

function Cards(props) {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
          <div className="row">
              {
                    cards.map((card) => (
                        <div className="col-md-4" key={card.id}>
                        <Card title={card.title} imageSource={card.image} url={card.url} text={card.text}/>
                        </div> 
                    ))    
              }            
          </div>  
        </div>
    )
}

export default Cards
