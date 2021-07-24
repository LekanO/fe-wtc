import React from 'react';
import { render } from '@testing-library/react';

import MovieList  from '.';

describe('Movies Count', () => {
  it('should render Count Movies', () => {
    const { container } = render(<MovieList />);
    expect(container).toMatchInlineSnapshot(`
      <div>

      </div>
    `);
  });
});
