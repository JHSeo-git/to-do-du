import React from 'react';
import Header from 'components/base/Header';
import { renderWithRouter } from 'lib/testUtils';

describe('<Header />', () => {
  const renderFunc = () => {
    const utils = renderWithRouter(<Header />);
    return { ...utils };
  };

  it('matches snapshot', () => {
    const utils = renderFunc();
    expect(utils.container).toMatchSnapshot();
  });
});
