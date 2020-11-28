import React from 'react';
import StarWarsCaracter from './StarWarsCharacter';
import StarWarsHeader from './StarWarsHeader';

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
            {this.state.data.map(character => <StarWarsCaracter character ={character} />)}
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