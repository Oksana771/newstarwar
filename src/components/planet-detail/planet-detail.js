import React, { Component } from 'react';
import SwapiService from '../../services/swap-service';

import './planet-detail.css'

export default class PlanetDetail extends Component{

    swapiService = new SwapiService();
    state = {
        planet:null
    }
    componentDidMount(){
        this.updatePlanet();
    }
    componentDidUpdate(prevProps){
        if(this.props.planetId !== prevProps.planetId){
            this.updatePlanet();
        }
    }
    updatePlanet = () =>{
        const {planetId} = this.props;
        if(!planetId){
            return;
        }
        this.swapiService
        .getPlanet(planetId)
        .then((planet)=>{
            this.setState({planet});
        })
    }
    render(){
        if(!this.state.planet){
            return <span> Selected Planet </span>
        }
        const {name, population, rotationPeriod, diameter,id} = this.state.planet
        return(
            <div className='planet-detail jumbotron rounded'>
                <img 
                    src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} 
                    className='planet-image'
                />
                <div>
                    <h4>{name} {this.props.planetId}</h4>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <span className='tern'>Population:</span>
                            <span>{population}</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Rotation Period:</span>
                            <span>{rotationPeriod}</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Orbital Period:</span>
                            <span>364 days</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Diameter:</span>
                            <span>{diameter}</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Gravity:</span>
                            <span>1 Standard</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Terrain:</span>
                            <span>Grasslands, Mountains</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Surface Water:</span>
                            <span>40%</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Climate:</span>
                            <span>Temperate</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    } 
}