import * as React from 'react';
import styled from 'styled-components';

import Attempt from './Attempt';
import Example from './Example';
import Toggle from './Toggle';

const Layout = styled.div`
  height: 100vw;
  width: 100vw;

  display: grid;
  grid-template-areas: 'top top' 'left right';
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 10fr;
`;

const Top = styled.div`
  grid-area: top;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Left = styled.div`
  grid-area: left;
`;

const Right = styled.div`
  grid-area: right;
`;

export default class App extends React.Component {
  public render() {
    return (
      <Layout>
        <Top>
          <Toggle />
        </Top>
        <Left>
          <Attempt />
        </Left>
        <Right>
          <Example />
        </Right>
      </Layout>
    );
  }
}
