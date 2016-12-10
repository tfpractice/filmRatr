import React from 'react';
import { GridList, GridTile, } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { MovieCard, } from '../movie';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 'auto',
    overflowY: 'auto',
  },
};

const SearchGrid = ({ results, }) => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>Results Grid</Subheader>
      {results.map(movie => (
        <GridTile
          key={movie.id}
          title={movie.title}
          subtitle={<span>by <b>{movie.release_date}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <MovieCard movie={movie} />
        </GridTile>
       ))}
    </GridList>
  </div>
 );

export default SearchGrid;
