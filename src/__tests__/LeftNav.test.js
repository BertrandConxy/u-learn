/* eslint-disable no-unused-expressions */
import { render, screen } from '@testing-library/react';
import LeftNav from '../components/LeftNav';

describe('LeftNav', () => {
  it('renders the correct content', () => {
    render(<LeftNav mobileOpen handleDrawerToggle />);
    expect(screen.getAllByText('My Lessons')).toBeInTheDocument;
    expect(screen.getAllByText('Tutors')).toBeInTheDocument;
  });
});
