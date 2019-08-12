import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;
  width: 100%;
  label {
    display: block;
    .imagePicker {
      background: #19141f;
      height: 300px;
      div {
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        strong {
          color: #fff;
          size: 36px;
        }
      }
    }
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
    img {
      height: 300px;
      max-width: 600px;
      border: 3px solid rgba(255, 255, 255, 0.3);
      background: #eee;
    }
    input {
      display: none;
    }
  }
`;
