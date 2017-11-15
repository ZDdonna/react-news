import React from 'react';
import {Card} from 'antd';
import {Router,Route,browserHistory} from 'react-router';
import { Link } from 'react-router-dom';

export default class PCNewsBlock extends React.Component{
    constructor(){
        super();
        this.state = {
            news:''
        }
    }

    componentWillMount(){
        var myFetchOptions = {
            method:'GET'
        };
        fetch("http://mewsapi.guojikong.com/Handle.ashx?action=getnews&type="+this.props.type+"&count="+this.props.count,myFetchOptions)
        .then(response=>response.json())
        .then(json=>this.setState({news:json}));
    };

    render(){
        const { news } = this.state;
        const newsList = news.length
        ?
        news.map((newsItem,index)=>(
            <li key={index}>
                <Link to={`details/${newsItem.uniquekey}`} target="_blank">
                    {newsItem.title}
                </Link>
            </li>
        ))
        
        :"没有加载到任何新闻..";
        return(
            <div className="topNewsList">
                <ul>
                    {newsList}
                </ul>
            </div>
        );
    };
}