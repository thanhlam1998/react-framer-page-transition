import * as React from "react";
import { Link } from "react-router-dom";
import imageSrc from "../images/compressed-image.jpg";

const Home = ({ imageDetails }) => (
  <>
    <main>
      <div className="container">
        <div className="row center">
          <div className="image-container">
            <div
              className="thumbnail"
              style={{
                width: imageDetails.width,
                height: imageDetails.height,
              }}>
              <div className="frame">
                <Link to={`/model/yasmeen-tariq`}>
                  <img src={imageSrc} alt="image" />
                </Link>
              </div>
            </div>
            <div className="information">
              <div className="title">Yasmeen Tariq</div>
              <div className="location">
                <span>28.538336</span>
                <span>-81.379234</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
);

export default Home;
