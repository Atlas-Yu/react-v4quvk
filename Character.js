import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const styles = theme => ({
  button: {
    margin: theme.spacing(1),
    minWidth: 100,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1
  }
});

class Character extends Component {

  handleFav = event =>{
      this.props.handleFav(this.props.character.name)
  }

  render(){

    const {classes} = this.props;

    return(

    <ListItem>
      <ListItemAvatar>
        <Avatar alt={this.props.character.name} src={this.props.character.src} className={classes.bigAvatar} />
      </ListItemAvatar>
      <ListItemText
        primary={this.props.character.name}
        secondary={"Rank " + this.props.character.rank}
      />
      <ListItemSecondaryAction>
        <FormControlLabel
          control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} 
          onChange={this.handleFav}
          checked={this.props.character.fav}
          />}
          label=""
        />
      </ListItemSecondaryAction>
    </ListItem>
 
    );
  }
}

Character.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Character)