import { Component } from "react";
import { withRouter } from "react-router-dom";
import "./css/renderSpinner.css";
import "./css/Details.css";
import RenderSpinner from "./renderSpinner.js";
import capitalize from "../utils/capitalize";
import winePhoto from "./images/stock-image.jpeg";

class Details extends Component {
  constructor() {
    super();

    this.state = { loading: true };
  }
  async componentDidMount() {
    const res = await fetch(
      `http://localhost:1337/wine?_id=${this.props.match.params.id}`
    );
    const json = await res.json();
    const data = json.data.wines;

    this.setState(
      Object.assign(
        {
          loading: false,
        },
        data[0]
      )
    );
  }

  render() {
    if (this.state.loading) {
      return <RenderSpinner />;
    }

    const {
      type,
      vintage,
      grape,
      vinyard,
      region,
      country,
      body,
      sweetness,
      acidity,
      tannins,
      aromas,
    } = this.state;
    const tastingNotes = aromas;
    const listItems = tastingNotes.map((note) => <li key={note}>{note}</li>);

    return (
      <div className="wrapper">

      <div className="details">
        <div>
          <h2 className="details-header">{capitalize(`${type} Wine`)}</h2>
          <div className="image-container">
            <img alt="Wine"src={winePhoto}></img>
          </div>
          <h3 className="wine-details">
            {vintage}  {capitalize(`${grape}`)} {" "}
            {vinyard}  {capitalize(`${region}`)},{" "}
            {capitalize(`${country}`)}
          </h3>
          <button className="buttons">More About {vinyard}</button>
          <div className="wine-info">
            <hr />
            <h4>Tasting Notes:</h4>
            <p>
              A {body} bodied, {sweetness} wine with {acidity} acidity and{" "}
              {tannins} tannins.
            </p>
            <h4>Aromas:</h4>
            <div className="tasting-notes">
              <ul>{listItems}</ul>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default withRouter(Details);
