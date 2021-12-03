import { getData } from './utils';

export const spillsModel = {
    name: 'spills',
    state: [],
    reducers: {
        updateItems(state, items) {
            return items;
        },
    },
    effects: {
        async getSpills() {
            const host = window.location.origin;
            await getData(`${host}/api/monitoring.json`).then(items =>
                this.updateItems(items)
            );
        }
    }
}