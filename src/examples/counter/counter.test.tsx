// @vitest-environment happy-dom

import { screen, fireEvent } from "@testing-library/react"
import Counter from "."
import { render } from "./test/utilities"

test("it should render the component", () => {
  render(<Counter />)
})

test('it should increment when the "Increment" button is clicked', async () => {
  const { user } = render(<Counter />)
  const currentCount = screen.getByTestId("current-count")
  expect(currentCount).toHaveTextContent("0")

  const button = screen.getByRole("button", { name: "Increment" })

  fireEvent.click(button)
  expect(currentCount).toHaveTextContent("1")

  fireEvent.click(button)
  expect(currentCount).toHaveTextContent("2")

  await user.click(button)
  expect(currentCount).toHaveTextContent("3")

  await user.click(button)
  expect(currentCount).toHaveTextContent("4")
})
