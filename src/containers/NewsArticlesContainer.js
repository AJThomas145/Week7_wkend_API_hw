import React, {useState, useEffect} from 'react';

const NewsArticlesContainer = () => {
    const [articles, setArticles] = useState([]);

    
    const getArticles = function(){
        fetch('https://content.guardianapis.com/search?q=brexit&format=json&api-key=test')
        .then(res => res.json())
        .then(articles => setArticles(articles))
        // .then(articles => setArticles(articles))
        // console.log(articles);
    }

    useEffect(() => {
        getArticles()
    }, [])


    return(
        <div>
            Hello
        </div>
    )
}


export default NewsArticlesContainer;