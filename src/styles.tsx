import { Flipper } from 'react-flip-toolkit';
import styled from 'styled-components';

export const ListItemContainer = styled.li``;

export const ListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0;

  ${ListItemContainer} {
    width: 100%;
  }

  ${ListItemContainer} + ${ListItemContainer} {
    margin-top: 1rem;
  }
`;

export const ListItemWrapper = styled.div`
  width: 100%;
  cursor: pointer;
  background-color: #ffd379;
  overflow: hidden;
`;

export const ListItemContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
`;

export const ListItemAvatar = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 100px;
  background-color: #282c34;
  margin-right: 2rem;
`;

export const ListItemDescription = styled.div`
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

export const ExpandedListItemWrapper = styled.div`
  cursor: pointer;
  background-color: #ffd379;
`;

export const ExpandedListItemContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ExpandedListItemAvatar = styled(ListItemAvatar)`
  width: 8rem;
  height: 8rem;
  margin-right: 0;
  margin-bottom: 1rem;
`;

export const ExpandedListItemDescription = styled(ListItemDescription)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ExpandedListItemAdditionalContent = styled.div`
  width: 100%;
  margin-top: 2rem;

  div {
    opacity: 0;
    border-radius: 3px;
    background-color: #282c34;
    height: 5rem;
  }

  div + div {
    margin-top: 1rem;
  }
`;

export const StaggeredListContent = styled(Flipper)`
  width: 400px;
  margin: 2rem auto;

  .animated-in ${ExpandedListItemAdditionalContent} > div {
    animation: fadeIn 0.4s forwards;
  }

  .animated-in ${ExpandedListItemAdditionalContent} > div:nth-of-type(2) {
    animation-delay: 0.15s;
  }

  .animated-in ${ExpandedListItemAdditionalContent} > div:nth-of-type(3) {
    animation-delay: 0.3s;
  }
`;
