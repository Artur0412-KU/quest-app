"use client"
import React from 'react';
import {MapContainer, Marker, TileLayer, Popup} from "react-leaflet";
import tasks from "@/data/data";
import L from "leaflet";

const Map = () => {
    const defaultMarker = new L.icon({
        iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
        iconSize: [25, 41],
        iconAnchor: [13, 0]
    });

    return (
        <MapContainer center={[50.4501, 30.5234]} zoom={13} className='w-full h-1/2 p-[20px]' scrollWheelZoom={false}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {tasks.map(task => (
                <Marker key = {task.id} position={[task.lat, task.lng]} icon = {defaultMarker as L.icon}>
                    <Popup>
                        <h3 className='font-semibold text-[24px]'>{task.name}</h3>
                        <p className='text-[16px]'>{task.description}</p>
                        <button className="btn bg-orange-500 text-white px-4 py-2 rounded">Open tasks</button>
                    </Popup>
                </Marker>
            ))}

        </MapContainer>
    );
};

export default Map;