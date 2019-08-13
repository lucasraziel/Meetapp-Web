import React, { useRef, useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';

import { useField } from '@rocketseat/unform';

import 'react-datepicker/dist/react-datepicker.css';

export default function DatePicker({ name, placeholder, ...rest }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
    // eslint-disable-next-line
  }, [ref.current, fieldName]);
  let dateInitial = selected;
  if (defaultValue) {
    dateInitial = new Date(defaultValue);
  }
  if (selected) {
    dateInitial = selected;
  }
  return (
    <>
      <ReactDatePicker
        name={fieldName}
        selected={dateInitial}
        onChange={date => setSelected(date)}
        ref={ref}
        placeholderText={placeholder}
        {...rest}
      />
      {error && <span>{error}</span>}
    </>
  );
}
