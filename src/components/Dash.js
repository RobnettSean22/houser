import React, { Component } from 'react'
import axios from 'axios'
import Create from './Create'
import {Switch, Route, Link} from 'react-router-dom'


class Dash extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 allHomes:[],
                 updateListing:'',
                 address:'',
                 city: '',
                 state:'',
                 zip:'',
                 image: '',
                      
        }
        this.createListing  = this.createListing.bind(this)
    }
    componentDidMount(){
        this.readListings()
    }

    readListings(){
        axios.get(`/api/view_listings`).then(response => {
            this.setState({
                allHomes:response.data,
                updateListing:null
            })
        })
    }

    deleteListing(id){
        axios.delete(`/api/delete_listing/${id}`).then(response => {
            this.setState({
                allHomes:response.data
            })
        })
    }

    createListing(address, city, state, zip, image){
            
            const newListing = {
                address,
                city,
                state,
                zip,
                image,

            };
        axios.post(`/api/create_listing/`, newListing).then(response => {
            this.setState({
                allHomes:response.data
            })
        })

    }
    editListing(id, address, city, state, zip, image){
        const updateListing = {
            address,
            city,
            state,
            zip,
            image,

        };
        axios.put(`/api/edit_listing/${id}`, updateListing).then(response => {
            this.setState({
                allHomes:response.data
            })
        })
    }

    render() {
        const {allHomes} = this.state
        const mapHomes = allHomes.map(home => {
            return (
                    
                    <div key = {home.property_id}>
                        
                        <input placeholder = {home.address} onChange = {(e) => this.setState({address:e.target.value})}/>
                        <input placeholder = {home.city} onChange = {(e) => this.setState({city:e.target.value})}/>
                        <input placeholder = {home.state} onChange = {(e) => this.setState({state:e.target.value})}/>
                        <input placeholder = {home.zip} onChange = {(e) => this.setState({zip:e.target.value})}/>
                        <input placeholder = {home.image} onChange = {(e) => this.setState({image:e.target.value})}/>
                        
                        
                        
                        
                        <button onClick ={(e) => this.editListing(home.property_id) }>Update</button>
                        // <button onClick={() => this.deleteListing(home.property_id)}>delete</button>
                    
                    </div>
            )
        })
        return (
            <div>
                <Create  newListing = {this.createListing}/>
                <div>{mapHomes}</div>
               
            </div>
        )
    }
}

export default Dash
