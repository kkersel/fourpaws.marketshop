import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import React from "react";
import L, {map} from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25,41],
    iconAnchor: [12,41],
    popupAnchor:  [0, -50],
});

L.Marker.prototype.options.icon = DefaultIcon;

export const MapLeaflet = () => {
    return (
        <div className="two">
            <MapContainer
                center={{lat: 55.854328, lng: 37.4763947}}
                zoom={14}
                scrollWheelZoom={false}
                style={{ height: '100vh', width: '100wh' }}>
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                    position={{lat: 55.854328, lng: 37.4763947}}>
                    <Popup>
                        Самовывоз отсюда!
                    </Popup>
                </Marker>
                <Marker
                    position={{lat: 55.864486, lng: 37.510505}}>
                    <Popup
                    autoPanPadding={{}}
                    >
                        Самовывоз отсюда!!
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default MapLeaflet;