import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import TopBar from './TopBar'
import Filters from './Filters'
import CharList from './CharList'

import { Paper } from '@material-ui/core'

const characters = [
  { name: "Iron Man", status: "dead", team: "Avengers", rank: 4, desc:"The 4th most hariy", src:"https://docs.google.com/uc?id=1zHogW9ZpmcOF6urUw44hBNmff_6v2n1k", fav: false},
  { name: "Thanos", status: "dead", team: "Villains", rank: 11, desc:"The 11th most hariy",src:"https://docs.google.com/uc?id=1UOJbF6khfXYaDwDVWijQPI6waTAvIBt4", fav: false},
  { name: "Thor", status: "alive", team: "Avengers", rank: 3, desc:"The 3rd most hariy",src:"https://docs.google.com/uc?id=1V7sU1yxnapnw7eS7pz8rX1HkzInHbfBh", fav: false},
  { name: "Vision", status: "dead", team: "Avengers", rank: 9, desc:"The 9th most hariy",src:"https://docs.google.com/uc?id=12wTLplKCLAHOZdutu8gPwbymVgBvjCAf", fav: false},
  { name: "Rocket", status: "alive", team: "Avengers", rank: 1, desc:"The most hariy",src:"https://docs.google.com/uc?id=1FwByEKmT9FmwQSJbHO1hsFWJwmjrKcjD", fav: false},
  { name: "Black Widow", status: "dead", team: "Avengers", rank: 6, desc:"The 6th most hariy",src:"https://docs.google.com/uc?id=1deM-84xukTBX1RwWA9PiKNfcRn10uBqV", fav: false},
  { name: "Red Skull", status: "alive", team: "Villains", rank: 12, desc:"The 12th most hariy",src:"https://docs.google.com/uc?id=1XXSIqxcBoDx8UHqwAHgVCCe7LjDagU62", fav: false},
  { name: "Ronan", status: "alive", team: "Villains", rank: 10, desc:"The 10th most hariy",src:"https://docs.google.com/uc?id=1GzYJPol9hr3dSvYpWf1yMWhx0aStSJvf", fav: false},
  { name: "Goose", status: "alive", team: "Neutral", rank: 2, desc:"The 2nd most hariy",src:"https://docs.google.com/uc?id=1uEMsDKQqbTPzjmX02qRYpSE-wKw2C0Go", fav: false},
  { name: "Hulk", status: "alive", team: "Avengers", rank: 7, desc:"The 7th most hariy",src:"https://docs.google.com/uc?id=17cINpdjjNL3Njd28MWVWkB0jEM4btcU2", fav: false},
  { name: "Black Panther", status: "alive", team: "Avengers", rank: 5, desc:"The 5th most hariy",src:"https://docs.google.com/uc?id=1KT5tZKbqdf-4sH-RH6fz-g3Y1bjEB4uG", fav: false},
  { name: "Ebony Maw", status: "dead", team: "Villains", rank: 8, desc:"The 8th most hariy",src:"https://docs.google.com/uc?id=1xW3EBCRQcLErUua7QBaNj1abUF2ieS9n", fav: false}
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

