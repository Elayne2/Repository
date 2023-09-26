import React from 'react';
import ReactDOM from 'react-dom';

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals: [ 'Horse', 'Turtle', 'Elephant', 'Monkey']
};

const App3 = () => {
  return (
    <div>
        <h1>ex3</h1>
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <UserFavoriteAnimals favAnimals={user.favAnimals} />
    </div>
  );
};

const UserFavoriteAnimals = ({ favAnimals }) => {
  const animalList = favAnimals.map((animal, index) => <li key={index}>{animal}</li>);

  return <ul>{animalList}</ul>;
};
export default App3;

ReactDOM.render(<App3 />, document.getElementById('root'));