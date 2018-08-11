const defaultState = {
    items: [],
    fetched: true
};

const playlists = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_PLAYLISTS":
            return setPlaylists(action.payload);
        default:
            return state;
    }
};

const setPlaylists = payload => ({
    items: payload,
    fetched: true
});

export default playlists;