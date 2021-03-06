import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  width: min(25rem, 100%); // 400px
  margin-inline: auto;
  padding: 0.7em;

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 1.3em;
  }
`;

export default Form;
