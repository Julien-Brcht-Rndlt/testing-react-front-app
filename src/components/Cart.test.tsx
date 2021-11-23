import { render, screen, fireEvent } from "@testing-library/react"
import Cart from "./Cart"

describe('Cart component', () => {

    it('renders purchase button', () => {
        const onCancel = jest.fn();
        render(<Cart onCancel={ onCancel }/>)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
    })

    describe('When user clicks on purchase button', () => {
        it('renders Thank You!', () => {
            const onCancel = jest.fn();
            render(<Cart onCancel={ onCancel }/>)
            expect(screen.queryByText(/thank you!/i)).not.toBeInTheDocument()
            fireEvent.click(screen.getByRole('button'))
            expect(screen.getByText(/thank you!/i)).toBeInTheDocument()
        })
    })

    describe('When user clicks cancel button', () => {
        it.only('calls onCancel prop function', () => {
            const onCancel = jest.fn();
            render(<Cart onCancel={ onCancel }/>)
            fireEvent.click(screen.getByText(/cancel/i))
            /* expect(onCancel).toHaveBeenCalled() */
            expect(onCancel).toHaveBeenCalledTimes(1)
        })
    })
})

