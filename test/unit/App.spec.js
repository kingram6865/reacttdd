import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import App from '../../src/App';

describe('App', () => {
  it('renders hello world', () => {
    render(<App />);
    // expect(screen.getByTestId('hello')).toHaveTextContent('Hello World')
    expect(screen.getByText('Hello World')).toBeTruthy()
  })
})
