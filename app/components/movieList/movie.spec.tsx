import React from 'react';
import { render } from '@testing-library/react';

import MovieList  from '.';

describe('Movie', () => {
  it('should render Movie List', () => {
    const { container } = render(<MovieList />);
    expect(container).toMatchInlineSnapshot(`
      <div>

      </div>
    `);
  });
});
