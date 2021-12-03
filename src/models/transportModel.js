export const transportModel = {
    name: 'transport',
    state: {
        drone: false,
        helicopter: false,
        suv: false
    },
    reducers: {     
        setDrone(state, d) {
            return {...state, drone: d};
        },
        setHelicopter(state, h) {
            return {...state, helicopter: h};
        },
        setSuv(state, s) {
            return {...state, suv: s};
        },                
    }
}