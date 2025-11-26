import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders Vite + React heading', () => {
    render(<App />);
    const headingElement = screen.getByText(/Vite \+ React/i);
    expect(headingElement).toBeInTheDocument();
  });

  it('renders initial count as 0', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button', { name: /count is 0/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('increments count when button is clicked', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button', { name: /count is 0/i });

    fireEvent.click(buttonElement);
    expect(
      screen.getByRole('button', { name: /count is 1/i }),
    ).toBeInTheDocument();

    fireEvent.click(buttonElement);
    expect(
      screen.getByRole('button', { name: /count is 2/i }),
    ).toBeInTheDocument();
  });

  it('renders Vite and React logos', () => {
    render(<App />);
    const viteLogoLink = screen.getByRole('link', { name: /Vite logo/i });
    const reactLogoLink = screen.getByRole('link', { name: /React logo/i });

    expect(viteLogoLink).toBeInTheDocument();
    expect(reactLogoLink).toBeInTheDocument();
  });
});
