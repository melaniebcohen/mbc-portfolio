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

export default class Portfolio extends Component {
  render() {
    return (
      <div style={styles.root}>
        <GridList
          cols={2}
          cellHeight={200}
          padding={1}
          style={styles.gridList}>
          {projectData.map(project => (
            <GridTile
              style={{ borderRadius: 4 }}
              key={project.title}
              title={project.title}
              // subtitle={project.author}
              // onClick={() => console.log('boo')}
              titlePosition='top'
              titleBackground='linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)'
              cols={project.featured ? 2 : 1}
              rows={project.featured ? 2 : 1}>
              <img src={project.img} className='project' />
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
};