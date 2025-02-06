'use client';

import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { getWidth } from '@/app/lib/getWidth'; 
import { useCallback } from 'react';
import { Text } from '@/app/components/common';

const clinicLocation = {
  lat: 50.4501,
  lng: 30.5234,
};

const GoogleMapsComponent = () => {
    const height = getWidth("726px","603px","520px")
    const apiKey = process.env.GOOGLE_MAP_API_KEY;

    const handleMapClick = useCallback(() => {
        if (typeof window !== "undefined") {
            window.open('https://maps.app.goo.gl/YREvDJWfS7pqC5Xk6', '_blank');
        }
    }, []);

    return (
        <LoadScript googleMapsApiKey={apiKey || ""}>
        <GoogleMap
            mapContainerStyle={{
                width: '100%',
                height: height,
            }}
            center={clinicLocation}
            zoom={15}
            onClick={handleMapClick}
        >
            <Marker 
            position={clinicLocation} 
            />
            <InfoWindow position={clinicLocation} options={{headerDisabled:true}}>
                <div>
                    <Text className="text-sm">м. Київ, вул. Ростиславська 11б</Text>
                </div>
            </InfoWindow>
            
        </GoogleMap>
        </LoadScript>
    );
};

export default GoogleMapsComponent;
