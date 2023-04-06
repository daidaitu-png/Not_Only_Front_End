import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CommonButtons from "./index";
import { ButtonSize, ButtonType, IBaseButtonProps, ICommonButtonProps } from "./type";

describe("test CommonButtons", () => {
  test("first CommonButtons", () => {
    render(<CommonButtons>Nice</CommonButtons>);
    expect(screen.getByText("Nice")).toBeInTheDocument();
  });

  test("second CommonButtons", () => {
    const wrapper = render(<CommonButtons>Nice</CommonButtons>);
    const element = wrapper.queryByText('Nice');
    expect(element).toBeTruthy();
  });
});

const defaultProps = {
  onClick: jest.fn(),
}

const testProps: ICommonButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: 'klass',
}

const disabledProps: ICommonButtonProps = {
  disabled: true,
  onClick: jest.fn(),
}

describe('test CommonButtons component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<CommonButtons {...defaultProps}>Nice</CommonButtons>);
    const element = wrapper.getByText('Nice')  as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('btn btn-default');
    expect(element.disabled).toBeFalsy();
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  })
  it('should render the correct component based on different props', () => {
    const wrapper = render(<CommonButtons {...testProps}>Nice</CommonButtons>);
    const element = wrapper.getByText('Nice');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('btn-primary btn-lg klass');
  })
  it('should render a link when btnType equals link and href is provided', () => {
    const wrapper = render(<CommonButtons btnType={ButtonType.Link} href="www.baidu.com">Link</CommonButtons>);
    const element = wrapper.getByText('Link');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('A');
    expect(element).toHaveClass('btn btn-link');
  })
  it('should render disabled button when disabled set to true', () => {
    const wrapper = render(<CommonButtons {...disabledProps}>Nice</CommonButtons>);
    const element = wrapper.getByText('Nice') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  })
})

