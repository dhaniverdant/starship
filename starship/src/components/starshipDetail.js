import React from "react";
import { useLocation, Link } from "react-router-dom";

import styles from '../styles/Detail.module.css';

const StarshipDetail = _ => {
  const { state } = useLocation();

  return (
    <div className={styles.itemWrapper}>
      <div>
        <div>
          <h2>{state.starships.name}</h2>
          <div>Model: {state.starships.model}</div>
          <div>Manufacturer: {state.starships.manufacturer}</div>
        </div>
      </div>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default StarshipDetail;
