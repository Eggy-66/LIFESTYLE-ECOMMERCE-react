import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: green;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Vibe: Artistic, eclectic, and urban, suitable for creative and unique lifestyle goods. </Container>;
};

export default Announcement;
