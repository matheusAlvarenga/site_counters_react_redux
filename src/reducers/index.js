const initialState = {
    counter: 0,
    counters: [0],
};

export default function rootReducer(state = initialState, action) {
    const counters = state.counters;

    switch (action.type) {
        case "INCREMENT":
            return { counter: state.counter + 1, counters: [0] };

        case "DECREMENT":
            return { counter: state.counter - 1, counters: [0] };

        case "INCREMENT_MULTI":
            counters[action.payload] = counters[action.payload] + 1;

            return { counter: 0, counters };

        case "DECREMENT_MULTI":
            counters[action.payload] = counters[action.payload] - 1;

            return { counter: 0, counters };

        case "NEW_COUNTER":
            counters.push(0);

            return { counter: 0, counters };

        case "DELETE_COUNTER":
            counters[action.payload] = undefined;

            return { counter: 0, counters };

        default:
            return state;
    }
}
