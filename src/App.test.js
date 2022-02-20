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

test('initial checkbox and enable btn', ()=>{
  render(<App/>);

  //check that the btn starts out enabled
  const btn = screen.getByRole('button',{name:'Change to blue'});
  expect(btn).toBeEnabled();

  //check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();

})

test('checkbox clicked', ()=>{
  render(<App/>);

  const btn = screen.getByRole('button', {name:'Change to blue'});
  const checkbox = screen.getByRole('checkbox', {name:'Disable Button'});

  //click checkbox
  fireEvent.click(checkbox);
  expect(btn).not.toBeEnabled();
  
  //when click checkbox another time
  fireEvent.click(checkbox);
  expect(btn).toBeEnabled();

})

test('Disabled btn has gray BgColor and reverts to red',()=>{
  render(<App/>);

  const btn = screen.getByRole('button', {name:'Change to blue'});
  const checkbox = screen.getByRole('checkbox', {name:'Disable Button'});

  fireEvent.click(checkbox);
  expect(btn).toHaveStyle({backgroundColor:'gray'});

  fireEvent.click(checkbox);
  expect(btn).toHaveStyle({backgroundColor:'red'});

})

test('Disabled btn has gray BgColor and reverts to blue',()=>{
  render(<App/>);

  const btn = screen.getByRole('button', {name:'Change to blue'});
  const checkbox = screen.getByRole('checkbox', {name:'Disable Button'});

  fireEvent.click(btn);

  fireEvent.click(checkbox);
  expect(btn).toHaveStyle({backgroundColor:'gray'});

  fireEvent.click(checkbox);
  expect(btn).toHaveStyle({backgroundColor:'blue'})
})