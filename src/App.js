import React from 'react';

function Food({ fav }) {
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      <Food fav="1" />
      <Food fav="2" />
      <Food fav="3" />
      <Food fav="4" />
      <Food fav="5" />
    </div>
  );
}

export default App;