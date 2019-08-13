import React, { useEffect, useState } from 'react';

import { MdAddCircleOutline } from 'react-icons/md';

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
      console.tron.log(id);
      const response = await api.get('/meetups');
      console.tron.log(response.data);
      const meetupResponse = await response.data.find(
        meetupFilter => meetupFilter.id === Number.parseInt(id)
      );
      meetupResponse.date = new Date(parseISO(meetupResponse.date));
      console.tron.log(meetupResponse);

      setMeetup(meetupResponse);
    }

    loadMeetup();
  }, [match.params]);
  async function handleSubmit(data) {
    console.tron.log(data);
    await api.put(`meetups/${meetup.id}`, data);
    history.push('/');
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
