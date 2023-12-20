import React, { Component } from 'react';
import NewsItem from './NewsItem';

export default class News extends Component {

  article = [
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": "JON GAMBRELL",
      "title": "Kuwait's ruling emir, Sheikh Nawaf Al Ahmad Al Sabah, dies at age 86 - The Associated Press",
      "description": "Kuwait’s ruling emir, the 86-year-old Sheikh Nawaf Al Ahmad Al Sabah, has died. State television reported his death on Saturday. Kuwait TV broke into programming with Quranic verses just before making the announcement. In late November, Sheikh Nawaf was rushe…",
      "url": "https://apnews.com/article/kuwait-emir-sheikh-nawaf-dies-d4a0e02fd3e5aee29a220686c8df8654",
      "urlToImage": "https://dims.apnews.com/dims4/default/db7c4b0/2147483647/strip/true/crop/4000x2250+0+358/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fc6%2F0a%2F39ba248b2bae5137cb047582595a%2Fd7e767fd7d7b43b5ae15851da4f8ccaa",
      "publishedAt": "2023-12-16T09:58:00Z",
      "content": "DUBAI, United Arab Emirates (AP) Kuwaits ruling emir, the 86-year-old Sheikh Nawaf Al Ahmad Al Sabah, died Saturday after a three-year, low-key reign focused on trying to resolve the tiny, oil-rich n… [+5703 chars]"
    },
    {
      "source": {
        "id": "abc-news",
        "name": "ABC News"
      },
      "author": "Phoebe Natanson",
      "title": "Vatican's financial 'trial of the century' to announce verdict in test of Pope Francis' reforms - ABC News",
      "description": "Cardinal Becciu and 9 others are on trial for alleged financial crimes.",
      "url": "https://abcnews.go.com/International/vaticans-financial-trial-century-announce-verdict-test-pope/story?id=105690180",
      "urlToImage": "https://i.abcnewsfe.com/a/f2b63393-1410-4178-b421-7972952aa12d/giovanni-angelo-becciu-2-gty-bb-231215_1702656482366_hpMain_16x9.jpg?w=992",
      "publishedAt": "2023-12-16T08:44:41Z",
      "content": "ROME -- The first chapter of the Vatican's sprawling financial \"trial of the century\" is expected to come to an end on Saturday after 2 1/2 years and 85 hearings with the reading of the verdict.\r\nMan… [+2474 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Katelyn  Polantz, Devan Cole, Holmes Lybrand, Piper HudspethBlackburn",
      "title": "Will the Georgia election workers see any of the $148 million award from Rudy Giuliani? - CNN",
      "description": "Rudy Giuliani has been ordered to pay nearly $150 million in damages to former Georgia election workers Ruby Freeman and Shaye Moss, who he defamed following the 2020 presidential election.",
      "url": "https://www.cnn.com/2023/12/16/politics/will-georgia-election-workers-collect-148-million-rudy-giuliani/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231214134500-rudy-giuliani-court-121123.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-12-16T08:00:00Z",
      "content": "Rudy Giuliani has been ordered to pay nearly $150 million in damages to former Georgia election workers Ruby Freeman and Shaye Moss, whom he defamed following the 2020 presidential election.\r\nBut as … [+4902 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "50-PIECE! Jalen Brunson EXPLODES for Career-High 50 Points, Hits 9/9 from 3Pt Line in Phoenix! - New York Knicks",
      "description": "Jalen Brunson has himself a night in the desert as the New York Knicks defeat the Phoenix Suns 139-122 on the road on December 16, 2023. Brunson sets career-...",
      "url": "https://www.youtube.com/watch?v=E5-fgkz0RW8",
      "urlToImage": "https://i.ytimg.com/vi/E5-fgkz0RW8/maxresdefault.jpg",
      "publishedAt": "2023-12-16T06:27:47Z",
      "content": null
    },
    {
      "source": {
        "id": "fox-news",
        "name": "Fox News"
      },
      "author": "Paul Steinhauser",
      "title": "State of the Race: How House Republican impeachment inquiry could impact Biden in 2024 election - Fox News",
      "description": "How the vote by House Republicans to formalize an impeachment inquiry into the president benefits and hurts Biden's 2024 re-election campaign",
      "url": "https://www.foxnews.com/politics/state-race-how-house-gops-impeachment-inquiry-could-impact-biden-2024-race",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/11/BIDEN-TRUMP-SPLIT.jpg",
      "publishedAt": "2023-12-16T06:17:00Z",
      "content": "This week's vote entirely along party lines by the Republican-controlled House of Representatives to formally launch an impeachment inquiry into President Biden immediately impacted the president's 2… [+5524 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Rolling Stone"
      },
      "author": "Nancy Dillon",
      "title": "Mötley Crüe Drummer Tommy Lee Accused of Sexually Assaulting Woman in Helicopter - Rolling Stone",
      "description": "A new lawsuit claims Mötley Crüe drummer Tommy Lee sexually assaulted a woman in the cockpit of a helicopter.",
      "url": "https://www.rollingstone.com/music/music-news/tommy-lee-motley-crue-sexual-assault-helicopter-lawsuit-1234931093/",
      "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2023/12/tommy-lee-sexual-assault.jpg?w=1600&h=900&crop=1",
      "publishedAt": "2023-12-16T05:43:49Z",
      "content": "A new lawsuit claims Mötley Crüe drummer Tommy Lee sexually assaulted a woman in the cockpit of a helicopter after she was “lured” onto the chopper by the musician’s private pilot.\r\nIn the complaint … [+4307 chars]"
    },
  ]
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
    };

    
  } 


  async componentDidMount(){
    console.log("COMPONENT DID MOUNT IS A LIFE CYCLE METHOD ")
    let url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c4535d9de63941d88609c6ef86fb843b'
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles : parsedData.articles, loading:false})
  }



  render() {   
    const { articles, loading } = this.state;
    
    console.log("------RENDER FUNCTION ")

    return (
      <div>
        <div className="container">
          <h2>NewsMonkey - Top Headlines (t-{this.state.articles.length})</h2>

          <div className="row">
            {loading ? (
              <p>Loading...</p>
            ) : (

              this.state.articles.map(ele => (
                (ele.title !== null || ele.title !== "")  && (ele.content !== null || ele.content !== "") && ele.urlToImage !== null && ele.url !==null &&
                <div className="col-md-4 mt-3" key={ele.url}>
                  <NewsItem title={ele.title?.slice(0,45)} description={ele.content?.slice(0,88)} imageUrl={ele.urlToImage} url={ele.url} />
                </div>
                
              ))


              
            )}
          </div>
        </div>
      </div>
    );
  }
}
