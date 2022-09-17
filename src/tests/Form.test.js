import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Formulario from '../components/Forms/Form';

describe ('Pruebas sobre el componente formulario', ()=>{
  const testData = {name:'Peter Neville', email:'correo@correo.com', message:'Esto es una prueba'};
  test ('Prueba de envio del formulario', ()=> {
    const mockFn = jest.fn()
    render ( <Formulario onSubmit={mockFn} />);

    const inputName = screen.getByPlaceholderText ('Your Name');
    const inputEmail = screen.getByPlaceholderText ('Your e-mail address');
    const inputMessage = screen.getByPlaceholderText ('Your Message');
    const button = screen.getByRole ('button', {
      name: /Send/i
    });

    userEvent.clear(inputName);
    userEvent.type (inputName, testData.name);

    userEvent.clear(inputEmail);
    userEvent.type (inputEmail, testData.email);


    userEvent.clear(inputMessage);
    userEvent.type (inputMessage, testData.message);

    userEvent.click(button);
  });
})