import React from 'react';
import StarWarsCaracter from './StarwarsCharacter';

export default class StarWarsPeople extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.loadData = this.loadData.bind(this);
    }



    componentDidMount() {
    this.loadData();
    }

    render(){
        return (<table>
            <head>
                <tr>
                    <th>Nombre</th>
                    <th>Altura</th>
                    <th>Masa</th>
                    <th>Color de cabello</th>
                    <th>Color de piel</th>
                    <th>Color de ojos</th>
                    <th>Año de nacimiento</th>
                    <th>Género</th>
                </tr>
            </head>
            <tbody>
                {this.state.data.map(character => <StarWarsCaracter character ={character} />)}
            </tbody>
        </table>);
    }

    async loadData() {
        let response = await fetch('https://swapi.dev/api/people/');
        let parseResponse = await response.json();
        this.setState({
            data: parseResponse.results
        })
    }
}