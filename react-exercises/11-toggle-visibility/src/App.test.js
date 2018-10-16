import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import { expect } from 'chai';
import Togglevisibility from '../src/App';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const wrapper = shallow(<Togglevisibility />);
describe('HelloWorld Component', () => {
  it('should render text indicating Now You see me!', () => {
    console.log(wrapper.debug());
    expect(wrapper.find('h1').text()).to.equal('Now you see me!');
  });
  it('clicking on the button should hide the text', () => {
    const button = wrapper.find('button');
    button.simulate('click');
    expect(wrapper.find('h1')).to.have.length(0);
  });
});
