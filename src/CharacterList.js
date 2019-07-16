import React from 'react'
import { List } from 'semantic-ui-react'
import { list } from 'postcss';

class CharacterList extends React.Component {

    render() {
        return(
            <List celled>
                {this.props.characters.map(character => 
                <List.Content>
                    <List.Header>
                         {character.name}
                    </List.Header>
                </List.Content>)}
            </List>
            
            // this.props.characters.forEach()
        )
    }

}

export default CharacterList