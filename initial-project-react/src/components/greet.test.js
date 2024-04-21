import { render, screen } from "@testing-library/react";
import Greet from "./greet";

test('Greet renders correctly', () => {

    render(<Greet />)
    const testElement = screen.getByText('Hello')
    expect(testElement).toBeInTheDocument()
})

test('Greet renders with a name', () => {

    render(<Greet name="Ilan" />)
    const testElement = screen.getByText('Hello Ilan')
    expect(testElement).toBeInTheDocument()
})