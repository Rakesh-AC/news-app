import React, { Component } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';

export default class News extends Component {
  constructor() {
    super();
    console.log("Constructor from news app");
    this.state = {
      articles: [],
      loading: true,
    };
  }

  componentDidMount() {
    // Make an API request when the component mounts
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=c4535d9de63941d88609c6ef86fb843b')
      .then(response => {
        console.log(response.data.articles);
        this.setState({
          articles: response.data.articles,
          loading: false,
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        this.setState({
          loading: false,
        });
      });
  }

  render() {
    const { articles, loading } = this.state;

    return (
      <div>
        <div className="container">
          <h2>NewsMonkey - Top Headlines </h2>

          <div className="row">
            {loading ? (
              <p>Loading...</p>
            ) : (
              articles.map(ele => (
                <div className="col-md-4" key={ele.title}>
                  <NewsItem title={ele.title} description={ele.content} imageUrl={ele.urlToImage} url={ele.url} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}
