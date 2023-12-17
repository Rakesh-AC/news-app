import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  articles = [
    {
      "source": {
        "id": null,
        "name": "TCPalm"
      },
      "author": "Lianna Norman, Jennifer Sangalang",
      "title": "Did anyone win Mega Millions? Check numbers for Friday, Dec. 15, 2023 - TCPalm",
      "description": "Will a Florida Mega Millions ticket be a winner? Players have a 1 in 302,575,350 chance to match all five white balls plus the gold Mega Ball.",
      "url": "https://www.tcpalm.com/story/news/2023/12/15/mega-millions-winning-numbers-friday-december-15-florida-lottery-california-powerball-publix/71929269007/",
      "urlToImage": "https://www.tcpalm.com/gcdn/authoring/authoring-images/2023/09/25/PBRE/70958148007-img-1041.jpeg?crop=4021,2259,x0,y168&width=3200&height=1798&format=pjpg&auto=webp",
      "publishedAt": "2023-12-16T11:51:47Z",
      "content": "Will a $2 Mega Millions ticket make you a multimillionaire? It has finally happened to someone. Likely two someones. After months of rollovers, the Mega Millions jackpot, at $395 million with a cash … [+9563 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Euronews"
      },
      "author": null,
      "title": "Germany's Scholz gets Órban to leave room for decision on Ukraine - Euronews",
      "description": "As this month's European Summit draws to a close, German Chancellor Olaf Scholz admitted that it was him who convinced his Hungarian counterpart Viktor Órban to leave the Council room temporarily during discussions on Ukraine - but Scholz noted that this cann…",
      "url": "https://www.euronews.com/2023/12/16/eu-summit-germanys-scholz-gets-orban-to-leave-room-for-decision-on-ukraine-accession",
      "urlToImage": "https://static.euronews.com/articles/stories/08/11/40/10/1200x675_cmsv2_69f7ed03-ca84-5b12-a477-2e1ee5bf52b9-8114010.jpg",
      "publishedAt": "2023-12-16T10:03:53Z",
      "content": "As this month's European Summit draws to a close, German Chancellor Olaf Scholz admitted that it was him who convinced his Hungarian counterpart Viktor Órban to leave the Council room temporarily dur… [+1115 chars]"
    },
  ]
  constructor(){
    super();
    console.log("Constructor from news app");
    this.state = {
      articles:this.articles,
      loading : false
    }
  }
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
