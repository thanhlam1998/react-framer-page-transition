import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import imageSrc from "../images/compressed-image.jpg";

const transition = {
  duration: 0.6,
  ease: [0.6, 0.01, -0.05, 0.9],
};

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
                  <motion.img
                    src={imageSrc}
                    alt="image"
                    whileHover={{ scale: 1.1 }}
                    transition={transition}
                  />
                </Link>
              </div>
            </div>
            <motion.div
              exit={{ opacity: 0 }}
              transition={transition}
              className="information">
              <div className="title">Yasmeen Tariq</div>
              <div className="location">
                <span>28.538336</span>
                <span>-81.379234</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  </>
);

export default Home;
