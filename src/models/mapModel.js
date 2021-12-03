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
        goToPoint(state, coordinates) {
            return {
                ...state, currentState: {
                    minZoom: 9.5,
                    longitude: coordinates[0],
                    latitude: coordinates[1],
                    pitch: 60,
                    zoom: 12,
                    bearing: 0
                }
            };
        }
    }
}