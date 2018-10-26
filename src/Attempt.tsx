import * as React from 'react';
import { Flipped } from 'react-flip-toolkit';

import { shouldFlip } from './shouldFlip';
import {
  ExpandedListItemAdditionalContent,
  ExpandedListItemAvatar,
  ExpandedListItemContent,
  ExpandedListItemDescription,
  ExpandedListItemWrapper,
  ListContainer,
  ListItemAvatar,
  ListItemContainer,
  ListItemContent,
  ListItemDescription,
  ListItemWrapper,
  StaggeredListContent,
} from './styles';
import { Focuses, ListItemProps } from './types';

const listData = [1, 2, 3];

const ListItem = ({ index, onClick }: ListItemProps) => (
  <Flipped
    flipId={`list_item_${index}`}
    stagger="card"
    shouldInvert={shouldFlip(index)}
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
  <Flipped
    stagger="card"
    flipId={`list_item_${index}`}
    onStart={(el) => {
      setTimeout(() => el.classList.add('animated-in'), 400);
    }}
  >
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
