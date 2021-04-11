import React from "react";
import PropTypes from "prop-types";

const Home = ({ test }) => (
    <div>{test.test}</div>
);

Home.propTypes = {
    test: PropTypes.string.isRequired,
}

export default Home;
