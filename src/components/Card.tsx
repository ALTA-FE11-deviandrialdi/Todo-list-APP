import React, { Component } from 'react'

interface CardProps{
    title: string;
    image: string,
}
export default class Card extends Component <CardProps> {
  render() {
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img 
          className="max-auto"
          src={`https://image.tmdb.org/t/p/w500/${this.props.image}`} alt={this.props.title} 
          />
          </figure>
        <div className="card-body item-center justify-between">
          <h2 className="card-title text-center">{this.props.title}</h2>
          <div className="card-actions w-full justify-center">
            <button className="btn btn-primary w-full">Add to Favorite</button>
          </div>
        </div>
      </div>
    )
  }
}
