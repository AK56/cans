import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { Page } from './components/Layout';
import Header from './components/Header/';
import { PageHeader } from 'react-wood-duck';

describe('<App />', () => {
  const getWrapper = () => shallow(<App />);
  const getLength = component => getWrapper().find(component).length;

  it('renders with <Header /> component', () => {
    expect(getLength(Header)).toBe(1);
  });

  it('renders with <PageHeader /> component', () => {
    expect(getLength(PageHeader)).toBe(1);
  });

  it('renders with <Page /> component', () => {
    expect(getLength(Page)).toBe(1);
  });
});
