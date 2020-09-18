import React, { Component } from 'react';
import SwapiService from '../../services/swap-service';
import Spinner from '../spinner'
import './item-list.css'

export default class ItemList extends Component{
    swapiService = new SwapiService();

   
    
    renderItem = (arr) =>{
        console.log(arr)
        return arr.map(({id,name}) =>{
            return (
                <li className="list-group-item d-flex justify-content-between align-items-center"
                key = {id} 
                onClick={() => this.props.onItemSelected(id)}>
                    {name}
                </li>
            )
        })
        
    }
    render(){
        const {data} = this.props;
        if (!data) {
            return <Spinner />;
          }
        const itemList = this.renderItem(data);
        console.log(itemList)
        return(
            <ul className="list-group">
                {itemList}
            </ul>
        )
    }
}
