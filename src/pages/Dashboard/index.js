import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import { MdChevronRight, MdAddCircleOutline } from 'react-icons/md';
import pt from 'date-fns/locale/pt';
import api from '~/services/api';

import { Container, Meetups } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups');

      setMeetups(response.data);
    }

    loadMeetups();
  }, []);
  return (
    <Container>
      <header>
        <strong>Meus Meetups</strong>
        <Link to="/new">
          <button type="button">
            <MdAddCircleOutline size={24} color="#FFF" />
            Adicionar Meetup
          </button>
        </Link>
      </header>
      <Meetups>
        {meetups.map(meetup => (
          <Link to={`/details/${meetup.id}`}>
            <li>
              <strong>{meetup.title}</strong>
              <div>
                <span>
                  {format(parseISO(meetup.date), "dd' de 'MMMM', às 'HH':'mm", {
                    locale: pt,
                  })}
                </span>

                <MdChevronRight size={24} color="#FFF" />
              </div>
            </li>
          </Link>
        ))}
      </Meetups>
    </Container>
  );
}
