import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import TopBar from './TopBar'
import Filters from './Filters'
import CharList from './CharList'

import { Paper } from '@material-ui/core'

const characters = [
  { name: "Iron Man", status: "dead", team: "Avengers", rank: 4, src:"https://docs.google.com/uc?id=", fav: false},
  { name: "Thanos", status: "dead", team: "Villains", rank: 11, src:"https://docs.google.com/uc?id=", fav: false},
  { name: "Thor", status: "alive", team: "Avengers", rank: 3, src:"https://docs.google.com/uc?id=", fav: false},
  { name: "Vision", status: "dead", team: "Avengers", rank: 9, src:"https://docs.google.com/uc?id=", fav: false},
  { name: "Rocket", status: "alive", team: "Avengers", rank: 1, src:"https://docs.google.com/uc?id=", fav: false},
  { name: "Black Widow", status: "dead", team: "Avengers", rank: 6, src:"https://docs.google.com/uc?id=1deM-84xukTBX1RwWA9PiKNfcRn10uBqV", fav: false},
  { name: "Red Skull", status: "alive", team: "Villains", rank: 12, src:"https://docs.google.com/uc?id=", fav: false},
  { name: "Ronan", status: "alive", team: "Villains", rank: 10, src:"https://docs.google.com/uc?id=", fav: false},
  { name: "Goose", status: "alive", team: "Neutral", rank: 2, src:"https://docs.google.com/uc?id=", fav: false},
  { name: "Hulk", status: "alive", team: "Avengers", rank: 7, src:"https://docs.google.com/uc?id=", fav: false},
  { name: "Black Panther", status: "alive", team: "Avengers", rank: 5, src:"https://docs.google.com/uc?id=1KT5tZKbqdf-4sH-RH6fz-g3Y1bjEB4uG", fav: false},
  { name: "Ebony Maw", status: "dead", team: "Villains", rank: 8, src:"https://docs.google.com/uc?id=", fav: false}
];

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: characters
    }
  }
  
  updateItems = newItems =>{
    this.setState({
      items: newItems
    });
  }

  updateCharacters = newChars =>{
    characters = newChars;
  }

  handleFav = name =>{
    const newItems = this.state.items.map(item => {
          if (item.name == name) {
            Object.assign(item, { fav: !item.fav })
          }
          return item;
        });
    
    const newChars = characters.map(item => {
          if (item.name == name) {
            Object.assign(item, { fav: !item.fav })
          }
          return item;
        });

    this.updateItems(newItems);
    this.updateCharacters(newChars);
  }

 render() {
   return (
    <div>
      <Paper>
      <TopBar />
      <Filters items = {characters} updateItems={this.updateItems.bind(this)} />
      <CharList entries={this.state.items}
      handleFav = {this.handleFav.bind(this)}
      />
      </Paper>
     </div>
   )
 }
}

ReactDOM.render(<App />, document.getElementById("root"))

