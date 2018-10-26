import * as React from 'react';
import { Flipped, Flipper } from 'react-flip-toolkit';

import styled from 'styled-components';

const ToggleContainer = styled.div`
  border-radius: 1rem;
  cursor: pointer;
  height: 1.2rem;
  padding: 0.1rem 0.2rem;
  width: 2.5rem;
  background: darkgray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ToggleButton = styled.div`
  background: rgba(0, 0, 0, 0.4);
  border-radius: 2rem;
  width: 1rem;
  height: 1rem;
`;

const OnButton = styled(ToggleButton)`
  margin-left: 1.5rem;
`;

const OffButton = styled(ToggleButton)`
  margin-right: 1.5rem;
`;

class Toggle extends React.Component<any, { value: boolean }> {
  public state = { value: false };

  public handleToggle = () =>
    this.setState((state) => ({ value: !state.value }));

  public render() {
    const { value } = this.state;

    return (
      <Flipper flipKey={this.state.value} spring="noWobble">
        <ToggleContainer onClick={this.handleToggle}>
          {value ? (
            <Flipped flipId="toggle">
              <OnButton />
            </Flipped>
          ) : (
            <Flipped flipId="toggle">
              <OffButton />
            </Flipped>
          )}
        </ToggleContainer>
      </Flipper>
    );
  }
}

export default Toggle;
