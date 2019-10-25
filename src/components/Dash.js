import React, { Component } from 'react'
import axios from 'axios'
import Create from './Create'


class Dash extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 allHomes:[]
        }
        this.createListing  = this.createListing.bind(this)
    }
    componentDidMount(){
        this.readListings()
    }

    readListings(){
        axios.get(`/api/view_listings`).then(response => {
            this.setState({
                allHomes:response.data
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

    render() {
        const {allHomes} = this.state
        const mapHomes = allHomes.map(home => {
            return (
                <div key = {home.property_id}>
                    <div>{home.address}</div>
                    <div>{home.city}</div>
                    <div>{home.state}</div>
                    <div>{home.zip}</div>
                    <div>{home.image}</div>
                    <Create  newListing = {this.createListing}/>
                    <button onClick={() => this.deleteListing(home.property_id)}>delete</button>
                
                </div>
            )
        })
        return (
            <div>
                {mapHomes}
            </div>
        )
    }
}

export default Dash
