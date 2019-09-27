import React, { Fragment } from "react";
import { Store } from "./Store";
import { Link } from "@reach/router";

const App = (props: any): JSX.Element => {
  const { state } = React.useContext(Store);

  return (
    <Fragment>
      <header className="header">
        <div>
          <h1>Movies and Series</h1>
          <p>Pick your favourite episode</p>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/faves">Favourite(s): {state.favourites.length}</Link>
        </div>
      </header>
      {props.children}
    </Fragment>
  );
};

export default App;
