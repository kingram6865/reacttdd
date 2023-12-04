import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import NewRestaurantForm from '../../src/NewRestaurantForm'

describe('NewRestaurantForm', () => {
  it('calls the onSave handler', async () => {
    const saveHandler = jest.fn()
    const component = render(<NewRestaurantForm onSave={saveHandler} />)
    const input1 = await component.findByTestId('newRestaurantName')
    const input2 = await component.findByTestId('saveNewRestaurantButton')

    fireEvent.change(input1, { target: { value: "Sushi Place" } })
    fireEvent.click(input2)
    expect(saveHandler).toHaveBeenCalledWith('Sushi Place')
  })
})
