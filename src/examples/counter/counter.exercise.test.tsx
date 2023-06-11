import { fireEvent, screen } from "@testing-library/react"
import { render } from "./test/utilities"
import Counter from "."

test("it should render the component", () => {
  render(<Counter />)

  const currentCount = screen.getByTestId("current-count")
  expect(currentCount).toHaveTextContent("0")
})

test('it should increment when the "Increment" button is pressed', async () => {
  const { user } = render(<Counter />)
  const currentCount = screen.getByTestId("current-count")
  expect(currentCount).toHaveTextContent("0")

  const button = screen.getByRole("button", { name: /increment/i })

  fireEvent.click(button)
  expect(currentCount).toHaveTextContent("1")

  fireEvent.click(button)
  expect(currentCount).toHaveTextContent("2")

  await user.click(button)
  expect(currentCount).toHaveTextContent("3")

  await user.click(button)
  expect(currentCount).toHaveTextContent("4")
})

test("it should render the component with an initial count", () => {
  const initialCount = 123
  render(<Counter initialCount={initialCount} />)

  const currentCount = screen.getByTestId("current-count")
  expect(currentCount).toHaveTextContent(`${initialCount}`)
})

test('it should reset the count when the "Reset" button is pressed', async () => {
  const initialCount = 123
  const { user } = render(<Counter initialCount={initialCount} />)

  const currentCount = screen.getByTestId("current-count")
  const resetButton = screen.getByRole("button", { name: /reset/i })

  await user.click(resetButton)
  expect(currentCount).toHaveTextContent("0")
})
