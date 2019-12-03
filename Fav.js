import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const styles = theme => ({
  button: {
    margin: theme.spacing(0),
    minWidth: 120,
  }
});

class Fav extends Component {

  render(){

    const {classes} = this.props;

    return(
      <FormControlLabel className={classes.button}
          control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} 
          onClick={this.props.updateFavorite}
          checked={this.props.fav}
          />}
          label="My Favorite"
        />
    );
  }
}

Fav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Fav)