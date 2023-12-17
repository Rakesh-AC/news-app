import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h2>NewsMonkey - Top Headlines </h2>
          <div className="row">
            <div className="col-md-4"><NewsItem title="my title" description="my description of the news" /></div>
            <div className="col-md-4"><NewsItem title="my title" description="my description of the news" /></div>
            <div className="col-md-4"><NewsItem title="my title" description="my description of the news" /></div>
          </div>
        </div>
      </div>    
    )
  }
}
