export const viewerModel = {
    name: 'viewer',
    state: {
        show: false,
        img: "",
        date: ""
    },
    reducers: {
        hideViewer(state) {
            return {
                show: false,
                img: "",
                date: ""
            };
        },
        showViewer(state, img, date) {
            return {
                show: true,
                img: img,
                date: date
            };
        },        
    }
}