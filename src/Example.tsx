import * as React from 'react';
import { Flipped, Flipper } from 'react-flip-toolkit';

import { shouldFlip } from './shouldFlip';
import { Focuses, ListItemProps } from './types';

import './styles.css';

const listData = [1, 2, 3];

const ListItem = ({ index, onClick }: ListItemProps) => {
  return (
    <Flipped
      flipId={`listItem-${index}`}
      stagger="card"
      shouldInvert={shouldFlip(index)}
    >
      <div className="listItem" onClick={() => onClick(index)}>
        <Flipped inverseFlipId={`listItem-${index}`}>
          <div className="listItemContent">
            <Flipped
              flipId={`avatar-${index}`}
              stagger="card-content"
              shouldFlip={shouldFlip(index)}
            >
              <div className="avatar" />
            </Flipped>
            <div className="description">
              {listData.slice(0, 3).map((i) => (
                <Flipped
                  flipId={`description-${index}-${i}`}
                  stagger="card-content"
                  shouldFlip={shouldFlip(index)}
                >
                  <div key={i} />
                </Flipped>
              ))}
            </div>
          </div>
        </Flipped>
      </div>
    </Flipped>
  );
};

const ExpandedListItem = ({ index, onClick }: ListItemProps) => {
  return (
    <Flipped
      flipId={`listItem-${index}`}
      stagger="card"
      onStart={(el) => {
        setTimeout(() => {
          // tslint:disable-next-line:no-console
          console.log('Adding animated-in class to example element');

          el.classList.add('animated-in');
        }, 400);
      }}
    >
      <div className="expandedListItem" onClick={() => onClick(index)}>
        <Flipped inverseFlipId={`listItem-${index}`}>
          <div className="expandedListItemContent">
            <Flipped flipId={`avatar-${index}`} stagger="card-content">
              <div className="avatar avatarExpanded" />
            </Flipped>
            <div className="description">
              {listData.slice(0, 3).map((i) => (
                <Flipped
                  flipId={`description-${index}-${i}`}
                  stagger="card-content"
                >
                  <div />
                </Flipped>
              ))}
            </div>
            <div className="additional-content">
              {listData.slice(0, 3).map((i) => (
                <div />
              ))}
            </div>
          </div>
        </Flipped>
      </div>
    </Flipped>
  );
};

export default class AnimatedList extends React.Component<{}, Focuses> {
  public state = { focused: null };
  public onClick = (index: number) =>
    this.setState({
      focused: this.state.focused === index ? null : index,
    });

  public render() {
    return (
      <Flipper
        flipKey={this.state.focused}
        className="staggered-list-content"
        spring="gentle"
        staggerConfig={{
          card: {
            reverse: this.state.focused !== null,
            speed: 0.5,
          },
        }}
        decisionData={this.state.focused}
      >
        <ul className="list">
          {listData.map((index) => {
            return (
              <li key={index}>
                {index === this.state.focused ? (
                  <ExpandedListItem
                    index={index}
                    key={index}
                    onClick={this.onClick}
                  />
                ) : (
                  <ListItem index={index} key={index} onClick={this.onClick} />
                )}
              </li>
            );
          })}
        </ul>
      </Flipper>
    );
  }
}
