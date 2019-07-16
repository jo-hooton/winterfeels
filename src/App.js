import React from 'react';
import './App.css';
import CharacterList from './CharacterList';

class App extends React.Component {

  state = {
    characters: [],
    likedCharacters: [],
    selectedCharacter: null
  }

  fetchWinterfell = () => {
    const url = 'https://anapioficeandfire.com/api/houses/362'
    fetch(url)
      .then(resp => resp.json())
      .then(characters => this.fetchCharacter(characters))
  }

  fetchCharacter = characters => {
    characters.swornMembers.forEach(member => {
      fetch(member)
      .then(resp => resp.json())
      .then(character => this.setCharacter(character))
    })
  }

  setCharacter = character => {
    const characterArray = this.state.characters
    characterArray.push(character)
    this.setState({ characters: characterArray })
  }

  componentDidMount = () => {
    this.fetchWinterfell()
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <CharacterList characters={this.state.characters} />
      </header>
      
    </div>
  );
  }
}

export default App;
