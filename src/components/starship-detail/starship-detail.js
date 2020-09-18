import React, { Component } from 'react';
import SwapiService from '../../services/swap-service';
import './starship-detail.css'

export default class StarshipDetail extends Component{
    swapiService = new SwapiService();
    state = {
        starship:null
    }
    componentDidMount(){
        this.updateStarship();
    }
    componentDidUpdate(prevProps){
        if(this.props.starshipId !== prevProps.starshipId){
            this.updateStarship();
        }
    }
    updateStarship = () =>{
        const {starshipId} = this.props;
        if(!starshipId){
            return;
        }
        this.swapiService
        .getStarship(starshipId)
        .then((starship)=>{
            this.setState({starship});
        })
    }

    render(){
        if(!this.state.starship){
            return <span> Selected starship </span>
        }
        const {name, model, manufacturer, costInCredits, id, length, crew, passengers, cargoCapacity} = this.state.starship
        return(
            <div className='starship-detail jumbotron rounded'>
                <img 
                    src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
                    className='starship-image' alt =""
                />
                <div>
                    <h4>{name} {this.props.starshipId}</h4>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <span className='tern'>Model:</span>
                            <span>{model}</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Manufacturer:</span>
                            <span>{manufacturer}</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Crew:</span>
                            <span>{crew}</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Cost:</span>
                            <span>{costInCredits}</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Speed:</span>
                            <span>1,000km/h</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Hyperdrive Rating:</span>
                            <span>1.0</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>MGLT:</span>
                            <span>70</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Length:</span>
                            <span>{length}</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Cargo Capacity:</span>
                            <span>{cargoCapacity}</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Mimimum Crew:</span>
                            <span>5</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Passengers:</span>
                            <span>{passengers}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    } 
}