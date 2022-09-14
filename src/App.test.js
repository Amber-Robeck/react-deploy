import { render, screen } from '@testing-library/react';
import App from './App';

test('renders p tag', () => {
  render(<App />);
  const pElement = screen.getByText(/code cleanup/i);
  expect(pElement).toBeInTheDocument();
});
