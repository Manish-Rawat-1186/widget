//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./Route";
import Header from "./components/header";


const items = [
    {
        title : "what is react ?",
        content : "react is js framwork language."
    },
    {
        title : "why use react ?",
        content : "react is favourite js library among engineers,"
    },
    {
        title : "how do you use react ? ",
        content : "you use react by creating components "
    }
] 


const options = [
    {
        label : 'the colour red', 
        value : 'red'
    },
    {
        label : 'the colour green',
        value : 'green'
    },
    {
        label : 'the colour blue',
        value : 'blue'
    }
]

export default  () => {

    const [selected, setSelected] = useState(options[0]);
    // const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            <Header />
            {/* <button onClick={() => {
                setShowDropdown(!showDropdown);
            }} > show troggle</button>
            {
                showDropdown ? 
                <Dropdown
             selected = {selected}
             onChangeSelection = {setSelected}
             //here we do our state randerning 
             //this onChangeSelection wil go in app.js
            //  as props then it get the value through props
            //  and then return back to this state and update 
            //  the state and then take back to the app.js 
             options= {options} /> : 
             null
            } */}
            
            <Route path='/' >
                <Accordion items={items} />
            </Route>
            <Route path='/dropdown'>
                <Dropdown 
                options={options}
                label='select a colour'
                selected={selected}
                onChangeSelection={setSelected}
                />
            </Route>
            <Route path='/translate' >
                <Translate />
            </Route>
            <Route path='/lists' >
                <Search />
            </Route>

        
        </div>
    );
}