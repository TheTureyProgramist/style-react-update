import React, { useState } from 'react'; 
import './App.css';
import styled from 'styled-components';

const ArticleElement = styled.div`
  background: yellow;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
`;

const Card = styled.div`
  gap: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardBlock = styled.div`
  gap: 20px;
  display: flex;
  justify-content: center; 
  align-items: flex-start;
`;

const Title = styled.h1`
  color: skyblue;
  font-size: 48px;
`;

const Image = styled.img`
  height: 250px; 
  width: auto;   
  object-fit: cover;
`;

const Text = styled.p`
  font-size: 20px;
`;

const LikeBtn = styled.button`
  background-color: ${({ liked }) => (liked ? 'violet' : 'skyblue')};
  display: block;
  width: 150px;
  height: 40px
  color: orange;
  border: 1px double red;
  font-size: 20px;
  cursor: pointer;
  transition: background 0.2s;
`;

function App() {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="App">
      <ArticleElement>
        <Title>Hаші індики</Title>
        <CardBlock>
          <Card>
            <Image src="/images/royalpalm.webp" alt="Turkey Image"></Image>
            <Text>Королівські палички індики</Text>
          </Card>
          <Card>
            <Image src="/images/whiteholland.webp" alt="Turkey Image 2"></Image>
            <Text>Білі голанські індики</Text>
          </Card>
          <Card>
            <Image src="/images/wildturkeys.webp" alt="Turkey Image 3"></Image>
            <Text>Дикі індики</Text>
          </Card>
        </CardBlock>
        <LikeBtn liked={liked} onClick={handleLike}>
          {liked ? 'Дякую!' : 'Підтримайте'}
        </LikeBtn>
      </ArticleElement>
    </div>
  );
}

export default App;