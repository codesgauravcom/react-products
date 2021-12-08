import React, { Component } from 'react';
import  axios  from 'axios';
import '../Mycss/mystyle8.css'


export class News extends Component {

    state={newsData:[]}

    componentDidMount()
    {
        const URL="https://newsapi.org/v2/everything?q=tesla&from=2021-11-08&sortBy=publishedAt&apiKey=d0e0cca623b2400c810988767a9b5375";
        axios.get(URL)
        .then(res=>
            {
                this.setState({newsData:res.data.articles});
                console.log(res.data.articles);

            })

    }
    render() {
        return (
            <div>
                 <div>
    <h1 className="glow">Latest News</h1>
    </div>
               {this.state.newsData.map(news=>
                <div>
<h1 className="nn">{news.title}</h1>
<article>

    <img src={news.urlToImage} height={150} width={400} alt=""/>
<br />
    {news.description}

</article>


                </div>
                )}


               
            </div>
        )
    }
}

export default News
