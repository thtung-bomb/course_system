import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import List from "./components/List";
import ListQuestion from "./components/ListQuestion";

interface DataItem {
  id: number;
  title: string;
}

interface ExpandableListProps {
  title: string;
  dataList: DataItem[];
  isOpen: boolean;
  onToggle: () => void;
}

const HomeLink = styled(Link)`
  color: #333;
  text-decoration: none;

  &:hover {
    color: #333;
  }
`;
const HeadContainer = styled.div`
  display: flex;
  font-size: 16px;
  width: 100%;
`;
const PaidMembershipText = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-top: 36px;
  width: 100%;
  margin-bottom: 26px;
`;
const SubHeader = styled.div`
  width: 100%;
  background-color: #fff;
  border: 0.5px solid #efefef;
  box-sizing: border-box;
  padding-left: 170px;
  margin-top: 60px;
  height: 120px;
`;
const PaidMembershipContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f9fa;
  width: 100%;
`;
const PaidText = styled.div`
  color: #808080;
  text-decoration: none;
  width: 130px;
`;
const Header = styled.div`
  display: flex;
  width: 190px;
  justify-content: space-between;
  font-size: 14px;
  padding-top: 20px;
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 3%;
  height: 100%;
`;
const ColLeft = styled.div`
  flex: 0 0 auto;
  width: 579px;
  margin-right: 20px;
  height: 100%;
`;

const ColRight = styled.div`
  flex: 0 0 auto;
  width: 579px;
  height: 100%;
`;
const BoxFirst = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 24px;
  width: 578px;
`;
const BoxSecond = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 24px;
  width: 578px;
`;
const BoxThird = styled.div`
  background: #fff;
  width: 100%;
  float: left;
  border-radius: 4px;
  border: 1px solid #efefef;
  transition: all 0.2s ease-in-out;
  margin-top: 45px;
  margin-bottom: 38px;
  padding: 0 30px 10px;
  box-shadow: -3px 3px 8px 1px rgba(0, 0, 0, 0.1);
  width: 1180px;
`;
const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #333;
`;
const HeadBox = styled.div`
  height: 112px;
`;
const HeadLeft = styled.div`
  float: left;
`;
const HeadTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
  color: #333;
  height: 30px;
`;
const HeadContentFirst = styled.div`
  color: red;
  height: 26px;
  font-size: 18px;
  margin-bottom: 10px;
`;
const HeadContentSecond = styled.div`
  color: gray;
  height: 26px;
  font-size: 14px;
  font-weight: 500;
`;
const HeadRight = styled.div`
  float: right;
`;
const Img = styled.img`
  width: 100px;
  height: 100px;
`;
const HeadDes = styled.div`
  font-size: 16px;
  color: #888888;
  margin-top: 40px;
  margin-bottom: 24px;
  height: 30px;
`;
const WrapCategory = styled.div`
  flex: 0 0 auto;
  width: 100%;
`;

const shopListFirst = [
  {
    id: 1,
    title:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.le VHS.",
  },
];
const courseListFirst = [
  {
    id: 1,
    title:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.le VHS.",
  },
];
const emailMktListFirst = [
  {
    id: 1,
    title:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.le VHS.",
  },
];
const messagingListFirst = [
  {
    id: 1,
    title:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.le VHS.",
  },
];
const saleListFirst = [
  {
    id: 1,
    title:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.le VHS.",
  },
];
const supportListFirst = [
  {
    id: 1,
    title:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.le VHS.",
  },
];
const shopListSecond = [
  {
    id: 1,
    title:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.le VHS.",
  },
];
const courseListSecond = [
  {
    id: 1,
    title:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.le VHS.",
  },
];
const emailMktListSecond = [
  {
    id: 1,
    title:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.le VHS.",
  },
];
const messagingListSecond = [
  {
    id: 1,
    title:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.le VHS.",
  },
];
const saleListSecond = [
  {
    id: 1,
    title:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.le VHS.",
  },
];
const supportListSecond = [
  {
    id: 1,
    title:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.le VHS.",
  },
];
const membershipListSecond = [
  {
    id: 1,
    title:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.le VHS.",
  },
];
const blogListSecond = [
  {
    id: 1,
    title:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.le VHS.",
  },
];
const affiliateListSecond = [
  {
    id: 1,
    title:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.le VHS.",
  },
];
const codeListSecond = [
  {
    id: 1,
    title:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.le VHS.",
  },
];

