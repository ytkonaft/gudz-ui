import React from "react";
import PropTypes from 'prop-types';
import { Label, Text } from "../text";
import Icon from "../icon";
import {
  StyledInput,
  InputWrapper,
  LabelWrapper,
  DescriptionWrapper,
  InputFieldWrapper,
  ClearButton,
} from "./styles";

const Input = ({
  children,
  size,
  label,
  description,
  placeholder,
  success,
  disabled ,
  invalid ,
  clearable ,
  value,
  ...props
}) => {
  const filled = value.length > 0;

  return (
    <InputWrapper>
      {
        label && (
          <LabelWrapper>
           <Label size={size}>{label}</Label>
        </LabelWrapper>
        )
      }

      <InputFieldWrapper>
        <StyledInput
          {...props}
          size={size}
          success={success}
          disabled={disabled}
          invalid={invalid}
          filled={filled}
          value={value}
          placeholder={placeholder}
        />
        {filled && clearable && (
          <ClearButton>
            <Icon glyph="cross" />
          </ClearButton>
        )}
      </InputFieldWrapper>


      {
        description && (
        <DescriptionWrapper
          success={success}
          disabled={disabled}
          invalid={invalid}
        >
          <Text size={size === "large" ? "small" : "xSmall"}>{description}</Text>
        </DescriptionWrapper>
        )
      }

    </InputWrapper>
  );
};

Input.propTypes = {
  size: PropTypes.oneOf(['small','medium', ' large']),
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string,
  description: PropTypes.string,
  success: PropTypes.bool,
  disabled:PropTypes.bool,
  invalid: PropTypes.bool,
  clearable: PropTypes.bool,
  value: PropTypes.string
}

Input.defaultProps = {
  label: null,
  description: null,
  success: false,
  disabled: false,
  invalid: false,
  clearable: false,
  value: '',
  size: 'medium'
}

export default Input;
