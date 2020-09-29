import React from "react";
import styled from "styled-components/macro";
import { Flex } from "./core";
import { space, SpaceProps } from "styled-system";

export const ScreenWidth = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const AppWidth = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 1070px;
`;

const StyledTopNav = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: rgb(215, 233, 241);
  height: 40px;
`;

const StyledGroup = styled.div`
  display: flex;
  height: 100%;
`;

const StyledButton = styled.button<{ isActive?: boolean }>`
  font-size: 12px;
  background: ${({ isActive }) => (isActive ? "#fff" : "none")};
  height: 100%;
  padding: 0 30px;
  color: rgb(2, 56, 85);
  cursor: pointer;
`;

const SpecialButton = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  font-weight: lighter;
  border-radius: 26px;
  color: #fff;
  border: 1px solid #ccc;
  background: linear-gradient(to bottom right, #27aade, #0a9bd6);
`;

const Link = styled.button<SpaceProps>`
  background: none;
  color: rgb(1, 55, 84);
  font-size: 14px;
  font-weight: 500;
  padding: 0;

  ${space}
`;

export const TopNav = () => {
  return (
    <ScreenWidth>
      <StyledTopNav>
        <AppWidth>
          <StyledGroup>
            <StyledButton isActive={true}>VERSLUI</StyledButton>
            <StyledButton>KARJERA</StyledButton>
            <StyledButton>APIE BANKA</StyledButton>
            <StyledButton>KONTAKTAI</StyledButton>
          </StyledGroup>
        </AppWidth>
      </StyledTopNav>
    </ScreenWidth>
  );
};

export const Header = () => {
  return (
    <ScreenWidth>
      <AppWidth>
        <Flex flex="1 1 auto" flexDirection="column">
          <Flex
            justifyContent="space-between"
            alignItems="center"
            height="100px"
          >
            <Flex>
              <img
                src="https://danskebank.lt/-/media/danske-bank/img/danske-bank-logo.svg?rev=a13a4502e1c44793b546d27dc57b9ecc&hash=F1E89BA245ED6553FC552E1A0B7AE919"
                alt="logo"
              />
            </Flex>
            <Flex alignItems="center">
              <Link mr={3}>EN</Link>
              <Link mr={3}>EE</Link>
              <Link mr={3}>LV</Link>
              <Link mr={3}>{`🔍`}</Link>
              <SpecialButton>Danske eBankas {`🔓`}</SpecialButton>
            </Flex>
          </Flex>
          <Flex alignItems="center" mb={4} justifyContent="space-between">
            <Flex>
              <Link mr={4}>Kasdiene Bankininkyste</Link>
              <Link mr={4}>Elektrine Bankininkyste</Link>
              <Link mr={4}>Finansavimas</Link>
              <Link mr={4}>Taupymas ir investavimas</Link>
            </Flex>
          </Flex>
        </Flex>
      </AppWidth>
    </ScreenWidth>
  );
};

const StyledImage = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyledCard = styled.div`
  display: flex;
  flex: 1 1 auto;
  width: 400px;
  background: rgb(1, 55, 84);
  border-left: 5px solid #fff;
`;

const StyledBanner = styled.div`
  width: 100%;
  max-width: 1400px;
  overflow: hidden;
`;

export const Banner: React.FC = ({ children }) => {
  return (
    <ScreenWidth>
      <StyledBanner>
        <Flex width="100%" height="450px">
          <StyledImage>
            <img
              src="https://danskebank.lt/-/media/danske-bank/lt/images/26/sasha-instagram-com-sanfrancisco-134404-unsplash.jpg?rev=5929573e54f145759ab4373d2d43cc81&mw=950&hash=A59328B150AC95327A5903C82AEE5FA5"
              alt="banner"
            />
          </StyledImage>
          <StyledCard>{children}</StyledCard>
        </Flex>
      </StyledBanner>
    </ScreenWidth>
  );
};
