import React, { Component } from "react";
import { FormControl, Input, Button } from "@material-ui/core";
import Dropdown from './Dropdown';
import Sortby from './Sortby';
import Fav from './Fav';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  button: {
    margin: theme.spacing(1),
    minWidth: 100,
  }
});

class Filters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: "",
	    team: "",
      order: "",
      fav: false,
      items: this.props.items
    };

  }

  updateItems = () =>{

    this.setState({
      items: this.props.items.filter(this.matchesFilterType)
    }, () => {
      if(this.state.order != ""){
        this.setState({
          items: this.state.items.sort(this.getSorting())
        })
      }
      this.props.updateItems(this.state.items);
    });

  }

  updateStatus = event =>{
    this.setState({
      status: event.target.value
    }, () => {
      this.updateItems();
    });

  }

  updateTeam = event =>{
    this.setState({
      team: event.target.value
    }, () => {
      this.updateItems();
    });
  }

  updateOrder = newOrder =>{
    this.setState({
      order: newOrder
    }, () => {
      this.updateItems();
    });
  }

  updateFavorite = event =>{
    this.setState({
      fav: !this.state.fav
    }, () => {
      this.updateItems();
    });
  }

  matchesFilterType = item => {

    if(this.state.status == "" && this.state.team == ""){return this.state.fav ? item.fav === this.state.fav : true;}

    if(this.state.status == ""){

      return this.state.fav ? item.fav === this.state.fav && item.team == this.state.team: item.team == this.state.team;
    }else if(this.state.team == ""){
 
      return this.state.fav ? item.fav === this.state.fav && item.status == this.state.status: item.status == this.state.status;
    }else {

      return this.state.fav ? item.fav === this.state.fav && item.team == this.state.team && item.status == this.state.status : item.team == this.state.team && item.status == this.state.status;
    }
	
  }

  getSorting = () =>{
    return this.state.order === "desc"
      ? (a, b) => b.rank - a.rank
      : (a, b) => a.rank - b.rank;
  } 

  clearFilters = () =>{
    this.setState({
      status: "",
	    team: "",
      order: "",
      fav: false,
      items: this.props.items
    }, () => {
      this.updateItems();
    });
  }

  render() {
    const {classes} = this.props;

    return (
      <div>
        <Dropdown status = {this.state.status} team = {this.state.team} updateStatus = {this.updateStatus.bind(this)} updateTeam = {this.updateTeam.bind(this)}/>

        <Sortby order = {this.state.order} updateOrder = {this.updateOrder.bind(this)}/>

        <Fav updateFavorite = {this.updateFavorite .bind(this)} fav = {this.state.fav}/>
        <Button color="secondary" className={classes.button}
        onClick={this.clearFilters}>
        reset filters</Button>
      </div>  
    );
  }
}

Filters.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Filters)
