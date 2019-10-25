import React, { Component } from 'react'

class Create extends Component {
    constructor(props) {
        super(props)

        this.state = {
            address:'',
            city: '',
            state:'',
            zip:'',
            image: '',
                 
        }
    }

    universalInput(property, value){
        this.setState({
            [property]: value
        })
    }

    render() {
        const {address, city, state, zip, image} = this.state
        return (
            <form onSubmit = {e => {
                e.preventDefault();
                this.props.newListing(address, city, state, zip, image)
                this.setState({
                    adress:'',
                    city:'',
                    state:'',
                    zip:'',
                    image:''
                })
            }}>

            <label>Location</label>
                <input onChange = {(e) => this.universalInput('address',e.target.value)}/>
                <input onChange = {(e) => this.universalInput('city', e.target.value)}/>
                <input onChange = {(e) => this.universalInput('state', e.target.value)}/>
                <input onChange = {(e) => this.universalInput('zip', e.target.value)}/>
            <label>House image</label>
                <input onChange = {(e) => this.universalInput('image', e.target.value)}/>
                <button>Post</button>
                
            
            
            
            </form>
                
           
        )
    }
}

export default Create
