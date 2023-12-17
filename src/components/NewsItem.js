import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title , description} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src="https://www.tcpalm.com/gcdn/authoring/authoring-images/2023/09/25/PBRE/70958148007-img-1041.jpeg?crop=4021,2259,x0,y168&width=3200&height=1798&format=pjpg&auto=webp" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/newsDetails" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    )
  }
}
