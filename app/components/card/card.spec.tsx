import React from 'react';
import { render } from '@testing-library/react';

import { Card } from '.';

describe('Card', () => {
  it('should render Card', () => {
    const { container } = render(<Card movie />);
    expect(container).toMatchInlineSnapshot(`
      <div>
      </div>
    `);
  });
});
