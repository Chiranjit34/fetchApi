import { useEffect, useState } from "react";
import Card from "./Card";
import styled from "styled-components";

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-top: 1rem;
`;
const Input = styled.input`
  height: 2rem;
  width: 400px;
  padding-left: 0.5rem;
`;

const Button = styled.button`
  background-color: #0b5ed7;
  border: none;
  color: white;
  padding: 0.7rem 2rem;
  border-radius: 0.2rem;
`;

export default function Home() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [temp, setTemp] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setTemp(data);
      });
  }, []);

  const handleSearch = () => {
    let newData = temp.filter((e) => e.title.includes(text));
    setData(newData);
  };

  return (
    <div>
      <div style={{marginTop: '10px'}}>
        <Input type="text" onChange={(e) => setText(e.target.value)} />
        <Button onClick={handleSearch} disabled={text.length < 3}>
          Search
        </Button>
      </div>
      <Box>
        {data?.map((e) => (
          <Card key={e.id} e={e} />
        ))}
      </Box>
    </div>
  );
}
