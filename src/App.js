import React from 'react';
import propTypes from 'prop-types';

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: 
        "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "bulgogi",
    image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLhTuEcDaqRHCSbBTW7Ynte4mNsKsiag2h6w&usqp=CAU",
    rating: 4.9
  },
  {
    id: 3,
    name: "kimbap",
    image:
        "https://recipe1.ezmember.co.kr/cache/recipe/2018/06/05/5ab3fafe7e9f2f5a7cab7c6d12abdefb1.jpg",
    rating: 4.8
  },
  {
    id: 4,
    name: "samgyetang",
    image:
        "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg",
    rating: 4.7
  }
]

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}</h4>
      <img src = {picture} />
    </div>
  ) 
}

Food.propTypes = {
  // Food function componet의 name props는 string 자료형만 넘어오는 것을 허용한다.
  name: propTypes.string.isRequired, 
  picture: propTypes.string.isRequired,
  rating: propTypes.number.isRequired
};

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food 
          key={dish.id} 
          name={dish.name} 
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;