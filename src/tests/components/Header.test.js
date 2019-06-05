import React from 'react';
// Shallow - only renders given component
import { shallow } from 'enzyme';
import { Header } from '../../components/Header.js';

test('should render Header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => {}} />);
    expect(wrapper).toMatchSnapshot();

    // expect(wrapper.find('h1').text()).toBe('Expense App');
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout} />);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});