/* eslint-disable no-unused-expressions */
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Main from '../components/Main';

describe('Main', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Main />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the correct content', () => {
    render(<Main />);
    expect(screen.getByText('Online Tutors')).toBeInTheDocument;
    expect(screen.getByText('Paul D\'lingo')).toBeInTheDocument;
  });
});
