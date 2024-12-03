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
  customStyle?: {
    carouselContainer?: React.CSSProperties;
    carouselViewport?: React.CSSProperties;
    carouselTrack?: React.CSSProperties;
    navButton?: React.CSSProperties;
    list?: React.CSSProperties;
  };
}

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CarouselViewport = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
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

const NavButton = styled.button<{ position: "left" | "right" }>`
  background: whitesmoke;
  color: #333;
  border: none;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 10px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease;
  ${(props) => (props.position === "left" ? "left: 17px;" : "right: 17px;")}

  &:hover {
    background: #ed2a26;
    color: white;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

const Carousel: React.FC<CarouselProps> = ({
  children,
  itemWidth,
  slideDistance,
  customStyle,
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [translate, setTranslate] = useState<number>(0);
  const [disableLeft, setDisableLeft] = useState<boolean>(true);
  const [disableRight, setDisableRight] = useState<boolean>(false);

  const maxTranslate = useCallback(() => {
    if (!sliderRef.current) return 0;
    return Math.min(
      0,
      -(
        React.Children.count(children) * itemWidth -
        sliderRef.current.offsetWidth
      ),
    );
  }, [children, itemWidth]);

  useEffect(() => {
    setTranslate((prev) => Math.max(maxTranslate(), Math.min(0, prev)));
  }, [maxTranslate]);

  useEffect(() => {
    setDisableLeft(translate === 0);
    setDisableRight(translate === maxTranslate());
  }, [translate, maxTranslate]);

  const slide = (direction: number) => {
    setTranslate((prev) => {
      const newTranslate = prev + direction * slideDistance;
      return Math.max(maxTranslate(), Math.min(0, newTranslate));
    });
  };

  return (
    <CarouselContainer style={customStyle?.carouselContainer}>
      <CarouselViewport style={customStyle?.carouselViewport}>
        <NavButton
          style={customStyle?.navButton}
          position="left"
          onClick={() => slide(1)}
          disabled={disableLeft}
        >
          <FaChevronLeft />
        </NavButton>
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
        <NavButton
          style={customStyle?.navButton}
          position="right"
          onClick={() => slide(-1)}
          disabled={disableRight}
        >
          <FaChevronRight />
        </NavButton>
      </CarouselViewport>
    </CarouselContainer>
  );
};

export default Carousel;
