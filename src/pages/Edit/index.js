import React, { useEffect, useState } from 'react';

import { MdAddCircleOutline } from 'react-icons/md';
import { toast } from 'react-toastify';

import { Form, Input } from '@rocketseat/unform';
import pt from 'date-fns/locale/pt';
import { parseISO } from 'date-fns';
import api from '~/services/api';
import history from '~/services/history';

import { Container } from './styles';

import DatePicker from '~/components/DatePicker';
import ImagePicker from '~/components/ImagePicker';

export default function Edit({ match }) {
  const [meetup, setMeetup] = useState({});
  useEffect(() => {
    async function loadMeetup() {
      const { id } = match.params;
      const response = await api.get('/meetups');
      const meetupResponse = await response.data.find(
        meetupFilter => meetupFilter.id === Number.parseInt(id)
      );
      meetupResponse.date = new Date(parseISO(meetupResponse.date));

      setMeetup(meetupResponse);
    }

    loadMeetup();
  }, [match.params]);
  async function handleSubmit(data) {
    try {
      console.tron.log(data);
      await api.put(`meetups/${meetup.id}`, data);
      history.push('/dashboard');
    } catch (error) {
      console.tron.log(error);
      toast.error('Falha na criação da Meetup, verifique seus dados');
    }
  }

  return (
    <Container>
      {console.tron.log(meetup)}
      <Form onSubmit={handleSubmit} initialData={meetup}>
        {meetup.file ? (
          <ImagePicker name="file_id" source={meetup.file.url} />
        ) : (
          <ImagePicker name="file_id" />
        )}

        <Input name="title" placeholder="Título" />
        <Input name="description" placeholder="Descrição" />
        <DatePicker
          name="date"
          label="date"
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
            Editar Meetup
          </button>
        </div>
      </Form>
    </Container>
  );
}
