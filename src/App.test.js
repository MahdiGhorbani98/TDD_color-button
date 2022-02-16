import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';



test('btn is red in initial with "Change to blue" text', ()=>{
  render(<App/>);

  //find an element with a role of button and text of 'Change to blue' 
  const colorBtn= screen.getByRole('button' , {name:'Change to blue'});

  // expect the bgColor to be red
  expect(colorBtn).toHaveStyle({backgroundColor:'red'})

  // click btn
  fireEvent.click(colorBtn);

  //expect the bgColor to be blue
  expect(colorBtn).toHaveStyle({backgroundColor:'blue'})

  //expect the text to be 'Chenge to Red'
  expect(colorBtn.textContent).toBe('Change to red')

})