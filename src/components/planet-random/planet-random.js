import React, { Component } from 'react';
import SwapiService from '../../services/swap-service';

import Spinner from '../spinner'
import './planet-random.css'

export default class PlanetRandom extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true
    }

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 3000)
    }
    componentWillMount(){
        // clearInterval(this.interval)
    }
    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        })
    }
    updatePlanet = () => {
        const id = Math.floor(Math.random() * 10) + 3;
        this.swapiService.getPlanet(id)
            .then(this.onPlanetLoaded)
    }
    render() {
 
        const { planet, loading } = this.state;

        const spinner = loading ? <Spinner /> : null;
        const content = !loading ? <PlanetView planet={planet} /> : null;

        return (

            <div className='planet-random jumbotron rounded'>
                {spinner}
                {content}
            </div>
        )
    }
}
const PlanetView = ({ planet }) => {
    const { name, population, rotationPeriod, diameter, id } = planet;
    return (
        <React.Fragment>
            <img
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                className='planet-image'
            />
            <div>
                <h4>{name}</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <span className='tern'>Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className='tern'>Rotation period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className='tern'>Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}