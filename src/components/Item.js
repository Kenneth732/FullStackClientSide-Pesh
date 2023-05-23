import React, { useEffect, useState } from 'react';
import './App.css';

function Item() {
  const [items, setItems] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  useEffect(() => {
    fetch('/products')
      .then((res) => res.json())
      .then((itemArrays) => {
        setItems(itemArrays);
      });
  }, []);

  const handleCardClick = (item) => {
    setSelectedAnimal(item);
  };

  const handleCloseClick = () => {
    setSelectedAnimal(null);
  };

  return (
    <div className="App">
      {items.map((item) => (
        <div key={item.id} className="animal-card">
          <div className="card" onClick={() => handleCardClick(animal)}>
            <div className="image-card">
              <img src={animal.image} alt="animal" />
            </div>
            <div className="text-card">
              <h2 className="animal-name">{animal.name}</h2>
              <p className="animal-description">{animal.description}</p>
            </div>
          </div>
        </div>
      ))}

      {selectedAnimal && (
        <div className="overlay" onClick={handleCloseClick}>
          <div className="zoomed-card">
            <img src={selectedAnimal.image} alt="animal" />
            <div className="text-card">
              <h2 className="animal-name">{selectedAnimal.name}</h2>
              <p className="animal-description">{selectedAnimal.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Item;