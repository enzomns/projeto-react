import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders app without crashing', () => {
render(<App />);
});

test('shows login on the page', () => {
  render(<App />);
  expect(screen.getByText(/login/i)).toBeInTheDocument();
});

test('tests wrong input from user', () => {
  render(<App />);

   fireEvent.change(screen.getByPlaceholderText(/e-mail/i), {
    target: { value: 'blahblah@gmail.com' },
  });

  fireEvent.change(screen.getByPlaceholderText(/senha/i), {
    target: { value: '654321' },
  });

  fireEvent.click(screen.getByRole('button', { name: /acessar/i }));

  expect(screen.getByText(/e-mail ou senha incorretos/i)).toBeInTheDocument();
});

test('tests correct input from user', () => {
  render(<App />);

   fireEvent.change(screen.getByPlaceholderText(/e-mail/i), {
    target: { value: 'eduardo.lino@pucpr.br' },
  });

  fireEvent.change(screen.getByPlaceholderText(/senha/i), {
    target: { value: '123456' },
  });

  fireEvent.click(screen.getByRole('button', { name: /acessar/i }));

  expect(screen.getByText(/acessado com sucesso/i)).toBeInTheDocument();
});
