import { render } from "test/utilities"
import { axe, toHaveNoViolations } from "jest-axe"
import ObstacleCourse from "."

expect.extend(toHaveNoViolations)

// it("should demonstrate this matcher`s usage", async () => {
//   const { container } = render(<ObstacleCourse />)
//   const results = await axe(container)

//   expect(results).toHaveNoViolations()
// })

it("should be accessible", async () => {
  const { container } = render(<ObstacleCourse />)
  const result = await axe(container)

  expect(result).toHaveNoViolations()
})
