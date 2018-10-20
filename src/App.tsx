import * as React from 'react';
import { Flipped, Flipper } from 'react-flip-toolkit';
import styled from 'styled-components';

const listData = [1, 2, 3];

const shouldFlip = (index: number) => (
  prevDecisionData: any,
  currentDecisionData: any
) => index === prevDecisionData || index === currentDecisionData;

// tslint:disable-next-line:interface-name
interface Focuses {
  focused: number | null;
}

// tslint:disable-next-line:interface-name
interface ListItemProps {
  index: number;
  onClick: (index: number) => any;
}

const StaggeredListContent = styled(Flipper)`
  width: 400px;
  margin: 2rem auto;
`;

const ListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0;

  li {
    width: 100%;
  }

  li + li {
    margin-top: 1rem;
  }
`;

const ListItemContainer = styled.li`
  width: 100%;
  cursor: pointer;
  background-color: #ffd379;
`;

const ListItemWrapper = styled.div``;
const ListItemContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
`;

const ListItemAvatar = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 100px;
  background-color: #282c34;
  margin-right: 2rem;
`;

const ListItemDescription = styled.div`
  & > div {
    background-color: #282c34;
    width: 14rem;
    border-radius: 6px;
    height: 0.5rem;
  }

  & > div:nth-of-type(2) {
    width: 11rem;
  }

  & > div:nth-of-type(3) {
    width: 8rem;
  }

  & > div + div {
    margin-top: 1rem;
  }
`;

const ExpandedListItemWrapper = styled.div`
  cursor: pointer;
  background-color: #ffd379;
`;

const ExpandedListItemContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ExpandedListItemAvatar = styled.div`
  border-radius: 100px;
  background-color: #282c34;

  width: 8rem;
  height: 8rem;
  margin-right: 0;
  margin-bottom: 1rem;
`;

const ExpandedListItemDescription = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  & > div {
    background-color: #282c34;
    width: 14rem;
    border-radius: 6px;
    height: 0.5rem;
  }

  & > div:nth-of-type(2) {
    width: 11rem;
  }

  & > div:nth-of-type(3) {
    width: 8rem;
  }

  & > div + div {
    margin-top: 1rem;
  }
`;

const ExpandedListItemAdditionalContent = styled.div`
  width: 100%;
  margin-top: 2rem;

  & > div {
    opacity: 0;
    border-radius: 3px;
    background-color: #282c34;
    height: 5rem;
  }
`;

const ListItem = ({ index, onClick }: ListItemProps) => (
  <Flipped
    stagger="card"
    shouldInvert={shouldFlip(index)}
    flipId={`list_item_${index}`}
  >
    <ListItemWrapper onClick={() => onClick(index)}>
      <Flipped inverseFlipId={`list_item_${index}`}>
        <ListItemContent>
          <Flipped
            stagger="card-content"
            flipId={`list_item_avatar_${index}`}
            shouldFlip={shouldFlip(index)}
          >
            <ListItemAvatar />
          </Flipped>
          <ListItemDescription>
            {listData.map((i) => (
              <Flipped
                stagger="card-content"
                shouldFlip={shouldFlip(index)}
                flipId={`list_item_description_${index}-${i}`}
              >
                <div key={i} />
              </Flipped>
            ))}
          </ListItemDescription>
        </ListItemContent>
      </Flipped>
    </ListItemWrapper>
  </Flipped>
);

const ExpandedListItem = ({ index, onClick }: ListItemProps) => (
  <Flipped stagger="card" flipId={`list_item_${index}`}>
    <ExpandedListItemWrapper onClick={() => onClick(index)}>
      <Flipped inverseFlipId={`list_item_${index}`}>
        <ExpandedListItemContent>
          <Flipped stagger="card-content" flipId={`list_item_avatar_${index}`}>
            <ExpandedListItemAvatar />
          </Flipped>
          <ExpandedListItemDescription>
            {listData.map((i) => (
              <Flipped
                stagger="card-content"
                flipId={`list_item_description_${index}-${i}`}
              >
                <div key={i} />
              </Flipped>
            ))}
          </ExpandedListItemDescription>
          <ExpandedListItemAdditionalContent>
            {listData.map((i) => (
              <div key={i} />
            ))}
          </ExpandedListItemAdditionalContent>
        </ExpandedListItemContent>
      </Flipped>
    </ExpandedListItemWrapper>
  </Flipped>
);

class AnimatedList extends React.Component<any, Focuses> {
  public state = { focused: null };

  public toggleFocus = (index: number) =>
    this.setState({
      focused: this.state.focused === index ? null : index,
    });

  public render() {
    return (
      <StaggeredListContent
        decisionData={this.state.focused}
        flipKey={this.state.focused}
        spring="gentle"
        staggerConfig={{
          card: {
            reverse: this.state.focused !== null,
            speed: 0.5,
          },
        }}
      >
        <ListContainer>
          {listData.map((index) => (
            <ListItemContainer key={index}>
              {index === this.state.focused ? (
                <ExpandedListItem
                  index={index}
                  key={index}
                  onClick={this.toggleFocus}
                />
              ) : (
                <ListItem
                  index={index}
                  key={index}
                  onClick={this.toggleFocus}
                />
              )}
            </ListItemContainer>
          ))}
        </ListContainer>
      </StaggeredListContent>
    );
  }
}

export default AnimatedList;