const question1 = [
  {
    id: 1,
    title:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.le VHS.",
  },
];
const question2 = [
  {
    id: 1,
    title:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.",
  },
];
const question3 = [
  {
    id: 1,
    title:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.",
  },
];
const question4 = [
  {
    id: 1,
    title:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.le VHS.",
  },
];
const question5 = [
  {
    id: 1,
    title:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.",
  },
];
const question6 = [
  {
    id: 1,
    title:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.",
  },
];
const question7 = [
  {
    id: 1,
    title:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.le VHS.",
  },
];
const question8 = [
  {
    id: 1,
    title:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.",
  },
];
const question9 = [
  {
    id: 1,
    title:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squidAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squidAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squidAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid",
  },
];

const Memberships = styled.div`
  width: 100%;
  font-size: 18px;
  display: flex;
  align-items: baseline;
  padding-bottom: 12px;
  border-bottom: 1px solid #efefef;
  align-items: center;
  justify-items: center;
  color: #686f7a;
  font-weight: 500;
`;
const Affiliate = styled.div`
  width: 100%;
  font-size: 18px;
  display: flex;
  align-items: baseline;
  padding-bottom: 12px;
  border-bottom: 1px solid #efefef;
  align-items: center;
  justify-items: center;
  color: #686f7a;
  font-weight: 500;
  margin-top: 16px;
`;
const Blog = styled.div`
  width: 100%;
  font-size: 18px;
  display: flex;
  align-items: baseline;
  padding-bottom: 12px;
  border-bottom: 1px solid #efefef;
  align-items: center;
  justify-items: center;
  color: #686f7a;
  font-weight: 500;
  margin-top: 16px;
`;
const Code = styled.div`
  width: 100%;
  font-size: 18px;
  display: flex;
  align-items: baseline;
  padding-bottom: 12px;
  align-items: center;
  justify-items: center;
  color: #686f7a;
  font-weight: 500;
  margin-top: 16px;
  margin-bottom: 16px;
`;
const Icon = styled.div`
  width: 30px;
  font-size: 30px;
  margin-right: 10px;
  padding-bottom: 6px;
`;
const Button = styled.button`
  width: 517px;
  height: 50px;
  color: white;
  background-color: red;
  border: none;
  border-radius: 3px;
  &:hover {
    background-color: black;
  }
`;
const Content = styled.div`
  height: 100%;
`;
const HeadContent = styled.div`
  width: 1179px;
  height: 69px;
`;
const HeadFirst = styled.div`
  width: 1179px;
  height: 26px;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 16px;
`;
const HeadSecond = styled.div`
  width: 1179px;
  height: 26px;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  color: #686f7a;
`;

const BreadCrumbs = () => {
  return (
    <HeadContainer>
      <Header>
        <HomeLink to="/">Home</HomeLink>
        <div>/</div>
        <PaidText>Paid Membership</PaidText>
      </Header>
    </HeadContainer>
  );
};

