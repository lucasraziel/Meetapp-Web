import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;
  width: 100%;
  label {
    display: block;
    .preview {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        height: 300px;
        max-width: 600px;
        background: #eee;
      }
    }
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

    input {
      display: none;
    }
  }
`;
