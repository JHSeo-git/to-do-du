import React from 'react';
import FullscreenLoader from 'components/base/FullscreenLoader';
import { render } from 'lib/testUtils';

describe('<FullscreenLoader />', () => {
  it('views logo icon, loading spinner', () => {
    const utils = render(<FullscreenLoader />);
    const { getByAltText } = utils;
    const logoImg = getByAltText('logo');

    expect(logoImg).toBeTruthy();
  });
});
