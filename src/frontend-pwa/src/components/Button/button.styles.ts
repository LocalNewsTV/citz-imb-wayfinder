/* eslint-disable no-nested-ternary */
import styled from '@emotion/styled';
import typography from '../../typography';

type ButtonProps = {
  variant: string,
  size: string,
  disabled: boolean,
}

const StyledButton = styled.button<ButtonProps>`
  ${typography.toString()}
  width: ${(props) => (props.size === 'sm' ? '100px' : props.size === 'md' ? '200px' : '300px')};
  height: ${(props) => (props.size === 'sm' ? '35px' : props.size === 'md' ? '70px' : '100px')};
  border: none;
  border-radius: 8px;
  padding: 12px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
  background-color: ${(props) => (props.variant === 'primary' ? '#003366' : props.variant === 'secondary' ? '#FFFFFF' : '#000000')};
  color: #FFFFFF;
  &:hover {
    transform: scale(0.98);
  }
`;

export default StyledButton;
