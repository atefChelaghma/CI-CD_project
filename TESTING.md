# Testing Guide

This project uses **Jest** and **React Testing Library** for unit and integration testing.

## Running Tests

```bash
# Run all tests once
npm test

# Run tests in watch mode (re-runs on file changes)
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

## Test File Structure

Tests should be placed alongside the components they test with a `.test.tsx` or `.spec.tsx` extension.

Example:
```
src/
  App.tsx
  App.test.tsx
```

## Writing Tests

### Basic Test Example

```typescript
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
```

### Testing User Interactions

```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter', () => {
  it('increments on button click', () => {
    render(<Counter />);
    const button = screen.getByRole('button');
    
    fireEvent.click(button);
    
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });
});
```

## Available Matchers

Thanks to `@testing-library/jest-dom`, you have access to custom matchers:

- `toBeInTheDocument()`
- `toHaveTextContent()`
- `toHaveValue()`
- `toBeVisible()`
- `toBeDisabled()`
- And many more...

## Configuration Files

- **jest.config.ts** - Main Jest configuration
- **src/setupTests.ts** - Test environment setup (runs before each test file)
- **__mocks__/fileMock.js** - Mock for static assets (images, SVGs, etc.)

## Coverage Reports

After running `npm run test:coverage`, you'll find a detailed coverage report in the `coverage/` directory. Open `coverage/lcov-report/index.html` in your browser for a visual representation.

## Best Practices

1. **Test behavior, not implementation** - Focus on what the component does, not how it does it
2. **Use accessible queries** - Prefer `getByRole`, `getByLabelText`, etc. over `getByTestId`
3. **Keep tests isolated** - Each test should be independent
4. **Use descriptive test names** - Make it clear what behavior is being tested
5. **Don't test external libraries** - Trust that React, etc. work correctly

## Troubleshooting

### Module resolution errors
If you see TypeScript errors about imports, make sure `src/vite-env.d.ts` includes type declarations for your asset types.

### Tests timing out
Increase the timeout in your test:
```typescript
it('long running test', async () => {
  // test code
}, 10000); // 10 second timeout
```
