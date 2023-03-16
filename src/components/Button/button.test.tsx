import { fireEvent, render, screen } from "@testing-library/react"
import Button, { ButtonProps, ButtonSize, ButtonType } from "./button"

const defaultProps = {
  onClick: jest.fn(),
}
const testProps: ButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: "class",
}
const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
}
describe("test button component", () => {
  it("should render the correct default button", () => {
    render(<Button {...defaultProps}>nice</Button>)
    const element = screen.getByText("nice") as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeFalsy()
    expect(element.tagName).toEqual("BUTTON")
    expect(element).toHaveClass("btn btn-default")
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })
  it("should render the correct component based on defferent props", () => {
    render(<Button {...testProps}>nice</Button>)
    const element = screen.getByText("nice")
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass("btn-primary btn-lg class")
  })
  it("should render a link when btnType is link and href is provided", () => {
    render(
      <Button btnType={ButtonType.Link} href="http://www.baidu.com">
        link
      </Button>
    )
    const element = screen.getByText("link")
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual("A")
    expect(element).toHaveClass("btn btn-link")
  })
  it("should render disabled button when disabled set to true", () => {
    render(<Button {...disabledProps}>nice</Button>)
    const element = screen.getByText("nice") as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  })
})
