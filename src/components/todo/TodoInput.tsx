import React from 'react';
import styled from 'styled-components';

interface Props {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoFocus: boolean;
  required: boolean;
  placeholder: string;
  onBlur: () => void;
}

const TodoInputWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const TodoInputBox = styled.input`
  flex: 1;
  margin-left: ${(props) => props.theme.space[2]};
  border: none;
  font-size: ${(props) => props.theme.fontSizes[3]};
  font-weight: 500;
  &::placeholder {
    font-style: italic;
    opacity: 0.7;
  }
`;

const TodoInput = ({
  name,
  value,
  onChange,
  autoFocus,
  required,
  placeholder,
  onBlur,
}: Props) => {
  return (
    <TodoInputWrapper>
      <TodoInputBox
        name={name}
        value={value}
        onChange={onChange}
        autoFocus={autoFocus}
        required={required}
        placeholder={placeholder}
        onBlur={onBlur}
      />
    </TodoInputWrapper>
  );
};

export default TodoInput;
