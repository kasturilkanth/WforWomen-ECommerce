import React from 'react';
import CardList from '../CardWrapper/CardList';
import "./Homepage.css";

function Homepage({filteredData}) {
    
    
    
    return (
        <div className='homepage'>
           <CardList filteredData={filteredData}/>
        </div>
    );
}

export default Homepage;