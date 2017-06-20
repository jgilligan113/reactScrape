import React, {Component} from "react";
import ArticlePanel from "./ArticlePanel";
import API from "../utils/API";

class Articles extends Component {
    constructor(props) {
        super();
        this.state = {
            articles: []
        };
        this.getArticles = this.getArticles.bind(this);
        this.renderArticle = this.renderArticle.bind(this);
    }

    componentDidMount() {
        this.getArticles();
    }

    
    getArticles() {
        API.getArticles().then((res) => {
            this.setState( {articles: res.data} )
        })
    }

    renderArticle() {
        return (
            this.state.articles.map(article => (
                <ArticlePanel
                    key={article._id}
                    title={article.title}
                    link={article.link}
                    notes={article.notes}
                />
            ))
        )
    }
    render() {
        return (
            <div>
                {this.renderArticle()}
                
            </div>
        )
    }
}

export default Articles;