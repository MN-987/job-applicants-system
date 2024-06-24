  /**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FormPage from '../pages/FormPage';

describe('FormPage', () => {
  test('renders the form with all input fields and a submit button', () => {
    render(
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>
    );
    const firstNameInput = screen.getByTestId(/firstName/i);
    expect(firstNameInput).toBeInTheDocument(); // Assertion

    expect(screen.getByTestId(/firstName/i)).toBeInTheDocument();
    expect(screen.getByTestId(/lastName/i)).toBeInTheDocument();
    expect(screen.getByTestId(/email/i)).toBeInTheDocument();
    expect(screen.getByTestId(/phoneNumber/i)).toBeInTheDocument();
    expect(screen.getByTestId(/linkedInUrl/i)).toBeInTheDocument();
    expect(screen.getByTestId(/githubUrl/i)).toBeInTheDocument();
    expect(screen.getByTestId(/bestCallTime/i)).toBeInTheDocument();
    expect(screen.getByTestId(/comment/i)).toBeInTheDocument();
    expect(screen.getByTestId(/submit-button/i)).toBeInTheDocument();
  });
});
