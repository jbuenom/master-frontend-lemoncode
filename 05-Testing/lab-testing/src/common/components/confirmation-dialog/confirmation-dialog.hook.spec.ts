import { act, renderHook } from '@testing-library/react';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { Lookup } from 'common/models';

describe('ConfirmationDialog hook specs', () => {
  it('should return isOpen, itemToDelete, onAccept, onClose and onOpenDialog', () => {
    // Arrange
    const emptyItemToDelete = {
      id: '',
      name: '',
    };
    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    // Assert
    expect(result.current.isOpen).toEqual(false);
    expect(result.current.itemToDelete).toEqual(emptyItemToDelete);
    expect(result.current.onAccept).toEqual(expect.any(Function));
    expect(result.current.onClose).toEqual(expect.any(Function));
    expect(result.current.onOpenDialog).toEqual(expect.any(Function));
  });

  it("should set itemToDelete equals {id: '', name: ''} after call onAccept", async () => {
    // Arrange
    const emptyItemToDelete = {
      id: '',
      name: '',
    };
    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    // Assert
    act(() => {
      result.current.onAccept();
    });
    expect(result.current.itemToDelete).toEqual(emptyItemToDelete);
  });
  
  it('should set isOpen equals false after call onClose', () => {
    // Arrange
    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onClose();
    });
    // Assert
    expect(result.current.isOpen).toEqual(false);
  });

  it('should set isOpen equals true and set itemToDelete with item provided after call onOpenDialog', () => {
    // Arrange
    const item: Lookup = { id: '1', name: 'Test' };
    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onOpenDialog(item);
    });
    // Assert
    expect(result.current.isOpen).toEqual(true);
    expect(result.current.itemToDelete).toEqual(item);
  });
});
