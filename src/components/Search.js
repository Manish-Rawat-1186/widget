import React, { useEffect } from "react";
import {useState} from "react";
import axios from "axios";
import { cleanup } from "@testing-library/react";

const Search = () => {

    const [term, setTerm] = useState('program');
    const [results, setResults] = useState([]);

    //we want to send reuest to wikiapi 
    //whenever user change the term
    //so useEffect helps us

    useEffect(() => {
     const search = async () => {
           const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
            params: {
                action : 'query',
                list : 'search',
                format : 'json',
                origin :'*',
                srsearch : term,
            },

        });

        setResults(data.query.search);
    }

    //prevent site for rendering delay 
    //from first search
    if(term && !results.length){
        search();
    }else{
        const timeoutId = setTimeout(() => {
            //if statement prevent from empty search
            if(term){
                search();
            } 
        }, 500)
    
        //this return statement called cleanup function
        //this clean the time out when user enter next value
    
    
        return () => {
            clearTimeout(timeoutId);
        }
    }

 
    
     
    }, [term]);

    const renderedResults = results.map(result => {
        return (
            <div key={result.pageid} className="item" >
            <div className="right floated content">
                <a
                 className="ui button"
                 href={`https://en.wikipedia.org?curid=${result.pageid}`} 
                 >Go</a>
            </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                        <span dangerouslySetInnerHTML={{__html : result.snippet}} ></span>   //this dangerouslySetInnerHTML for remove html from snippet
                        //it might ve dangerous sometime       
                </div>
            </div>
        );
        });

    return (
        <div className="ui segment" >
            <form className="ui form">
                <div className="ui field right pointing label">
                    <label > enter search</label>
                    <input
                    type="text"
                    className="input"
                    value={term}
                    onChange={e => {
                        setTerm(e.target.value);
                    }} />
                </div>
            </form>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
}

export default Search;