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

  // test('submits the form with valid data', () => {
  //   render(
  //     <BrowserRouter>
  //       <FormPage />
  //     </BrowserRouter>
  //   );

  //   fireEvent.change(screen.getByTestId(/firstName/i), { target: { value: 'John' } });
  //   fireEvent.change(screen.getByTestId(/lastName/i), { target: { value: 'Doe' } });
  //   fireEvent.change(screen.getByTestId(/email/i), { target: { value: 'john.doe@example.com' } });
  //   fireEvent.change(screen.getByTestId(/phoneNumber/i), { target: { value: '1234567890' } });
  //   fireEvent.change(screen.getByTestId(/linkedInUrl/i), { target: { value: 'https://linkedin.com/in/johndoe' } });
  //   fireEvent.change(screen.getByTestId(/githubUrl/i), { target: { value: 'https://github.com/johndoe' } });
  //   fireEvent.change(screen.getByTestId(/bestCallTime/i), { target: { value: '9am-5pm' } });
  //   fireEvent.change(screen.getByTestId(/comment/i), { target: { value: 'This is a test message.' } });

  //   fireEvent.click(screen.getByTestId(/submit-button/i));

  //   expect(screen.queryByText(/First Name is required/i)).toBeNull();
  //   expect(screen.queryByText(/Last Name is required/i)).toBeNull();
  //   expect(screen.queryByText(/Email is required/i)).toBeNull();
  //   expect(screen.queryByText(/Message is required/i)).toBeNull();
  // });
});
