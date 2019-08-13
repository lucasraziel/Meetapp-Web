import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    strong {
      color: #fff;
      font-size: 28px;
    }
    button.delete {
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
    button.edit {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: 28px;
      padding: 0 20px;
      height: 44px;
      background: #4dbaf9;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.03, '#4dbaf9')};
      }
    }
  }
  img {
    margin: 50px 0 20px 0;
    align-self: center;
    height: 300px;
  }
  p {
    color: #fff;
    font-size: 16px;
  }
  .bottom {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    span {
      display: flex;
      align-items: center;
      color: #999;
      size: 14px;
      margin: 10px 20px 0 0;
    }
  }
`;
