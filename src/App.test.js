import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { projects } from './data/projects';

describe('App basic navigation', () => {
  test('renders Home page by default', () => {
    render(<App />); // App already includes Router

    expect(screen.getByText(/Zheng/i)).toBeInTheDocument();
    expect(screen.getByText(/Yang/i)).toBeInTheDocument();
  });

  test('navigates to Projects page when clicking Projects link', async () => {
    render(<App />);

    const projectsLink = screen.getByRole('link', { name: /Projects/i });
    await userEvent.click(projectsLink);
  });

  test('navigates back to Home page when clicking Home link', async () => {
    render(<App />);

    const projectsLink = screen.getByRole('link', { name: /Projects/i });
    await userEvent.click(projectsLink);

    const homeLink = screen.getByRole('link', { name: /Home/i });
    await userEvent.click(homeLink);

    expect(screen.getByText(/Zheng/i)).toBeInTheDocument();
    expect(screen.getByText(/Yang/i)).toBeInTheDocument();
  });
});
