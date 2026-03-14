import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app without crashing', () => {
render(<App />);
});

test('shows login on the page', () => {
  render(<App />);
  expect(screen.getByText(/login/i)).toBeInTheDocument();
});
