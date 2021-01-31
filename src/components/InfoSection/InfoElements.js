import styled from 'styled-components';

export const InfoSectionWrapper = styled.div`
  background: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const InfoSectionContainer = styled.div`
  max-width: 1100px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const InfoSectionHeader = styled.h1`
  font-size: 24px;
  width: 324px;
  margin-bottom: 40px;
  margin-top: 30px;
  font-weight: lighter;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    font-size: 24px;
    width: 250px;
    text-align: center
  }
`;

export const InfoSectionHr = styled.div`
  width: 500px;
  background: #2EB67D;
  height: 4px;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    width: 70%;
  }
`;

export const InfoSectionGridContainer = styled.div`
  width: 500px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  row-gap: 20px;
  column-gap: 60px;
  padding-top: 30px;
  padding-bottom: 60px;
  margin-top: 30px;
  margin: 0 auto;
  

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 70px;
    row-gap: 30px;
    width: 400px;
    margin-left: 80px;
  }
`;

export const Img = styled.img`
  width: 60px;
  object-fit: contain;
  height: 60px;
`;
