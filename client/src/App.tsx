import React, { ChangeEvent, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_RESULTS } from "./graphql/queries/getResult";
import { ScreenWidth, TopNav, Header, Banner } from "./components/layout";
import { Flex, StyledOverlay } from "./components/core";
import { StyledInput } from "./components/forms";
import { SubmitButton } from "./components/buttons";
import { H1 } from "./components/typography";

const Overlay: React.FC<{ close: Function; number: number }> = ({
  close,
  number,
}) => {
  const { loading, error, data } = useQuery(GET_RESULTS, {
    variables: { number },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  const { val3, val5 } = data.getResult;

  return (
    <Flex flexDirection="column">
      <H1>
        The total is: {val3 + val5} {`🎉`}
      </H1>
      <button onClick={() => close()}>close</button>
    </Flex>
  );
};

function Form() {
  const [overlay, setOverlay] = useState<boolean>(false);
  const [text, setText] = useState<string>("");

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    const regex = /^(?:[1-9]|0[1-9]|10)$/;
    const isValid = regex.test(value);
    if (isValid || !value) {
      setText(value);
    }
  };

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    setOverlay(true);
  };

  return (
    <Flex
      width="100%"
      height="100%"
      alignItems="center"
      justifyContent="center"
      style={{ position: "relative" }}
    >
      {overlay && (
        <StyledOverlay>
          <Overlay number={parseInt(text)} close={() => setOverlay(false)} />
        </StyledOverlay>
      )}
      <form onSubmit={handleSubmit}>
        <Flex flexDirection="column">
          <StyledInput
            value={text}
            onChange={handleChange}
            placeholder="Enter from 1-10"
          />
          <SubmitButton>Submit</SubmitButton>
        </Flex>
      </form>
    </Flex>
  );
}

function App() {
  return (
    <ScreenWidth>
      <TopNav />
      <Header />
      <Banner>
        <Form />
      </Banner>
    </ScreenWidth>
  );
}

export default App;
