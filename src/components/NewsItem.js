import React, { Component } from 'react'

export default class NewsItem extends Component {
  constructor(){
    super();
    console.log("Constructor From Item ");
  }

  render() {
    let {title , description} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src="https://www.tcpalm.com/gcdn/authoring/authoring-images/2023/09/25/PBRE/70958148007-img-1041.jpeg?crop=4021,2259,x0,y168&width=3200&height=1798&format=pjpg&auto=webp" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/newsDetails" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    )
  }
}
