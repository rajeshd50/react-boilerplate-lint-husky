import { render, screen } from '@testing-library/react';

import Dashboard from '../Dashboard';

it('renders without crashing', () => {
  render(<Dashboard />);
  expect(screen.getByText('Dashboard')).toBeInTheDocument();
});
