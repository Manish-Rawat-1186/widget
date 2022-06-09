import React, {useState} from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
    {
        label : 'afrikaans',
        value : 'af'
    },
    {
        label : 'Arabic',
        value : 'ar'
    },
    {
        label : 'Hindi',
        value : 'hi'
    },
    {
        label : 'Japanese',
        value : 'ja'
    }
]

const Translate = () => {

    const [language , setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return(

        <div>
        <div className="ui segment">
        <div className="ui form">
            <div className="ui field right pointing label" >
                <input
                value={text}
                onChange={e => {
                    setText(e.target.value);
                }} />
            </div>
        </div>
        </div>
            <Dropdown
            label='select a language'
            options={options}
            onChangeSelection = {setLanguage}
            selected = {language}
            />
            <hr/>
            <h1 className="header" >
                Output
            </h1>
            <Convert 
            text={text}
            language={language}
            />

        </div>
    )
}

export default Translate;