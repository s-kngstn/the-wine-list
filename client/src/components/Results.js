import Wine from "./Wine";
import './css/Results.css';

const Results = ({ wines }) => {

  return (
    <div className="search-results">
      {!wines.length ? (
        <div>
          <h2 className="card">Currently there is no wine available like this, please try another search <span role="img" aria-label="search-emoji">🧐</span></h2>
        </div>
      ) : wines.map((wine) => (
        <Wine
          grape={wine.grape}
          vinyard={wine.vinyard}
          type={wine.type}
          vintage={wine.vintage}
          region={wine.region}
          country={wine.country}
          body={wine.body}
          sweet={wine.sweetness}
          acid={wine.acidity}
          tannins={wine.tannins}
          aromas={wine.aromas}
          id={wine._id}
          key={wine._id}
        />
      ))}
    </div>
  );
};

export default Results;