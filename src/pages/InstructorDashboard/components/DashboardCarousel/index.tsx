import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styled from "styled-components";

interface CarouselProps {
  children: ReactNode;
  itemWidth: number;
  slideDistance: number;
  title: string;
  customStyle?: {
    carouselContainer?: React.CSSProperties;
    carouselViewport?: React.CSSProperties;
    carouselTrack?: React.CSSProperties;
    navButton?: React.CSSProperties;
    list?: React.CSSProperties;
  };
  resetPositionClose: boolean;
  resetPositionOpen: boolean;
}

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const CarouselViewport = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  padding: 10px;
`;

const List = styled.div`
  width: 100%;
  overflow: hidden;
`;

const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
`;

const NavButton = styled.button`
  background: whitesmoke;
  color: #333;
  border: none;
  cursor: pointer;
  font-size: 0.8rem;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease;
  &:hover {
    background: #ed2a26;
    color: white;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

const HeadContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const TitleH4 = styled.h4`
  display: block;
  box-sizing: border-box;
  font-size: 18px;
  font-family: Roboto, sans-serif;
  font-weight: 500;
  text-align: left;
`;

const Button = styled.div`
  display: flex;
  gap: 7px;
`;

const DashboardCarousel: React.FC<CarouselProps> = ({
  children,
  itemWidth,
  slideDistance,
  customStyle,
  title,
  resetPositionClose,
  resetPositionOpen,
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [translate, setTranslate] = useState<number>(0);
  const [disableLeft, setDisableLeft] = useState<boolean>(true);
  const [disableRight, setDisableRight] = useState<boolean>(false);

  const maxTranslate = useCallback(() => {
    if (!sliderRef.current) return 0;
    const totalWidth = React.Children.count(children) * itemWidth;
    return Math.min(0, -(totalWidth - sliderRef.current.offsetWidth));
  }, [children, itemWidth]);

  useEffect(() => {
    setTranslate((prev) => Math.max(maxTranslate(), Math.min(0, prev)));
  }, [maxTranslate]);

  useEffect(() => {
    setDisableLeft(translate === 0);
    setDisableRight(translate === maxTranslate());
  }, [translate, maxTranslate]);

  useEffect(() => {
    if (resetPositionClose || resetPositionOpen) {
      setTranslate(0);
    }
  }, [resetPositionClose, resetPositionOpen]);

  const slide = (direction: number) => {
    setTranslate((prev) => {
      const newTranslate = prev + direction * slideDistance;
      return Math.max(maxTranslate(), Math.min(0, newTranslate));
    });
  };

  return (
    <CarouselContainer style={customStyle?.carouselContainer}>
      <CarouselViewport style={customStyle?.carouselViewport}>
        <HeadContent>
          <TitleH4>{title}</TitleH4>
          <Button>
            <NavButton
              style={customStyle?.navButton}
              onClick={() => slide(1)}
              disabled={disableLeft}
            >
              <FaChevronLeft />
            </NavButton>
            <NavButton
              style={customStyle?.navButton}
              onClick={() => slide(-1)}
              disabled={disableRight}
            >
              <FaChevronRight />
            </NavButton>
          </Button>
        </HeadContent>
        <List ref={sliderRef} style={customStyle?.list}>
          <CarouselTrack
            style={{
              ...customStyle?.carouselTrack,
              transform: `translateX(${translate}px)`,
            }}
          >
            {children}
          </CarouselTrack>
        </List>
      </CarouselViewport>
    </CarouselContainer>
  );
};

export default DashboardCarousel;
