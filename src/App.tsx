import * as React from 'react';
import styled from 'styled-components';

const listData = [1, 2, 3];

// tslint:disable-next-line:interface-name
interface Focuses {
  focused: number | null;
}

// tslint:disable-next-line:interface-name
interface ListItemProps {
  index: number;
  onClick: (index: number) => any;
}

const StaggeredListContent = styled.div`
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
  // tslint:disable-next-line:jsx-no-lambda
  <ListItemWrapper onClick={() => onClick(index)}>
    <ListItemContent>
      <ListItemAvatar />
      <ListItemDescription>
        {listData.map((i) => (
          <div key={i} />
        ))}
      </ListItemDescription>
    </ListItemContent>
  </ListItemWrapper>
);

const ExpandedListItem = ({ index, onClick }: ListItemProps) => (
  // tslint:disable-next-line:jsx-no-lambda
  <ExpandedListItemWrapper onClick={() => onClick(index)}>
    <ExpandedListItemContent>
      <ExpandedListItemAvatar />
      <ExpandedListItemDescription>
        {listData.map((i) => (
          <div key={i} />
        ))}
      </ExpandedListItemDescription>
      <ExpandedListItemAdditionalContent>
        {listData.map((i) => (
          <div key={i} />
        ))}
      </ExpandedListItemAdditionalContent>
    </ExpandedListItemContent>
  </ExpandedListItemWrapper>
);

class AnimatedList extends React.Component<any, Focuses> {
  public state = { focused: null };

  public toggleFocus = (index: number) =>
    this.setState({
      focused: this.state.focused === index ? null : index,
    });

  public render() {
    return (
      <StaggeredListContent>
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
