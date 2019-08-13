import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { MdLocalSee } from 'react-icons/md';
import api from '~/services/api';

import { Container } from './styles';

export default function ImagePicker({ source }) {
  const { defaultValue, registerField } = useField('file_id');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'file_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [defaultValue, ref, registerField, source]);

  useEffect(() => {
    if (source) {
      setPreview(source);
    }
    if (defaultValue) {
      setFile(defaultValue);
    }
  }, [defaultValue, source]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);

    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="file">
        {preview ? (
          <div className="preview">
            <img src={preview} alt="" />
          </div>
        ) : (
          <div className="imagePicker">
            <div>
              <MdLocalSee color="#fff" size={36} />
              <strong>Selecionar Imagem</strong>
            </div>
          </div>
        )}

        <input
          type="file"
          id="file"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
