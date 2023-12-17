import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
      <div>
        <h2>This is news component</h2>
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>    
    )
  }
}
