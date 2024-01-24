'use client';

import styled from 'styled-components';

const Button = styled.button`
  background: red;

  :hover {
    background: blue;
  }
`;

export default function Home() {
  return (
    <div>
      <Button>Click Me</Button>

      <Button>
        <span>Click Me</span>
      </Button>
    </div>
  );
}
