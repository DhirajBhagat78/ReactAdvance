import React, { Component } from 'react'

export class MovieDetailsClass extends Component {
    render() {
       // const{name,director}=this.props
        return (
            <div>
                <h1> movie name is {this.props.name} and it is directed by {this.props.director}</h1>
            </div>
        )
    }
}

export default MovieDetailsClass
