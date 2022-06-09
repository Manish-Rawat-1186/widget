import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({label, options, selected , onChangeSelection}) => {

    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const bodyClickEvent = (event) => {
            if (ref.current.contains(event.target)) {
                return;
            }
            //early return karne par jab hum color vale div
            //par again click karege toh open ki value false 
            //ho jayegi mean open false true and false
            //but early return nahi karne par vo value false 
            //ho ja ri h jab ki vo div par dobara click kar rha h
            //but vo event handler pure body par h isliye 
            //we use ref and then if to prevent them
            //yeah.. good explaination
            setOpen(false);
        };

        //seedha eventlistner use karne par ref.current .contains ki value null ho ja rhi h
        //thats why we use diffrent event listners


        document.body.addEventListener('click', bodyClickEvent , {capture: true});

        return () => {
            document.body.removeEventListener('click', bodyClickEvent, {capture: true});
        };

    }, [])
    //[] empty array help useEffect to run only one time .

 

    const renderedOptions = options.map((option) => {

        //prevent selected option to again selection
        if(option.value===selected.value){
            return null;
        }

        return (
            <div 
            className="item"
             key={option.value}
             onClick={() => {
                 onChangeSelection(option)
             }} >
                {option.label}
            </div>
        )
    })

    return (
       <div ref={ref} className="ui form"  >
           <div className="field" >
               <label className="label" >{label}</label>
                <div 
                    onClick={() => {
                        setOpen(!open)
                    }}
                    className= {`ui selection dropdown ${ open ? 'visible active' : ''}`} >
                    <i className="dropdown icon" ></i>
                    <div className="text" >
                        {selected.label}
                    </div>
                    <div className={`menu ${ open ? 'visible transition' : ''}`}  >
                        {renderedOptions}
                    </div>
                </div>
           </div>
       </div>
    );
}

export default Dropdown;