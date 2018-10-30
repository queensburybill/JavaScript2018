/**
 *@see https://airbnb.io/enzyme/docs/api/
 *@see https://github.com/airbnb/enzyme
 * Complete the following tests down below.
 *
 *
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import App from './App';

const wrapper = shallow(<App />);
describe('Links Page', () => {
  it.only('renders a welcome message', () => {
    console.log(wrapper.debug());
  });
  it('it renders two buttons on the screen', () => {});
  it('clicking on hide button hides the links from the viewer', () => {});
  it('clicking the hide button twice unhides the links', () => {});
  it('clicking on add button adds a link', () => {});
});
