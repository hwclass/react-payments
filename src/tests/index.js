import React from 'react';
import { shallow, mount } from 'enzyme';
import Payments, {Name, Surname, CardNumber, Expiration, CVC, PurchaseButton} from '../index';
import { expect } from 'chai';
import sinon from 'sinon';
const { describe, it } = global;

describe('Name', () => {
  it('should render a <Name/> component', () => {
    const wrapper = shallow(<div><Name/></div>);
    expect(wrapper.find(Name)).to.have.length(1);
  });
});

describe('Surname', () => {
  it('should render a <Surname/> component', () => {
    const wrapper = shallow(<div><Surname/></div>);
    expect(wrapper.find(Surname)).to.have.length(1);
  });
});

describe('CardNumber', () => {
  it('should render a <CardNumber/> component', () => {
    const wrapper = shallow(<div><CardNumber/></div>);
    expect(wrapper.find(CardNumber)).to.have.length(1);
  });
});

describe('Expiration', () => {
  it('should render a <Expiration/> component', () => {
    const wrapper = shallow(<div><Expiration/></div>);
    expect(wrapper.find(Expiration)).to.have.length(1);
  });
});

describe('CVC', () => {
  it('should render a <CVC/> component', () => {
    const wrapper = shallow(<div><CVC/></div>);
    expect(wrapper.find(CVC)).to.have.length(1);
  });
});

describe('PurchaseButton', () => {
  it('should show the given text', () => {
    const text = 'Purchase';
    const wrapper = shallow(<PurchaseButton>{text}</PurchaseButton>);
    expect(wrapper.text()).to.be.equal(text);
  });
  it('PurchaseButton component should handle the click event', () => {
    const clickMe = sinon.stub();
    const wrapper = mount(
      <div>
        <PurchaseButton onClick={ clickMe }>ClickMe</PurchaseButton>
      </div>
    );
    wrapper.find('button').simulate('click');
    expect(clickMe.callCount).to.be.equal(1);
  });
});
