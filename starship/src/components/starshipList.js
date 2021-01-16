import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import styles from '../styles/List.module.css';

function StarshipList() {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    fetch('https://swapi.dev/api/starships/')
      .then(response => response.json())
      .then(response => setStarships(response.results));
  })

  {/*
    Hi Evos engineering team!
    It seems impossible for me to pass this coding test
    with an incompleted work like this.
    But I want to say thank you
    for this great opportunity and experience :)
    Hope theres another chance for me next time to join Evos.
    GBU.
  */}

  return (
    <div className={styles.itemWrapper}>
      {starships.map((starship, index) => (
        <div
          key={starship.name}
          className={styles.linkWrapper}
        >
          {starship.name}
          <Link to={{
            pathname: `/starship/${index}`,
            state: {starships: starship}
          }}>
            Show details
          </Link>
        </div>
      ))
      }
    </div>
  );
}

export default StarshipList;
