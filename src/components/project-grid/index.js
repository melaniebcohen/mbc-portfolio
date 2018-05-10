import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const projectData = [
  {
    img: 'https://cdn.shopify.com/s/files/1/0636/4349/products/star-wars_po-zu_porg-sneakers.jpg?v=1516741710',
    title: 'Job ff',
    author: 'boo',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0636/4349/products/star-wars_po-zu_porg-sneakers.jpg?v=1516741710',
    title: 'Job tt',
    author: 'boo',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0636/4349/products/star-wars_po-zu_porg-sneakers.jpg?v=1516741710',
    title: 'Job ww',
    author: 'boo',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0636/4349/products/star-wars_po-zu_porg-sneakers.jpg?v=1516741710',
    title: 'Job Seeker',
    author: 'boo',
  },
];

export default class ProjectGrid extends Component {
  render() {
    return (
      <div style={styles.root}>
        <GridList
          cellHeight={180}
          style={styles.gridList}>
          {projectData.map(project => (
            <GridTile
              titlePosition='top'
              titleBackground={'rgba(0, 0, 0, 0.0)'}
              titleStyle={{ color: 'black' }}
              key={project.title}
              title={project.title}
              subtitle={project.author}>
              <img src={project.img} />
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
};