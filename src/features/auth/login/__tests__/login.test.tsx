import { render, screen } from '@testing-library/react';

import Login from '../Login';

it('renders without crashing', () => {
  render(<Login />);
  expect(screen.getByText('Login')).toBeInTheDocument();
});
