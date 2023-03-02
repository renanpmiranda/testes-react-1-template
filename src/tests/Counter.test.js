import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Counter from "../components/Counter"

describe("Counter", () => {

    test("deve aumentar em 3 o contador quando o botão de incremento for clicado 3 vezes", async () => {
        const user = userEvent.setup()

        render(<Counter/>)        

        const countNumber = screen.getByText(/0/i)

        const plusBtn = screen.getByRole("button", {
            name: /\+/i
        })        

        await user.click(plusBtn)
        await user.click(plusBtn)
        await user.click(plusBtn)

        expect(countNumber).toBeInTheDocument("3")
    })
})