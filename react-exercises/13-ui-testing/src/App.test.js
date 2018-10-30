/**
 *@see https://airbnb.io/enzyme/docs/api/
 *@see https://github.com/airbnb/enzyme
 * Complete the following tests down below.
 *
 *
 */
import ReactDOM from 'react-dom';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import App from './App';

const wrapper = shallow(<App />);
describe('Links Page', () => {
  it.only('renders a welcome message', () => {
    console.log(wrapper.debug());
  });
  it('it renders two buttons on the screen', () => {});
  it('clicking on hide button hides the text from the viewer', () => {});
  it('clicking the hide button twice unhides the button', () => {});
  it('clicking on add button adds a link', () => {});
});
