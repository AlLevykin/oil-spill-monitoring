export const mapModel = {
    name: 'map',
    state: {
        currentState: {
            minZoom: 9.5,
            longitude: 73.396230,
            latitude: 61.254035,
            pitch: 60,
            zoom: 10,
            bearing: 0
        }
    },
    reducers: {     
        goToPoint(state, lng, lat) {
            return {
                ...state, currentState: {
                    minZoom: 9.5,
                    longitude: lng,
                    latitude: lat,
                    pitch: 60,
                    zoom: 11,
                    bearing: 0
                }
            };
        }
    }
}