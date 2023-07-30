import React from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Login from '../app/components/Login';

test('Testa se o login é exibido com todos os campos.', () => {
  const { getByPlaceholderText, getByText } = render(<Login />);

  const emailInput = getByPlaceholderText('E-mail');
  const passwordInput = getByPlaceholderText('Password');
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();

  const titleLogin = getByText("Faça seu login");
  expect(titleLogin).toBeInTheDocument();
});