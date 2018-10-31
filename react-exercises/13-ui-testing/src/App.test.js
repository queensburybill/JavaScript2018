/**
 *@see https://airbnb.io/enzyme/docs/api/
 *@see https://github.com/airbnb/enzyme
 * Complete the following tests down below.
 *
 *
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import App from './App';

// const wrapperS = shallow(<App />);
// const wrapperM = mount(<App />);

describe('Links Page', () => {
  it('renders a welcome message', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h2').text()).to.equal('Welcome Links Center');
  });
  it('it renders two buttons on the screen', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('button')).to.have.lengthOf(2);
  });
  it('clicking on hide button hides the links from the viewer', () => {
    const wrapper = mount(<App />);
    const hideButton = wrapper.findWhere(n => n.text() === 'Hide Links');
    hideButton.simulate('click');
    expect(wrapper.find('li')).to.have.lengthOf(0);
  });
  it('clicking the hide button twice unhides the links', () => {
    const wrapper = mount(<App />);
    const hideButton = wrapper.findWhere(n => n.text() === 'Hide Links');
    hideButton.simulate('click');
    hideButton.simulate('click');
    expect(wrapper.find('li')).to.have.lengthOf(2);
  });
  it('clicking on add button adds a link', () => {
    const wrapper = mount(<App />);
    const inputs = wrapper.find('input');
    inputs.at(0).simulate('change', { target: { value: 'Google'} });
    inputs.at(1).simulate('change', { target: { value: 'https://www.google.com/'} });
    const submit = wrapper.find('form');
    submit.simulate('submit');
    expect(wrapper.find('li')).to.have.lengthOf(3);
  });
  it('clicking on add button renders text from userInput1', () => {
    const wrapper = mount(<App />);
    wrapper.setState({ userInput1: 'Google', userInput2: 'https://www.google.com/' });
    const addButton = wrapper.find('button').filterWhere(n => n.text() === 'Add a Link');
    const addButton2 = wrapper.findWhere(n => n.text() ==='Add a Link');
    console.log(addButton2.debug());
    addButton.simulate('submit');
    expect(wrapper.find('li').at(2).text()).to.equal('Google');
  });
});
