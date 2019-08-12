import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/M.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="GoBarber" />
          </Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Lucas</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>

            <button type="button">Sair</button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
