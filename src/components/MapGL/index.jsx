import { useState, useRef, useCallback } from 'react';
import { useSelector } from 'react-redux';
import DeckGL from '@deck.gl/react';
import { MapboxLayer } from '@deck.gl/mapbox';
import ReactMapGL, { _MapContext as MapContext, NavigationControl } from 'react-map-gl';

const navControlStyle = {
    right: 10,
    top: 10
  };
  
  const LONGITUDE_RANGE = [20, 159];
  const LATITUDE_RANGE = [43, 81];
  const ZOOM_RANGE = [8, 30];

const MapGL = () => {

    const [glContext, setGLContext] = useState();
    const deckRef = useRef(null);
    const mapRef = useRef(null);
    const currentState = useSelector(state => state.map.currentState);

    const onMapLoad = useCallback(() => {
        const map = mapRef.current.getMap();
        const deck = deckRef.current.deck;
    
        map.addLayer(
          new MapboxLayer({ id: "my-scatterplot", deck }),
        );
      }, []);    

    return (
        <div className="position-relative vh-100 w-100">
            <DeckGL
                ref={deckRef}
                initialViewState={currentState}
                controller={true}
                onWebGLInitialized={setGLContext}
                //layers={layers}
                glOptions={{
                    stencil: true
                }}
                ContextProvider={MapContext.Provider}
                getTooltip={({ object }) => object && object.tooltip}
                onViewStateChange={({ viewState }) => {
                    viewState.zoom = Math.min(ZOOM_RANGE[1], Math.max(ZOOM_RANGE[0], viewState.zoom));
                    viewState.longitude = Math.min(LONGITUDE_RANGE[1], Math.max(LONGITUDE_RANGE[0], viewState.longitude));
                    viewState.latitude = Math.min(LATITUDE_RANGE[1], Math.max(LATITUDE_RANGE[0], viewState.latitude));
                    return viewState;
                }}
                getCursor={({ isDragging }) => isDragging ? 'grabbing' : 'default'}
            >
                {glContext && (
                    <ReactMapGL
                        ref={mapRef}
                        gl={glContext}
                        mapStyle={process.env.REACT_APP_MAP_STYLE}
                        onLoad={onMapLoad}
                    />
                )}
                <NavigationControl style={navControlStyle} />
            </DeckGL>
        </div>
    )
}

export default MapGL