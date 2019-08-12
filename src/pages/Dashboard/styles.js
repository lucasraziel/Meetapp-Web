import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  header {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: 28px;
      padding: 0 20px;
      height: 44px;
      background: #f94d6a;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.03, '#F94D6A')};
      }
    }
    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }
`;

export const Meetups = styled.ul`
  display: grid;
  grid-gap: 15px;
  margin-top: 30px;

  li {
    display: flex;
    justify-content: space-between;
    background: #18161f;
    height: 44px;
    align-items: center;
    padding: 0 15px;
    border-radius: 4px;
    strong {
      color: #fff;
      font-size: 18px;
    }
    div {
      display: flex;
      justify-content: end;
      align-items: center;
      span {
        color: #999;
        font-size: 16px;
      }
      a {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
