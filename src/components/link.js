//we create this component to prevent our app 
//reloading again when it goes another url

import React from "react";

const Link = ({href, className, children}) => {
    const onClick = (event) => {

        if (event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault();
        //this is change the url
        window.history.pushState({}, '', href);

        //this is for navigation of component
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return (
    
           <a onClick={onClick} href={href} className={className}>
               {children}
           </a>
       
    );
};

export default Link;