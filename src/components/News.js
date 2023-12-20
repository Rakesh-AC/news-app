import React, { Component } from 'react';
import NewsItem from './NewsItem';

export default class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page:1,
      no_next : false,
    };
  } 

  handelNextClick = async () =>{
    if(this.page+1 > Math.ceil(this.state.totalResults/9)){
      // // changing only 
      // this.setState((prevState) => ({ no_next: true }));
    }else{
      console.log("Next click");
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c4535d9de63941d88609c6ef86fb843b&page=${this.state.page +1}&pageSize=9`
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({articles : parsedData.articles, loading:false, page:this.state.page+1})
    }
  }

  handlePrevClick = async () =>{
   
      console.log("Previous click");
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c4535d9de63941d88609c6ef86fb843b&page=${this.state.page -1}&pageSize=9`
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({articles : parsedData.articles, loading:false, page:this.state.page-1})
    
    
  }


  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c4535d9de63941d88609c6ef86fb843b&page=${this.state.page}&pageSize=9`
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles : parsedData.articles, loading:false, page:1, totalResults:parsedData.totalResults})
  }



  render() {   
    const { articles, loading } = this.state;
    
    console.log("------RENDER FUNCTION ")

    return (
      <div>
        <div className="container my-3">
          <h2>NewsMonkey - Top Headlines (t-{this.state.articles.length})</h2>

          <div className="row">
            {loading ? ( <p>Loading...</p>) : (
              this.state.articles.map(ele => (
                (ele.title !== null || ele.title !== "")  && (ele.content !== null || ele.content !== "") && ele.urlToImage !== null && ele.url !==null &&
                <div className="col-md-4 mt-3" key={ele.url}>
                  <NewsItem title={ele.title?.slice(0,45)} description={ele.content?.slice(0,88)} imageUrl={ele.urlToImage} url={ele.url} />
                </div>
                ))
            )}
          </div>

          

          <div className="container mt-3 d-flex justify-content-between">
            <button type='button' disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr;  Previous</button>
            <button type='button' disabled={this.state.no_next} className="btn btn-dark" onClick={this.handelNextClick}>Next &rarr;</button> 
          </div>
        </div>
      </div>
    );
  }
}
