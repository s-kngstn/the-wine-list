import React from "react";
import { Link } from 'react-router-dom';
import capitalize from "../utils/capitalize";
import "./css/Wine.css";

const Wine = ({ aromas, type, vintage, grape, vinyard, region, country, body, sweet, acid, tannins, id }) => {
  // const tastingNotes = aromas;
  // const listItems = tastingNotes.map((note) => <li key={note}>{note}</li>);

  return (
    <Link to={`/wine/${id}`} className="card">
    <div>
      <h2>{capitalize(type)}</h2>
      <h4>{vintage}</h4>
      <h2>{capitalize(grape)}</h2>
      <h3>{vinyard}</h3>
      <h4>
        {capitalize(region)}, {capitalize(country)}
      </h4>
    </div>
    </Link>
  );
};

export default Wine;
