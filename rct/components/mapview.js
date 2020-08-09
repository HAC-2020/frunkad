import {
  AzureMap,
  AzureMapsProvider,
  AzureMapDataSourceProvider,
  AzureMapLayerProvider,
  AzureMapFeature
} from "react-azure-maps";
import {
  AuthenticationType,
  data,
  HtmlMarkerOptions,
} from "azure-maps-control";
import React, { memo, useMemo, useState } from 'react'

const option = {
  authOptions: {
    authType: AuthenticationType.subscriptionKey,
    subscriptionKey: "n7kZLo6KcA-vZM5ahBbjCK1kFomrzoZWjHqVNqi28ds", // Your subscription key
  },
  center: [-100.01, 45.01],
  zoom: 2,
  view: "Auto",
};

const point1 = new data.Position(-100.01, 45.01);
const memoizedOptions = {
    textOptions: {
      textField: ['get', 'title'], //Specify the property name that contains the text you want to appear with the symbol.
      offset: [0, 1.2],
    }
  }
  const renderPoint = (coordinates) => {
    const rendId = Math.random()
  
    return (
      <AzureMapFeature
        key={rendId}
        id={rendId.toString()}
        type="Point"
        coordinate={coordinates}
        properties={{
          title: 'Pin',
          icon: 'pin-round-blue'
        }}
      />
    );
  }
  
const DefaultMap = () => {
    const [markers, setMarkers] = useState([point1])
    const [markersLayer, setMarkersLayer] = useState(
        'SymbolLayer'
      )
      const [layerOptions, setLayerOptions] = useState(memoizedOptions)
      const memoizedMarkerRender = useMemo(
        () => markers.map(marker => renderPoint(marker)),
        [markers]
      )
  return (
    <div style={{ height: "200px" }}>
      <AzureMapsProvider>
        <AzureMap options={option}>
          <AzureMapDataSourceProvider 
              id={'markersExample AzureMapDataSourceProvider'}>
            <AzureMapLayerProvider 
                id={'markersExample AzureMapLayerProvider'}
                options={layerOptions}
                type={markersLayer}

                ></AzureMapLayerProvider>
                              {memoizedMarkerRender}

          </AzureMapDataSourceProvider>
        </AzureMap>
      </AzureMapsProvider>
    </div>
  );
};

export default DefaultMap;
