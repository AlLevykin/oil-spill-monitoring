import { useState, useRef, useCallback } from 'react';
import { useSelector } from 'react-redux';
import DeckGL from '@deck.gl/react';
import { MapboxLayer } from '@deck.gl/mapbox';
import { IconLayer, TextLayer, ArcLayer } from '@deck.gl/layers';
import ReactMapGL, { _MapContext as MapContext, NavigationControl } from 'react-map-gl';
import { distanceEarth, rounded } from './mapUtils';

const ICON_MAPPING = {
    marker: { x: 0, y: 0, width: 128, height: 128, mask: true }
};

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
    const items = useSelector(state => state.spills);
    const current = useSelector(state => state.currentSpill);
    const transport = useSelector(state => state.transport);

    const onMapLoad = useCallback(() => {
        const map = mapRef.current.getMap();
        const deck = deckRef.current.deck;

        map.addLayer(
            new MapboxLayer({ id: "my-scatterplot", deck }),
        );
    }, []);

    const transportLayer = () => {
        const s = items[current]
        let data = [];

        if (transport.suv) {
            data.push({
                lng: 72.837281,
                lat: 60.758176,
                text: "Наземный транспорт",
                tooltip: `Расстояние = ${rounded(distanceEarth([72.837281, 60.758176], [s.lng, s.lat]))} км.`
            })
        }

        if (transport.drone) {
            data.push({
                lng: 72.616331,
                lat: 61.088212,
                text: "БПЛА",
                tooltip: `Расстояние = ${rounded(distanceEarth([72.616331, 61.088212], [s.lng, s.lat]))} км.`
            })
        }

        if (transport.helicopter) {
            data.push({
                lng: 73.396230,
                lat: 61.254035,
                text: "Вертолёт",
                tooltip: `Расстояние = ${rounded(distanceEarth([73.396230, 61.254035], [s.lng, s.lat]))} км.`
            })
        }

        return [new IconLayer({
            id: 'transport',
            data,
            pickable: true,
            iconAtlas: 'api/icon-atlas.png',
            iconMapping: ICON_MAPPING,
            getIcon: d => 'marker',
            sizeScale: 15,
            getPosition: d => [d.lng, d.lat],
            getSize: 3,
            getColor: [15, 110, 255],
        }),
        new TextLayer({
            id: 'transport-name',
            data,
            getPosition: d => [d.lng, d.lat],
            getText: d => d.text,
            getPixelOffset: [10, 10],
            getSize: 18,
            getAngle: 0,
            getTextAnchor: 'start',
            getAlignmentBaseline: 'top',
            characterSet: 'auto'
        }),
        new ArcLayer({
            id: 'arc-layer',
            data,
            pickable: true,
            getWidth: 6,
            getSourcePosition: d => [d.lng, d.lat],
            getTargetPosition: d => [s.lng, s.lat],
            getSourceColor: d => [255, 0, 0],
            getTargetColor: d => [0, 0, 255]
        })
        ]
    }

    const spillLayer = () => {

        const data = items.length === 0 ? [] : [items[current]]

        return [new IconLayer({
            id: 'spill-marker',
            data,
            pickable: true,
            iconAtlas: 'api/icon-atlas.png',
            iconMapping: ICON_MAPPING,
            getIcon: d => 'marker',
            sizeScale: 15,
            getPosition: d => [d.lng, d.lat],
            getSize: 3,
            getColor: [255, 0, 0],
        }),
        new TextLayer({
            id: 'spill-name',
            data,
            getPosition: d => [d.lng, d.lat],
            getText: d => (d.licenseName + " (" + d.licenseId + ")"),
            getPixelOffset: [10, 10],
            getSize: 18,
            getAngle: 0,
            getTextAnchor: 'start',
            getAlignmentBaseline: 'top',
            characterSet: 'auto'
        })
        ]
    }

    const layers = [...spillLayer(), ...transportLayer()];

    return (
        <div className="position-relative vh-100 w-100">
            <DeckGL
                ref={deckRef}
                initialViewState={currentState}
                controller={true}
                onWebGLInitialized={setGLContext}
                layers={layers}
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