import React from 'react';
import { render, screen } from '@testing-library/react';
import * as promiseTracker from 'react-promise-tracker';

import { SpinnerComponent } from './spinner.component';

jest.mock('react-promise-tracker', () => ({
  __esModule: true,
  ...jest.requireActual('react-promise-tracker'),
}));

describe('Spinner component specs', () => {
  it('shouldnt show Loader component when promiseInProgress equals false', () => {
    // Arrange
    const stub = jest
      .spyOn(promiseTracker, 'usePromiseTracker')
      .mockReturnValue({ promiseInProgress: false });
    // Act
    render(<SpinnerComponent />);
    const loader = screen.queryByRole('presentation');
    // Assert
    expect(stub).toHaveBeenCalled();
    expect(loader).not.toBeInTheDocument();
  });

  it('should show Loader component when promiseInProgress equals true', () => {
    // Arrange
    const stub = jest
      .spyOn(promiseTracker, 'usePromiseTracker')
      .mockReturnValue({ promiseInProgress: true });
    // Act
    render(<SpinnerComponent />);
    const loader = screen.getByRole('presentation');
    // Assert
    expect(stub).toHaveBeenCalled();
    expect(loader).toBeInTheDocument();
  });
});
