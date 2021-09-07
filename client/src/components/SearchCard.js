import { useState, useEffect } from "react";
import Results from "./Results";
import "./css/Search.css";
import { requestWines } from "../utils/requestWines";
import { WINES, BODY, SWEET, ACID, TANNIN } from "../variables/Variables";

const SearchCard = () => {
  const [wine, updateWine] = useState("");
  const [wineBody, updateWineBody] = useState("");
  const [wineSweetness, updateWineSweetness] = useState("");
  const [wineAcidity, updateWineAcidity] = useState("");
  const [wineTannins, updateWineTannins] = useState("");
  const [wines, setWines] = useState([]);

  useEffect(() => {
    requestWines(
      wine,
      wineBody,
      wineSweetness,
      wineAcidity,
      wineTannins,
      setWines
    );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestWines(
            wine,
            wineBody,
            wineSweetness,
            wineAcidity,
            wineTannins,
            setWines
          );
        }}
      >
        <label htmlFor="wine">
          Wines
          <select
            id="wine"
            value={wine}
            onChange={(e) => updateWine(e.target.value)}
            onBlur={(e) => updateWine(e.target.value)}
          >
            {/* Blank option */}
            <option />
            {/* Wine options */}
            {WINES.map((wine) => (
              <option value={wine} key={wine}>
                {wine}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="wineBody">
          Body
          <select
            id="wineBody"
            value={wineBody}
            onChange={(e) => updateWineBody(e.target.value)}
            onBlur={(e) => updateWineBody(e.target.value)}
          >
            {/* Blank option */}
            <option />
            {/* Body options */}
            {BODY.map((wineBody) => (
              <option value={wineBody} key={wineBody}>
                {wineBody}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="wineSweetness">
          Sweetness
          <select
            id="wineSweetness"
            value={wineSweetness}
            onChange={(e) => updateWineSweetness(e.target.value)}
            onBlur={(e) => updateWineSweetness(e.target.value)}
          >
            {/* Blank option */}
            <option />
            {/* Body options */}
            {SWEET.map((wineSweetness) => (
              <option value={wineSweetness} key={wineSweetness}>
                {wineSweetness}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="wineAcidity">
          Acidity
          <select
            id="wineAcidity"
            value={wineAcidity}
            onChange={(e) => updateWineAcidity(e.target.value)}
            onBlur={(e) => updateWineAcidity(e.target.value)}
          >
            {/* Blank option */}
            <option />
            {/* Body options */}
            {ACID.map((wineAcidity) => (
              <option value={wineAcidity} key={wineAcidity}>
                {wineAcidity}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="wineTannins">
          Tannins
          <select
            id="wineTannins"
            value={wineTannins}
            onChange={(e) => updateWineTannins(e.target.value)}
            onBlur={(e) => updateWineTannins(e.target.value)}
          >
            {/* Blank option */}
            <option />
            {/* Body options */}
            {TANNIN.map((wineTannins) => (
              <option value={wineTannins} key={wineTannins}>
                {wineTannins}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Results wines={wines}/>
    </div>
  );
};

export default SearchCard;
