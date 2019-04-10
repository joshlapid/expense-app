import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@init' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to date', () => {
    let state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    state = filtersReducer(undefined, { type: 'SORT_BY_DATE' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set text filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'Test Filter' });
    expect(state.text).toBe('Test Filter');
});

test('should set startDate filter', () => {
    const date = moment();
    const action = {
        type: 'SET_START_DATE',
        startDate: date
    }
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toBe(date);
});

test('should set endDate filter', () => {
    const date = moment();
    const action = {
        type: 'SET_END_DATE',
        endDate: date
    }
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toBe(date);
});