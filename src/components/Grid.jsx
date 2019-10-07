import React from 'react';
import GridButtons from '../components/GridButtons.jsx'

import DisplayConnector from '../connectors/DisplayConnector.jsx';

export default class Grid extends React.Component{

    render(){
        return (
            <div className="calcularGrid">
                <div className="displayHolder" key={0}>
                    <DisplayConnector></DisplayConnector>
                </div>
                    {
                        <GridButtons></GridButtons>
                    }
            </div>
        );
    }
}