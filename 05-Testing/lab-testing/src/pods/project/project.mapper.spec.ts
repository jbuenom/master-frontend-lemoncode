import * as apiModel from './api/project.api-model';
import { mapProjectFromApiToVm } from './project.mapper';
import * as viewModel from './project.vm';

describe('Project mapper specs', () => {
  it('should return empty project when it feeds project undefined', () => {
    // Arrange
    const project: apiModel.Project = undefined;
    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);
    // Assert
    expect(result).toEqual(viewModel.createEmptyProject());
  });

  it('should return empty project when it feeds project null', () => {
    // Arrange
    const project: apiModel.Project = null;
    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);
    // Assert
    expect(result).toEqual(viewModel.createEmptyProject());
  });

  it('should return empty project when it feeds employees undefined', () => {
    // Arrange
    const project: apiModel.Project = {
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: undefined,
    };
    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);
    // Assert
    expect(result.employees).toEqual([]);
  });
  it('should return empty project when it feeds employees null', () => {
    // Arrange
    const project: apiModel.Project = {
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: null,
    };
    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);
    // Assert
    expect(result.employees).toEqual([]);
  });
  it('should return employee with viewModel type when it feeds project with one employee', () => {
    // Arrange
    const project: apiModel.Project = {
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: [{ employeeName: 'Example', id: '1', isAssigned: false }],
    };
    const employeeViewModel: viewModel.EmployeeSummary = {
      employeeName: 'Example',
      id: '1',
      isAssigned: false,
    };
    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);
    // Assert
    expect(result.employees[0]).toEqual(employeeViewModel);
  });
});
