import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import { userEvent } from '@testing-library/user-event';

describe('ConfirmationDialog specs', () => {
  it('shouldnt be visible when isOpen equals false', () => {
    // Arrange
    const props = {
      isOpen: false,
      onAccept: () => {},
      onClose: () => {},
      title: 'Title',
      labels: {
        closeButton: '',
        acceptButton: '',
      },
      children: <h1>Hello from Dialog</h1>,
    };
    // Act
    render(<ConfirmationDialogComponent {...props} />);
    const dialog = screen.queryByRole('dialog');
    // Assert
    expect(dialog).not.toBeInTheDocument();
  });

  it('should be visible when isOpen equals true', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: () => {},
      onClose: () => {},
      title: 'Title',
      labels: {
        closeButton: '',
        acceptButton: '',
      },
      children: <h1>Hello from Dialog</h1>,
    };
    // Act
    render(<ConfirmationDialogComponent {...props} />);
    const dialog = screen.getByRole('dialog');
    // Assert
    expect(dialog).toBeInTheDocument();
  });

  it('should show title, button labels and children when isOpen equals true', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: () => {},
      onClose: () => {},
      title: 'Title',
      labels: {
        closeButton: 'Cancel',
        acceptButton: 'Accept',
      },
      children: <h1>Hello from Dialog</h1>,
    };
    // Act
    render(<ConfirmationDialogComponent {...props} />);
    const title = screen.getByText('Title');
    const children = screen.getByRole('heading', {
      level: 1,
      name: 'Hello from Dialog',
    });
    const labelClose = screen.getByRole('button', { name: 'Cancel' });
    const labelOpen = screen.getByRole('button', { name: 'Accept' });
    // Assert
    expect(title).toBeInTheDocument();
    expect(children).toBeInTheDocument();
    expect(labelClose).toBeInTheDocument();
    expect(labelOpen).toBeInTheDocument();
  });

  it('should close Dialog after click on Accept button', async () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Title',
      labels: {
        closeButton: 'Cancel',
        acceptButton: 'Accept',
      },
      children: <h1>Hello from Dialog</h1>,
    };
    // Act
    render(<ConfirmationDialogComponent {...props} />);
    const dialog = screen.getByRole('dialog');
    const buttonAccept = screen.getByRole('button', { name: 'Accept' });
    await userEvent.click(buttonAccept);
    // Assert
    expect(props.onAccept).toHaveBeenCalled();
    expect(props.onClose).toHaveBeenCalled();
    waitFor(() => {
      expect(dialog).not.toBeInTheDocument();
    });
  });

  it('should close Dialog after click on Cancel button', async () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Title',
      labels: {
        closeButton: 'Cancel',
        acceptButton: 'Accept',
      },
      children: <h1>Hello from Dialog</h1>,
    };
    // Act
    render(<ConfirmationDialogComponent {...props} />);
    const dialog = screen.getByRole('dialog');
    const buttonCancel = screen.getByRole('button', { name: 'Cancel' });
    await userEvent.click(buttonCancel);
    // Assert
    expect(props.onClose).toHaveBeenCalled();
    expect(props.onAccept).not.toHaveBeenCalled();
    waitFor(() => {
      expect(dialog).not.toBeInTheDocument();
    });
  });
});
