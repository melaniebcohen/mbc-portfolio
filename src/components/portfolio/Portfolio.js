import React, { Component } from 'react';
// import { GridList, GridTile } from 'material-ui/GridList';
import './_portfolio.scss';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
  },
};

const projectData = [
  {
    img: './../../assets/projects/jobseeker.png',
    title: 'Job Seeker',
    // author: 'boo',
    featured: true,
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0636/4349/products/star-wars_po-zu_porg-sneakers.jpg?v=1516741710',
    title: 'RoverView',
    // author: 'boo',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0636/4349/products/star-wars_po-zu_porg-sneakers.jpg?v=1516741710',
    title: 'Take A Hike',
    // author: 'boo',
  },
];

const Portfolio = () => {
  return <section className='portfolio'>

  </section>;
};

export default Portfolio;