import renderer from 'react-test-renderer';
import TopBar from '../components/TopBar';

describe('TopNav', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<TopBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
