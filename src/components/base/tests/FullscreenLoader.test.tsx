import React from 'react';
import FullscreenLoader from 'components/base/FullscreenLoader';
import { render } from 'lib/testUtils';

describe('<FullscreenLoader />', () => {
  const renderFunc = () => {
    const utils = render(<FullscreenLoader />);
    return { ...utils };
  };

  it('matches snapshot', () => {
    const utils = renderFunc();
    expect(utils.container).toMatchSnapshot();
  });

  it('should render logo icon', () => {
    const { getByAltText } = renderFunc();
    const logoImg = getByAltText('logo');

    expect(logoImg).toBeTruthy();
  });

  it('should render loading spinner', () => {
    // TODO: Spinner render testing
  });
});
