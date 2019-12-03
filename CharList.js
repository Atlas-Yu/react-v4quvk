import React, {Component} from 'react'
import FeaturedVideoIcon from '@material-ui/icons/FeaturedVideo'
import {FormControl, Input, Button, List, ListItemText, ListItem, ListItemIcon, Card } from '@material-ui/core'
import Character from "./Character.js"

class CharList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: this.props.entries,
    };

  }

  handleFav = (name) =>{
      this.setState({
        entries: this.props.entries.map((item)=>{
            if(item.name === name){
              Object.assign(item, { fav: !item.fav })
            }
            return item;
          }),
      }, ()=>{
      });
  }

  createTask = item => {
    return (
      <Character character={item} handleFav={this.handleFav}/>
    )
  }
  render() {
    const listItems = this.props.entries.map(this.createTask)
    return (
      <List>{listItems}</List>
    )
  }
}

export default CharList