import React from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Login from '../app/components/Login';

jest.mock("next/navigation", () => ({
  useRouter: jest.fn().mockReturnValue({
    query: {},
    push: () => {},
  }),
}));

jest.mock("next/image", () => {
  return {
    __esModule: true,
    default: (props: any) => {
      return <img {...props} alt="Images"/>;
    },
  };
});

describe('Testa se o login é exibido com todos os campos.', () => {
  it("Testa se o campo email e password esta presente na tela" , () => {
    const { getByPlaceholderText, getByText } = render(<Login />);

    const emailInput = getByPlaceholderText('E-mail');
    const passwordInput = getByPlaceholderText('Password');
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    const titleLogin = getByText("Faça seu login");
    expect(titleLogin).toBeInTheDocument();
  })
});