import "@testing-library/jest-dom/extend-expect"
import { render as renderComponent } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

type RenderComponent = (...args: Parameters<typeof renderComponent>) => ReturnType<typeof renderComponent> & {
  user: ReturnType<typeof userEvent.setup>
}
export const render: RenderComponent = (ui, options) => {
  return {
    ...renderComponent(ui, options),
    user: userEvent.setup(),
  }
}
