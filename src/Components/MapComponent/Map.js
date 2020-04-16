import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import * as input from '../../InputData.json'
import * as testCenters from '../../TestingCenterData.json'

class CustomMap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            SetPopup: null
        }
    }
    render() {

        const popupLoader = props =>{
            if(this.props.isDefaultMap === 'Affected areas'){
                return <div>
                    {input.features.map(data => (
                    <Marker key={data.properties.District_Code} position={[
                        data.geometry.coordinates[0],
                        data.geometry.coordinates[1]
                    ]} OnClick={() => this.setState({ SetPopup: data })} />
                ))}
                    {this.state.SetPopup && this.state.SetPopup !== 'undefined' && (<Popup position={[
                    this.state.SetPopup.geometry.coordinates[0],
                    this.state.SetPopup.geometry.coordinates[1]
                ]} onClose={() => this.setState({ SetPopup: null })}>
                    <h4>{this.state.SetPopup.properties.NAME}</h4>
                    <h4>Total Count - {this.state.SetPopup.properties.TotalCount}</h4>
                    <h4>Active Count - {this.state.SetPopup.properties.ActiveCount}</h4>
                    <h4>Recovered - {this.state.SetPopup.properties.Recovered}</h4>
                    <h4>Deceased - {this.state.SetPopup.properties.Deceased}</h4>
                </Popup>)}
                </div> 
            }
            else{
                return <div>
                    {testCenters.features.map(data => (
                    <Marker key={data.properties.District_Code} position={[
                        data.geometry.coordinates[0],
                        data.geometry.coordinates[1]
                    ]} OnClick={() => this.setState({ SetPopup: data })} />
                ))}
                    {this.state.SetPopup && this.state.SetPopup !== 'undefined' && (<Popup position={[
                    this.state.SetPopup.geometry.coordinates[0],
                    this.state.SetPopup.geometry.coordinates[1]
                ]} onClose={() => this.setState({ SetPopup: null })}>
                    <h4>{this.state.SetPopup.properties.NAME}</h4>
                </Popup>)}
                </div> 
            }

        }
        return (
            <Map center={[11.127123, 78.656891]} zoom={6}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {popupLoader()}
            </Map>

        );
    }
}

export default CustomMap;