const PaidMembership = () => {
  const [openList, setOpenList] = useState<number | null>(null);

  const handleToggle = (listId: number) => {
    setOpenList(openList === listId ? null : listId);
  };
  return (
    <PaidMembershipContainer>
      <SubHeader>
        <BreadCrumbs />
        <PaidMembershipText>Paid Membership</PaidMembershipText>
      </SubHeader>
      <Container>
        <ColLeft>
          <BoxFirst>
            <HeadBox>
              <HeadLeft>
                <HeadTitle>Baby Plan</HeadTitle>
                <HeadContentFirst>$49/month</HeadContentFirst>
                <HeadContentSecond>
                  Save $79 when paid annually
                </HeadContentSecond>
              </HeadLeft>
              <HeadRight>
                <Img src="https://gambolthemes.net/html-items/cursus-new-demo/images/membership/icon-1.svg" />
              </HeadRight>
            </HeadBox>

            <HeadDes>
              For instructors launching their first digital products.
            </HeadDes>

            <WrapCategory>
              <List
                title="Your own shop"
                dataList={shopListFirst}
                isOpen={openList === 1}
                onToggle={() => handleToggle(1)}
              />
              <List
                title="Online courses"
                dataList={courseListFirst}
                isOpen={openList === 2}
                onToggle={() => handleToggle(2)}
              />
              <List
                title="Email marketing"
                dataList={emailMktListFirst}
                isOpen={openList === 3}
                onToggle={() => handleToggle(3)}
              />
              <List
                title="Messaging"
                dataList={messagingListFirst}
                isOpen={openList === 4}
                onToggle={() => handleToggle(4)}
              />
              <List
                title="Zero charges comissions 10 sales"
                dataList={saleListFirst}
                isOpen={openList === 5}
                onToggle={() => handleToggle(5)}
              />
              <List
                title="7-days-a-week support"
                dataList={supportListFirst}
                isOpen={openList === 6}
                onToggle={() => handleToggle(6)}
              />
            </WrapCategory>
            <Memberships>
              {" "}
              <Icon>
                <GrFormClose />
              </Icon>{" "}
              Memberships
            </Memberships>
            <Blog>
              {" "}
              <Icon>
                <GrFormClose />
              </Icon>{" "}
              Blog
            </Blog>
            <Affiliate>
              {" "}
              <Icon>
                <GrFormClose />
              </Icon>{" "}
              Affiliate marketings
            </Affiliate>
            <Code>
              {" "}
              <Icon>
                <GrFormClose />
              </Icon>{" "}
              Third-party code
            </Code>
            <Button>Purcharse Membership</Button>
          </BoxFirst>
        </ColLeft>
        <ColRight>
          <BoxSecond>
            <HeadBox>
              <HeadLeft>
                <HeadTitle>Bussiness Plan</HeadTitle>
                <HeadContentFirst>$99/month</HeadContentFirst>
                <HeadContentSecond>
                  Save $189 when paid annually
                </HeadContentSecond>
              </HeadLeft>
              <HeadRight>
                <Img src="https://gambolthemes.net/html-items/cursus-new-demo/images/membership/icon-2.svg" />
              </HeadRight>
            </HeadBox>

            <HeadDes>
              For instructors who are ready to grow their business.
            </HeadDes>

            <WrapCategory>
              <List
                title="Your own shop"
                dataList={shopListSecond}
                isOpen={openList === 7}
                onToggle={() => handleToggle(7)}
              />
              <List
                title="Online courses"
                dataList={courseListSecond}
                isOpen={openList === 8}
                onToggle={() => handleToggle(8)}
              />
              <List
                title="Email marketing"
                dataList={emailMktListSecond}
                isOpen={openList === 9}
                onToggle={() => handleToggle(9)}
              />
              <List
                title="Messaging"
                dataList={messagingListSecond}
                isOpen={openList === 10}
                onToggle={() => handleToggle(10)}
              />
              <List
                title="Zero charges comissions 10 sales"
                dataList={saleListSecond}
                isOpen={openList === 11}
                onToggle={() => handleToggle(11)}
              />
              <List
                title="7-days-a-week support"
                dataList={supportListSecond}
                isOpen={openList === 12}
                onToggle={() => handleToggle(12)}
              />
              <List
                title="Memberships"
                dataList={membershipListSecond}
                isOpen={openList === 13}
                onToggle={() => handleToggle(13)}
              />
              <List
                title="Blog"
                dataList={blogListSecond}
                isOpen={openList === 14}
                onToggle={() => handleToggle(14)}
              />
              <List
                title="Affiliate marketings"
                dataList={affiliateListSecond}
                isOpen={openList === 15}
                onToggle={() => handleToggle(15)}
              />
              <List
                title="Third-party code"
                dataList={codeListSecond}
                isOpen={openList === 16}
                onToggle={() => handleToggle(16)}
              />
            </WrapCategory>
            <Button>Purcharse Membership</Button>
          </BoxSecond>
        </ColRight>
      </Container>
      <Content>
        <HeadContent>
          <HeadFirst>Membership FAQ</HeadFirst>
          <HeadSecond>Wait, what about…</HeadSecond>
        </HeadContent>
        <BoxThird>
          <WrapCategory>
            <ListQuestion
              title="Is it easy to change plans?"
              dataList={question1}
              isOpen={openList === 17}
              onToggle={() => handleToggle(17)}
            />
            <ListQuestion
              title="Can I cancel at any time?"
              dataList={question2}
              isOpen={openList === 18}
              onToggle={() => handleToggle(18)}
            />
            <ListQuestion
              title="Are there any credit card or PayPal fees?"
              dataList={question3}
              isOpen={openList === 19}
              onToggle={() => handleToggle(19)}
            />
            <ListQuestion
              title="Do I have to choose my plan before I start my trial?"
              dataList={question4}
              isOpen={openList === 20}
              onToggle={() => handleToggle(20)}
            />
            <ListQuestion
              title="Edututs+ isn’t for me. Can I have a refund?"
              dataList={question5}
              isOpen={openList === 21}
              onToggle={() => handleToggle(21)}
            />
            <ListQuestion
              title="How do I get my money?"
              dataList={question6}
              isOpen={openList === 22}
              onToggle={() => handleToggle(22)}
            />
            <ListQuestion
              title="Do I need a credit card to sign up?"
              dataList={question7}
              isOpen={openList === 23}
              onToggle={() => handleToggle(23)}
            />
            <ListQuestion
              title="Is Edututs+ safe and secure for online transactions?"
              dataList={question8}
              isOpen={openList === 24}
              onToggle={() => handleToggle(24)}
            />
            <ListQuestion
              title="I still have questions. HELP!"
              dataList={question9}
              isOpen={openList === 25}
              onToggle={() => handleToggle(25)}
            />
          </WrapCategory>
        </BoxThird>
      </Content>
    </PaidMembershipContainer>
  );
};

export default PaidMembership;
