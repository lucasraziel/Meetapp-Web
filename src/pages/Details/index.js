import React, { useEffect, useState } from 'react';

import { MdEdit, MdDelete, MdPlace, MdDateRange } from 'react-icons/md';
import { toast } from 'react-toastify';

import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Container } from './styles';
import api from '~/services/api';
import history from '~/services/history';

export default function Details({ match }) {
  const [meetup, setMeetup] = useState({});
  useEffect(() => {
    async function loadMeetup() {
      const { id } = match.params;
      const response = await api.get('/meetups');
      const meetupResponse = await response.data.find(
        meetupFilter => meetupFilter.id === Number.parseInt(id)
      );
      console.tron.log(meetupResponse);
      meetupResponse.date = format(
        parseISO(meetupResponse.date),
        "dd' de 'MMMM', às 'HH':'mm",
        {
          locale: pt,
        }
      );

      setMeetup(meetupResponse);
    }

    loadMeetup();
  }, [match.params, meetup.date]);

  function handleEdit(meetupId) {
    history.push(`/edit/${meetupId}`);
  }

  async function handleDelete(meetupId) {
    const confirm = window.confirm(
      'Deseja realmente cancelar esse Meetup? Todos os dados dele serão perdidos'
    );

    if (confirm) {
      try {
        await api.delete(`meetups/${meetupId}`);
        history.push('/dashboard');
      } catch (error) {
        console.tron.log(error);
        toast.error('Falha ao deletar Meetup');
      }
    }
  }
  return (
    <Container>
      <div>
        <strong>{meetup.title}</strong>
        <div>
          <button
            type="button"
            className="edit"
            onClick={() => {
              handleEdit(meetup.id);
            }}
          >
            <MdEdit color="fff" size={24} />
            Editar
          </button>
          <button
            type="button"
            className="delete"
            onClick={() => {
              handleDelete(meetup.id);
            }}
          >
            <MdDelete color="fff" size={24} />
            Cancelar
          </button>
        </div>
      </div>
      {meetup.file ? (
        <img alt="banner" src={meetup.file.url} />
      ) : (
        <img alt="banner" />
      )}

      <p>{meetup.description}</p>
      <div className="bottom">
        <span>
          <MdDateRange color="999" size={24} />
          {meetup.date}
        </span>

        <span>
          <MdPlace color="999" size={24} />
          {meetup.place}
        </span>
      </div>
    </Container>
  );
}
