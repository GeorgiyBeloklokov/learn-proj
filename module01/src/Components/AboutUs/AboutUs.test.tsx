import { render, screen } from '@testing-library/react';
import AboutUs from './AboutUs';

test('renders component', () => {
  render(<AboutUs />);
  const component = screen.getByTestId('about-us-test');
  expect(component).toBeDefined();
});
