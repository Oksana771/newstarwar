import React, { Component } from 'react';
import SwapiService from '../../services/swap-service';
import './people-detail.css'

export default class PeopleDetail extends Component{
    swapiService = new SwapiService();
    state = {
       person:null
    }
    componentDidMount(){
        this.updatePeople();
    }
    componentDidUpdate(prevProps){
        if(this.props. personId !== prevProps. personId){
            this.updatePeople();
        }
    }
    updatePeople = () =>{
        const { personId} = this.props;
        if(! personId){
            return;
        }
        this.swapiService
        .getPerson( personId)
        .then(( person)=>{
            this.setState({ person});
        })
    }

    render(){
        if(!this.state.person){
            return <span> Selected Planet </span>
        }
        const {name, id, gender, birthYear,eyeColor} = this.state.person
        return(
            <div className='people-detail jumbotron rounded'>
                <img 
                    src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg` }
                    className='person-image'
                />
                <div>
                    <h4>{name} {this.props.personId}</h4>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <span className='tern'>Birth Year:</span>
                            <span>{birthYear}</span>
                        </li>
                                      
                             <li className="list-group-item">
                            <span className='tern'>Gender:</span>
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Eye Color:</span>
                            <span>{eyeColor}</span>
                        </li>
                       
                      
                    </ul>
                </div>
            </div>
        )
    } 
}