import { createStore } from 'redux';

// Action generators - functions that return action objects

// const add = (data) => {
//     return data.a + data.b;
// };

// const add = ({ a, b }, c) => {
//     return a + b + c;
// };

// console.log(add({a: 1, b: 12}, 100));

// // Refactored Below
// const incrementCount = (payload = {}) => ({
//     type: 'INCREMENT',
//     incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// });

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => {
    return ({
        type: 'DECREMENT',
        decrementBy: decrementBy
    })
}





const setCount = ({ count }) => ({
    type: 'SET',
    count: count
});

const resetCount = () => ({
    type: 'RESET',
    count: 0
});

// Reducer
// Reducers are pure functions
// Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// Action - Object that gets sent to store

// Increment count
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

// Reset
store.dispatch(resetCount());

// Decrement count
store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 50 }));

store.dispatch(setCount({ count: 11 }));

