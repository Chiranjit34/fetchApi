
import styled from "styled-components";

const Cont = styled.div`
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    padding: 1.2rem;
    border-radius: 0.5rem;
`;

const Button = styled.button`
  background-color: #0b5ed7;
  border: none;
  color: white;
  padding: 0.7rem 2rem;
  border-radius: 0.2rem;
`;

export default function Card({ e }) {
  const handleUser = (e) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${e.userId}`)
      .then((res) => res.json())
      .then((data) =>
        alert(
          "Name: " +
            data.name +
            "\n" +
            "Email: " +
            data.email +
            "\n" +
            "Phone: " +
            data.phone +
            "\n" +
            "Website: " +
            data.website
        )
      );
  };

  return (
    <Cont>
      <h2>{e.title}</h2>
      <p>{e.body}</p>
      <Button onClick={() => handleUser(e)}>User</Button>
    </Cont>
  );
}
