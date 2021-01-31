import styled from 'styled-components';

export const HeroContainer = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  padding: 0 30px;
  height: calc(100vh - 80px);
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: lineaer-gradient(180deg, rgba(82, 51, 39, 0.2) 0%, rgba(82, 59, 39, 0.6) 100%), linear-gradient( 180deg, rgba(82, 59, 39, 0.2) 0%, transparent 100%);
  z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    height: 50%;
    border-radius: 20px;
    width: 400px;
    left: 3rem;
  }
`;

export const BackGround = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;
  background-color: #000;
  filter: brightness(60%);
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  

  @media screen and (max-width: 768px) {
    align-items: center;
    justify-content: center;
    margin-top: 25px;
  }
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  width: 320px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
    text-align: center;
    max-width: 280px;
    margin-left: 35px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
    text-align: center
  }
`;

export const HeroSpan = styled.span`
  color: #ECB22E
`;

export const HeroP = styled.p`
  margin-top: 40px;
  color: #fff;
  font-size: 25px;
  width: 350px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    color: #000;
    max-width: 250px;
    font-weight: 900;
    text-align: center;
    margin-left: 35px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  width: 100px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  border-radius: 5px;
  background: #E01E5A;
  white-space: nowrap;
  padding: 12px 20px;
  color: #fff;
  font-size: 16px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    border: 2px solid #E01E5A;
    background: transparent;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    padding: 12px 40px;
    margin-left: 45px;

    &:hover {
      border: 2px solid #E01E5A;
      background: transparent;
      color: #E01E5A;
    }
  }
`;
