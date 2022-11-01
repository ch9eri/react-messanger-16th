import styled from 'styled-components';
import FriendList from '../components/Friends/FriendList';

const Friends = () => {
  return (
    <FriendPageContainer>
      <h3>친구</h3>
      <FriendList />
    </FriendPageContainer>
  );
};

const FriendPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export default Friends;
