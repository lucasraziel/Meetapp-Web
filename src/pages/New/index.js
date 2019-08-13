import React from 'react';

import { MdAddCircleOutline } from 'react-icons/md';

import { Form, Input } from '@rocketseat/unform';
import { addHours } from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '~/services/api';
import history from '~/services/history';

import { Container } from './styles';

import DatePicker from '~/components/DatePicker';
import ImagePicker from '~/components/ImagePicker';

export default function New() {
  async function handleSubmit(data) {
    console.tron.log(data);
    await api.post('meetups', data);
    history.push('/dashboard');
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <ImagePicker name="file_id" />
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
          minDate={addHours(new Date(), 1)}
        />
        <Input name="place" placeholder="Local" />

        <div className="buttonSubmit">
          <button type="submit">
            <MdAddCircleOutline size={24} color="#fff" />
            Criar Meetup
          </button>
        </div>
      </Form>
    </Container>
  );
}
