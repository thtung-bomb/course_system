import styled from "styled-components";
import { VscDebugStart } from "react-icons/vsc";
import { CiHeart, CiStar } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { TiFlagOutline } from "react-icons/ti";
import { useState } from "react";
import { LuMessageCircle } from "react-icons/lu";
import { TbMessageChatbot } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import LiveStreamInfor from "@components/LiveStreamInfor";
import ListItem from "@components/ListItem";
import { ListData } from "@interfaces/model/ItemContent";
import About from "@components/ListItem/components/About";
import CoursesContent from "@components/ListItem/components/CoursesContent";
import Reviews from "@components/ListItem/components/Reviews";

const WrapContent = styled.div``;
const TopContent = styled.div`
  margin-top: 60px;
  background-color: #333333;
  padding: 30px;
  display: flex;
  gap: 20px;
`;
const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const WrapVideo = styled.div`
  position: relative;
  cursor: pointer;
  width: fit-content;
  &:hover .play-icon-wrapper {
    opacity: 0.9;
  }
`;

const Video = styled.img`
  border-radius: 4px;
  border: 10px solid white;
  height: 210px;
  width: 373px;
`;
const ContextVideo = styled.span`
  position: absolute;
  padding: 10px 0px;
  text-align: center;
  color: white;
  background: rgba(51, 51, 51, 0.9);
  left: 9px;
  width: 355px;
  font-weight: 500;
  font-size: 14px;
  bottom: 12px;
`;

const BestSellerTag = styled.span`
  border-radius: 3px;
  font-size: 10px;
  position: absolute;
  padding: 2px 10px;
  background: #fa8305;
  border: none;
  color: #fff;
  font-weight: 600;
  line-height: 1.5;
  right: 9px;
  text-align: center;
  text-transform: uppercase;
  top: 20px;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  box-shadow:
    0 0 1px 1px rgba(20, 23, 28, 0.1),
    0 3px 1px 0 rgba(20, 23, 28, 0.1);
  &:after {
    background: inherit;
    content: "";
    height: 12px;
    position: absolute;
    top: 3px;
    transform: rotate(45deg);
    width: 12px;
    z-index: 1;
    display: block;
    left: -5px;
  }
`;
const PlayIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(51, 51, 51, 0.9);
  border-radius: 50%;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const PlayIcon = styled(VscDebugStart)`
  color: white;
  font-size: 20px;
`;

const WrapPreviewVideo = styled.div`
  display: flex;
  gap: 24px;
`;
const HeartWrapper = styled.div`
  cursor: pointer;
  font-size: 20px;
  color: white;
`;
const CustomizeFaHeart = styled(FaHeart)`
  height: 16px;
`;
const WrapItemPreviewVideo = styled.div`
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  gap: 8px;
  align-items: center;
`;
const RightContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const TitleVideo = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 15px;
`;
const DesVideo = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #f7f7f7;
`;
const WrapRating = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 2px;
`;
const Rating = styled.span`
  background: #fdcc0d;
  color: #fff;
  padding: 3px 15px 3px 10px;
  border-radius: 3px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  display: flex;
  gap: 2px;
  align-items: center;
`;
const NumberRating = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: 400;
`;
const NumberEnroll = styled.p`
  margin-top: 20px;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
`;
const WrapInforVideo = styled.div`
  margin-top: 20px;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  gap: 20px;
`;
const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const IconInfo = styled.div`
  font-size: 20px;
`;
const TimeUpdate = styled.p`
  margin-top: 20px;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
`;
const WrapBtn = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 10px;
`;
const BtnCustomize = styled.button`
  background: #ed2a26;
  border: 1px solid #ed2a26;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  padding: 0 20px;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background: #c72127;
    border: 1px solid #c72127;
  }
`;

const PrimaryBtnCustomize = styled(BtnCustomize)`
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
  &:hover {
    color: #fff;
    background: #c72127;
    border: 1px solid #c72127;
  }
`;
const ConfirmBuying = styled.p`
  margin-top: 10px;
  color: #fff;
  font-size: 12px;
  font-weight: 400;
`;
const BottomContent = styled.div`
  background-color: #fff;
`;
const WrapLiveStreamInfor = styled.div`
  padding: 20px 30px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  position: relative;
`;

const CloseButton = styled.button`
  background: #ed2a26;
  color: #fff;
  border: none;
  padding: 10px;
  top: -10px;
  right: 0px;
  border-radius: 4px;
  position: absolute;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background: #555;
  }
`;
const listdata: ListData[] = [
  {
    id: 1,
    name: "About",
    detail: About,
  },
  {
    id: 2,
    name: "Courses Content",
    detail: CoursesContent,
  },
  {
    id: 3,
    name: "Reviews",
    detail: Reviews,
  },
];
const ProductDetail = () => {
  const [showModal, setShowModal] = useState(false);
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <WrapContent>
      <TopContent>
        <LeftContent>
          <WrapVideo onClick={toggleModal}>
            <BestSellerTag>BestSeller</BestSellerTag>
            <Video
              src="https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-2.jpg"
              alt="video"
            />
            <ContextVideo>Preview this course</ContextVideo>
            <PlayIconWrapper className="play-icon-wrapper">
              <PlayIcon />
            </PlayIconWrapper>
          </WrapVideo>
          <WrapPreviewVideo>
            <WrapItemPreviewVideo onClick={toggleLike}>
              <HeartWrapper>
                {liked ? <CustomizeFaHeart /> : <CiHeart />}
              </HeartWrapper>
              Save
            </WrapItemPreviewVideo>
            <WrapItemPreviewVideo>
              <HeartWrapper>
                <TiFlagOutline />
              </HeartWrapper>
              Report abuse
            </WrapItemPreviewVideo>
          </WrapPreviewVideo>
        </LeftContent>
        <RightContent>
          <TitleVideo>The Web Developer Bootcamp</TitleVideo>
          <DesVideo>
            The only course you need to learn web development - HTML, CSS, JS,
            Node, and More!
          </DesVideo>
          <WrapRating>
            <Rating>
              <CiStar />
              5.3.2
            </Rating>
            <NumberRating>(81,665 ratings)</NumberRating>
          </WrapRating>
          <NumberEnroll>114,521 students enrolled</NumberEnroll>
          <WrapInforVideo>
            <ItemInfo>
              <IconInfo>
                <LuMessageCircle />
              </IconInfo>
              English
            </ItemInfo>
            <ItemInfo>
              <IconInfo>
                <TbMessageChatbot />
              </IconInfo>
              English, Dutch 12 more
            </ItemInfo>
          </WrapInforVideo>
          <TimeUpdate>Last updated 1/2024</TimeUpdate>
          <WrapBtn>
            <BtnCustomize>Add to Cart</BtnCustomize>
            <PrimaryBtnCustomize>Buy Now</PrimaryBtnCustomize>
          </WrapBtn>
          <ConfirmBuying>30-Day Money-Back Guarantee</ConfirmBuying>
        </RightContent>
      </TopContent>
      <BottomContent>
        <WrapLiveStreamInfor>
          <LiveStreamInfor
            author="Nguyen Kane"
            totalLike="100"
            totalView="10000"
            totalDisLike="2"
            totalShare="120"
          />
        </WrapLiveStreamInfor>

        <ListItem listdata={listdata} position="center" />
      </BottomContent>
      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <iframe
              width="700"
              height="400"
              src="https://www.youtube.com/embed/kfEODur93Xs?si=p9NVVMpwgm25vSrv"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <CloseButton onClick={toggleModal}>
              <IoClose />
            </CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </WrapContent>
  );
};

export default ProductDetail;
