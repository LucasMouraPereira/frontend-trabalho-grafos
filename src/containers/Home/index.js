import React from "react";
import PropTypes from "prop-types";
import Card from "components/core/Card";

const Home = ({ products }) => (
  <div>
    <aside>Lucas</aside>
    {products.map(({ image, title, descriptionIcon, company, currentPrice }) => (
      <div>
        <Card
          image={image}
          title={title}
          descriptionIcon={descriptionIcon}
          company={company}
          price={currentPrice}
        />
      </div>
    ))}
  </div>
);

Home.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      // titleImage: PropTypes.string.isRequired,
      // alt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      descriptionIcon: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      currentPrice: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Home;
