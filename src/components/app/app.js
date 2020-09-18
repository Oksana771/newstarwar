import React, { Component } from 'react';
import './app.css';

import Header from '../header'
import PlanetRandom from '../planet-random'
import ItemList from '../item-list'
import PeopleDetail from '../people-detail'
import PlanetDetail from '../planet-detail'
import StarshipDetail from '../starship-detail'
import ErrorIndicator from '../error-indicator';
import ErrorButton from '../error-button';
import SwapiService from '../../services/swap-service';



export default class App extends Component {
    swapiService = new SwapiService();
    detail = null;
    state = {
        data: null,
        selectedPlanet: 5,
        selectedStarship: 5,
        selectedPeople: 5,
        hasError: false,
        name: 'people'
    }
    onItemSelected = (id) => {
        this.setState({
          selectedPlanet: id,
            selectedStarship: id,
            selectedPeople:id
        });
    }
    componentDidCatch() {
        this.setState({ hasError: true })
    }
    onTooglePage = (name) => {
        this.setState({
            name
        });

    }
    showData = (name) => {
        switch (name) {
            case 'people': {
                this.swapiService.getAllPeople()
                    .then((data) => {
                        
                        this.setState({ data })
                    })
                this.detail = <PeopleDetail personId={this.state.selectedPeople} />;
                console.log(this.state.data)
                return this.state.data
            }
            case 'planet': {
                this.swapiService.getAllPlanets()
                    .then((data) => {
                        this.setState({ data })
                    })
                this.detail = <PlanetDetail planetId={this.state.selectedPlanet} />;
                return this.state.data

            }
            case 'starship': {
                this.swapiService.getAllStarships()
                    .then((data) => {
                        this.setState({ data })
                    })
                this.detail = <StarshipDetail starshipId={this.state.selectedStarship} />;
                return this.state.data

            }
        }
    }
    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }
        const data = this.showData(this.state.name)
        return (
            <div className='container'>
                <Header onTooglePage={this.onTooglePage} />
                { <PlanetRandom /> }
                <ErrorButton />
                <div className='row'>
                    <div className='col-6'>
                        <ItemList onItemSelected={this.onItemSelected}
                            data={data} />
                    </div>
                    <div className='col-6'>
                        {this.detail}
                    </div>
                </div>
            </div>
        )
    }
}
