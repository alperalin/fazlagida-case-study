import { render, screen } from '@testing-library/react';
import List from './List';

describe('List', () => {
  test('Renders List Component', () => {
    render(
      <List title="Test Listesi">
        <div>Test</div>
        <div>Test 2</div>
      </List>
    );

    // Tests the title
    expect(screen.getByText('Test Listesi')).toBeInTheDocument();

    // Tests children div that contains 'Test'
    expect(screen.getByText('Test')).toBeInTheDocument();

    // Tests children div that contains 'Test 2'
    expect(screen.getByText('Test 2')).toBeInTheDocument();
  });
});
