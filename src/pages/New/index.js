import React from 'react';

import { MdAddCircleOutline } from 'react-icons/md';

import { Form, Input } from '@rocketseat/unform';
import pt from 'date-fns/locale/pt';
import api from '~/services/api';
import history from '~/services/history'

import { Container } from './styles';

import DatePicker from '~/components/DatePicker';
import ImagePicker from '~/components/ImagePicker';

export default function New() {
  async function handleSubmit(data) {
    await api.post('meetups', data);
    history.push('/');
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <ImagePicker />
        <Input name="title" placeholder="Título" />
        <Input multiline name="description" placeholder="Descrição" />
        <DatePicker
          name="date"
          placeholder="Data"
          locale={pt}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={30}
          dateFormat="dd/MM/yyyy HH:mm"
          minDate={new Date()}
        />
        <Input name="place" placeholder="Local" />

        <div className="buttonSubmit">
          <button type="submit">
            <MdAddCircleOutline size={24} color="#fff" />
            Atualizar perfil
          </button>
        </div>
      </Form>
    </Container>
  );
}
