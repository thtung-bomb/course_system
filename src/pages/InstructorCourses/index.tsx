import React, { useState } from 'react';
import styled from 'styled-components';
import { LuDownload } from "react-icons/lu";
import { LuBookMinus } from "react-icons/lu";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import { PiExportBold } from "react-icons/pi";
import { GoTag } from "react-icons/go";
import { GrAnnounce } from "react-icons/gr";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { BsPrinter } from "react-icons/bs";
import { BiCategory } from 'react-icons/bi';



interface Tab {
  name: string;
  content: JSX.Element;
  icon?: JSX.Element;
}

interface Course {
  itemNo: string;
  title: string;
  date: string;
  sales: number;
  parts: number;
  category: string;
  status: string;
}

interface UpcomingCourse {
  itemNo: string;
  title: string;
  thumbnail: string;
  category: string;
  price: string;
  date: string;
  status: string;
}

interface Discount {
  itemNo: string;
  title: string;
  start: string;
  end: string;
  price: string;
  discount: string;
  status: string;
}


const Setting: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("My Courses");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const [courses, setCourses] = useState([
    { itemNo: 'IT-001', title: 'Course Title Here', date: '06 April 2020 | 08:31', sales: 15, parts: 5, category: 'Web Development', status: 'Active' },
    { itemNo: 'IT-002', title: 'Course Title Here', date: '05 April 2020 | 05:15', sales: 30, parts: 3, category: 'Graphic Design', status: 'Active' },
    { itemNo: 'IT-003', title: 'Course Title', date: '03 April 2020 | 01:30', sales: 14, parts: 5, category: 'Bootstrap', status: 'Active' },
    { itemNo: 'IT-004', title: 'Course Title Here', date: '02 April 2020 | 05:15', sales: 110, parts: 9, category: 'Game Development', status: 'Active' },
    { itemNo: 'IT-005', title: 'Course Title Here', date: '28 March 2020 | 05:15', sales: 185, parts: 10, category: 'C++', status: 'Active' }
  ]);

  const [purchases, setPurchases] = useState([
    { itemNo: '001', title: 'Course Title Here', vendor: 'Zoena Singh', category: 'Web Development', deliveryType: 'Download', price: '$15', purchaseDate: '25 March 2020' },
    { itemNo: '002', title: 'Course Title Here', vendor: 'Rock William', category: 'C++', deliveryType: 'Download', price: '$20', purchaseDate: '20 March 2020' },
  ]);

  const [upcomingCourses, setUpcomingCourses] = useState([
    { itemNo: '01', title: 'Course Title Here', thumbnail: 'View', category: 'Web Development', price: '$15', date: '9 April 2020', status: 'Pending' },
    { itemNo: '02', title: 'Course Title Here', thumbnail: 'View', category: 'Graphic Design', price: '$12', date: '8 April 2020', status: 'Pending' },
    { itemNo: '03', title: 'Course Title', thumbnail: 'View', category: 'Photography', price: '$6', date: '7 April 2020', status: 'Pending' },
  ]);

  const [discounts, setDiscounts] = useState([
    { itemNo: '01', title: 'Course Title Here', start: '02 November 2019', end: '19 November 2019', price: '$15', discount: '20%', status: 'Active' },
  ]);

  const [editedCourse, setEditedCourse] = useState<Course | null>(null);
  const [editedUpcomingCourse, setEditedUpcomingCourse] = useState<UpcomingCourse | null>(null);
  const [editedDiscount, setEditedDiscount] = useState<Discount | null>(null);

  const handleDeleteClick = (type: string, itemNo: string) => {
    switch (type) {
      case 'courses':
        setCourses(prevCourses => prevCourses.filter(course => course.itemNo !== itemNo));
        break;
      case 'upcomingCourses':
        setUpcomingCourses(prevCourses => prevCourses.filter(course => course.itemNo !== itemNo));
        break;
      case 'discounts':
        setDiscounts(prevCourses => prevCourses.filter(course => course.itemNo !== itemNo));
        break;
      case 'purchases':
        setPurchases(prevCourses => prevCourses.filter(purchase => purchase.itemNo !== itemNo));
        break;
      default:
        break;
    }
  };

const handleEditClick = (type: string, item: Course | UpcomingCourse | Discount) => {
  switch (type) {
    case 'courses':
      setEditedCourse(item as Course);
      break;

    case 'upcomingCourses':
      setEditedUpcomingCourse(item as UpcomingCourse);
      break;

    case 'discounts':
      setEditedDiscount(item as Discount);
      break;

    default:
      break;
  }
};



  const handleEditSubmit = (event: React.FormEvent<HTMLFormElement>, type: string) => {
    event.preventDefault();
    switch (type) {
      case 'courses':
        if (editedCourse) {
          setCourses(prevCourses =>
            prevCourses.map(course => (course.itemNo === editedCourse.itemNo ? editedCourse : course))
          );
          setEditedCourse(null);
        }
        break;

      case 'upcomingCourses':
        if (editedUpcomingCourse) {
          setUpcomingCourses(prevCourses =>
            prevCourses.map(course => (course.itemNo === editedUpcomingCourse.itemNo ? editedUpcomingCourse : course))
          );
          setEditedUpcomingCourse(null);
        }
        break;

      case 'discounts':
        if (editedDiscount) {
          setDiscounts(prevCourses =>
            prevCourses.map(course => (course.itemNo === editedDiscount.itemNo ? editedDiscount : course))
          );
          setEditedDiscount(null);
        }
        break;
        default:
        break;
    }
  };




  const tabs: Tab[] = [
    {
      name: "My Courses",
      icon: <LuBookMinus size={16} />,
      content: (
        <div>
          <CoursesTable>
            <thead>
              <tr>
                <th>Item No.</th>
                <th>Title</th>
                <th className="center">Publish Date</th>
                <th className='center'>Sales</th>
                <th className='center'>Parts</th>
                <th className="center">Category</th>
                <th className='center'>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr key={index}>
                  <td>{course.itemNo}</td>
                  <td>{course.title}</td>
                  <td className='center'>{course.date}</td>
                  <td className='center'>{course.sales}</td>
                  <td className='center'>{course.parts}</td>
                  <td className='center'><Link>{course.category}</Link></td>
                  <td><Status isActive={course.status === 'Active'}>{course.status}</Status></td>
                  <td>
                    <ActionButtons>
                      <EditIcon size={18} onClick={() => handleEditClick('courses', course)} />
                      <DeleteIcon size={18} onClick={() => handleDeleteClick('courses', course.itemNo)} />
                    </ActionButtons>
                  </td>
                </tr>
              ))}
            </tbody>
          </CoursesTable>
          {editedCourse && (
            <EditForm onSubmit={(e) => handleEditSubmit(e, 'courses')}>
              <h3>Edit Course</h3>
              <label>
                Title:
                <input
                  type="text"
                  name="title"
                  value={editedCourse.title}
                  onChange={(e) => setEditedCourse({ ...editedCourse, title: e.target.value })}
                />
              </label>
              <label>
                Publish Date:
                <input
                  type="date"
                  name="date"
                  value={editedCourse.date}
                  onChange={(e) => setEditedCourse({ ...editedCourse, date: e.target.value })}
                />
              </label>
              <label>
                Sales:
                <input
                  type="number"
                  name="sales"
                  value={editedCourse.sales}
                  onChange={(e) => setEditedCourse({ ...editedCourse, sales: parseInt(e.target.value)  })}
                />
              </label>
              <label>
                Parts:
                <input
                  type="number"
                  name="parts"
                  value={editedCourse.parts}
                  onChange={(e) => setEditedCourse({ ...editedCourse, parts: parseInt(e.target.value) })}
                />
              </label>
              <label>
                Category:
                <input
                  type="text"
                  name="category"
                  value={editedCourse.category}
                  onChange={(e) => setEditedCourse({ ...editedCourse, category: e.target.value })}
                />
              </label>
              <label>
                Status:
                <select
                  name="status"
                  value={editedCourse.status}
                  onChange={(e) => setEditedCourse({ ...editedCourse, status: e.target.value })}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </label>
              <button type="submit">Save Changes</button>
            </EditForm>
          )}
        </div>
      ),
    },
    {
      name: "My Purchases",
      icon: <LuDownload size={16} />,
      content: (
        <div>
          <CoursesTable>
            <thead>
              <tr>
                <th>Item No.</th>
                <th>Title</th>
                <th >Vendor</th>
                <th >Category</th>
                <th className='center'>Delivery Type</th>
                <th className="center">Price</th>
                <th>Purchase Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {purchases.map((purchase, index) => (
                <tr key={index}>
                  <td>{purchase.itemNo}</td>
                  <td>{purchase.title}</td>
                  <td ><Link>{purchase.vendor}</Link></td>
                  <td ><Link>{purchase.category}</Link></td>
                  <td className='center'>{purchase.deliveryType}</td>
                  <td className='center'>{purchase.price}</td>
                  <td>{purchase.purchaseDate}</td>
                  <td>
                    <ActionButtons>
                      <Download size={18}/>
                      <DeleteIcon size={18} onClick={() => handleDeleteClick('purchases', purchase.itemNo)} />
                      <Printer size={18}/>
                    </ActionButtons>
                  </td>
                </tr>
              ))}
            </tbody>
          </CoursesTable>
        </div>
      ),
    },

    {
      name: "Upcoming Courses",
      icon: < PiExportBold size={16} />,
      content: (
        <div>
          <CoursesTable>
            <thead>
              <tr>
                <th>Item No.</th>
                <th>Title</th>
                <th className="center">Thumbnail</th>
                <th className='center'>Category</th>
                <th className='center'>Price</th>
                <th className='center'>Date</th>
                <th className='center'>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {upcomingCourses.map((course, index) => (
                <tr key={index}>
                  <td>{course.itemNo}</td>
                  <td>{course.title}</td>
                  <td className='center'><Link>{course.thumbnail}</Link></td>
                  <td className='center'><Link>{course.category}</Link></td>
                  <td className='center'>{course.price}</td>
                  <td className='center'>{course.date}</td>
                  <td><Status isActive={course.status === 'Active'}>{course.status}</Status></td>
                  <td>
                    <ActionButtons>
                      <EditIcon size={18} onClick={() => handleEditClick('upcomingCourses', course)} />
                      <DeleteIcon size={18} onClick={() => handleDeleteClick('upcomingCourses', course.itemNo)} />
                    </ActionButtons>
                  </td>
                </tr>
              ))}
            </tbody>
          </CoursesTable>
          {editedUpcomingCourse && (
            <EditForm onSubmit={(e) => handleEditSubmit(e, 'upcomingCourses')}>
              <h3>Edit Upcoming Course</h3>
              <label>
                Title:
                <input
                  type="text"
                  name="title"
                  value={editedUpcomingCourse.title}
                  onChange={(e) => setEditedUpcomingCourse({ ...editedUpcomingCourse, title: e.target.value })}
                />
              </label>
              <label>
                Category:
                <input
                  type="text"
                  name="category"
                  value={editedUpcomingCourse.category}
                  onChange={(e) => setEditedUpcomingCourse({ ...editedUpcomingCourse, category: e.target.value })}
                />
              </label>
              <label>
                Price:
                <input
                  type="text"
                  name="price"
                  value={editedUpcomingCourse.price}
                  onChange={(e) => setEditedUpcomingCourse({ ...editedUpcomingCourse, price: e.target.value })}
                />
              </label>
              <label>
                Date:
                <input
                  type="date"
                  name="date"
                  value={editedUpcomingCourse.date}
                  onChange={(e) => setEditedUpcomingCourse({ ...editedUpcomingCourse, date: e.target.value })}
                />
              </label>
              <label>
                Status:
                <select
                  name="status"
                  value={editedUpcomingCourse.status}
                  onChange={(e) => setEditedUpcomingCourse({ ...editedUpcomingCourse, status: e.target.value })}
                >
                  <option value="Pending">Pending</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </label>
              <button type="submit">Save Changes</button>
            </EditForm>
          )}

        </div>
      ),
    },
    {
      name: "Discount",
      icon: < GoTag size={16} />,
      content: (
        <div>
          <NewDiscount>
            <ButtonContainer>
              <h2>New Discount</h2>
              <ToggleButton onClick={toggleExpand}>
                {isExpanded ? <FaMinus size={20} /> : <FaPlus size={20} />}
              </ToggleButton>
            </ButtonContainer>
            <Form className={isExpanded ? 'expanded' : ''}>
              <form>
                <label>
                  <a>Course*</a>
                  <select>
                    <option value="">Select Course</option>
                    <option value="">English</option>
                    <option value="">Korean</option>
                    <option value="">Thailand</option>
                    <option value="">Vietnamese</option>
                    <option value="">Japan</option>
                  </select>
                </label>
                <label>
                  <a>Discount Amount</a>
                  <input type="text" placeholder="Percent (e.g. 20 for 20%)" />
                </label>
                <label>
                  <a>Start Date</a>
                  <input type="date" />
                </label>
                <label>
                  <a>End Date</a>
                  <input type="date" />
                </label>
              </form>
              <button type="submit">Save Changes</button>
            </Form>
          </NewDiscount>
          <CoursesTable>
            <thead>
              <tr>
                <th>Item No.</th>
                <th>Title</th>
                <th className="center">Start Date</th>
                <th className='center'>End Date</th>
                <th className='center'>Price</th>
                <th className="center">Discount</th>
                <th className='center'>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {discounts.map((course, index) => (
                <tr key={index}>
                  <td>{course.itemNo}</td>
                  <td>{course.title}</td>
                  <td className='center'>{course.start}</td>
                  <td className='center'>{course.end}</td>
                  <td className='center'>{course.price}</td>
                  <td className='center'>{course.discount}</td>
                  <td><Status isActive={course.status === 'Active'}>{course.status}</Status></td>
                  <td>
                    <ActionButtons>
                      <EditIcon size={18} onClick={() => handleEditClick('discounts', course)} />
                      <DeleteIcon size={18} onClick={() => handleDeleteClick('discounts', course.itemNo)} />
                    </ActionButtons>
                  </td>
                </tr>
              ))}
            </tbody>
          </CoursesTable>
          {editedDiscount && (
            <EditForm onSubmit={(e) => handleEditSubmit(e, 'discounts')}>
              <h3>Edit Discount</h3>
              <label>
                Title:
                <input
                  type="text"
                  name="title"
                  value={editedDiscount.title}
                  onChange={(e) => setEditedDiscount({ ...editedDiscount, title: e.target.value })}
                />
              </label>
              <label>
                Start Date:
                <input
                  type="date"
                  name="start"
                  value={editedDiscount.start}
                  onChange={(e) => setEditedDiscount({ ...editedDiscount, start: e.target.value })}
                />
              </label>
              <label>
                End Date:
                <input
                  type="date"
                  name="end"
                  value={editedDiscount.end}
                  onChange={(e) => setEditedDiscount({ ...editedDiscount, end: e.target.value })}
                />
              </label>
              <label>
                Price:
                <input
                  type="text"
                  name="price"
                  value={editedDiscount.price}
                  onChange={(e) => setEditedDiscount({ ...editedDiscount, price: e.target.value })}
                />
              </label>
              <label>
                Discount:
                <input
                  type="text"
                  name="discount"
                  value={editedDiscount.discount}
                  onChange={(e) => setEditedDiscount({ ...editedDiscount, discount: e.target.value })}
                />
              </label>
              <label>
                Status:
                <select
                  name="status"
                  value={editedDiscount.status}
                  onChange={(e) => setEditedDiscount({ ...editedDiscount, status: e.target.value })}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </label>
              <button type="submit">Save Changes</button>
            </EditForm>
          )}
        </div>
      ),
    },

    {
      name: "Promotions",
      icon: <GrAnnounce size={18} />,
      content: (
        <PromotionsContainer>
          <Image src="https://gambolthemes.net/html-items/cursus-new-demo/images/dashboard/promotion.svg" alt="Promotion" />
          <PromotionText><a>Baby promotion plan is activated!</a></PromotionText>
          <PromotionText><p>By activating promotion plans you can improve course views and sales.</p></PromotionText>
          <ChangePlanButton>Change New Plan</ChangePlanButton>
        </PromotionsContainer>
      )
    }
  ];

  return (
    <Container>
      <SubContainer>
        <Title>
          <LuBookMinus size={20} style={{ paddingRight: '4px' }} />
          <h1>Courses</h1>
        </Title>
        <Subtitle>
          <LuBookMinus size={30} style={{ color: '#686f7a' }} />
          <h2>Jump Into Course Creation</h2>
          <CreateCourseButton>Create Your Course</CreateCourseButton>
        </Subtitle>

        <TabContainer>
          {tabs.map((tab) => (
            <TabButton
              key={tab.name}
              isActive={activeTab === tab.name}
              onClick={() => handleTabClick(tab.name)}
            >
              {tab.icon && <IconContainer>{tab.icon}</IconContainer>}
              {tab.name}
            </TabButton>
          ))}
        </TabContainer>
        <TabContent>
          {tabs.find((tab) => tab.name === activeTab)?.content}
        </TabContent>

      </SubContainer>
    </Container>
  );
};

export default Setting;


export const Container = styled.div`
  margin:40px;
  margin-top: 90px;
  background-color: rgb(247, 247, 247);
  height: 100%;
  
`;
export const SubContainer = styled.div`
  height: 100% !important;
  width: 100%;
`;


const TabContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
  margin-bottom: 36px;
  background-color: #fff;
  width: 100%;
`;

const TabButton = styled.button<{ isActive: boolean }>`
  display: flex;
  width: 20%;
  align-items: center;
  justify-content: center; 
  padding: 10px 20px;
  border: 2px solid ${(props) => (props.isActive ? '#ed2a26' : 'transparent')};
  background: ${(props) => (props.isActive ? '#ed2a26' : 'none')};
  border-radius: 2px;
  font-weight: ${(props) => (props.isActive ? '500' : 'normal')};
  color: ${(props) => (props.isActive ? '#fff' : '#333')};

  &:hover {
    background-color: #ed2a26;
    color: #fff;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  margin-bottom: 30px;
  
  h1{
    color: #333;
    font-size: 20px;
  }
`;

const IconContainer = styled.div`
  margin-right: 8px;
  padding-bottom: 6px;

`;

const TabContent = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  width: 100%;
`;

export const Subtitle = styled.div`
  display: flex;
  margin-bottom: 50px;
  width: 100%;
  background-color: #fff;
  padding: 30px 20px;
  h2 {  
    padding-left: 20px;
    font-weight: 400;
    font-size: 24px;
  }
 
`;

const CreateCourseButton = styled.button`
  padding: 10px 20px;
  background-color: #ed2a26;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  margin-left: auto;
  height: 40px;

  &:hover {
    background-color: #333;
  }
`;

const CoursesTable = styled.table`
  width: 100%;
  border-collapse:collapse;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  th, td, tr {
    padding: 20px 15px;
    text-align: left;
    font-size: 14;
    font-weight: 400;
    border-bottom: 1px solid #ddd;
    
  }

  th:first-child, td:first-child {
    padding-left: 30px;
  }

  .center {
    text-align: center; 
  }

  th {
    background-color:#fae4e6;;
    color: #333;
    font-size: 14px;
    font-weight: 500;
    padding: 14px 15px ;
  }
  td {
    background-color:#fff;;
  }
  &.discount {
    margin-top: 40px !important;
  }
`;

const Status = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.isActive ? '#155724' : '#ed2a26'};
  padding: 4px 12px;
  font-size: 14px;
  font-weight: 500;
`;


const Link = styled.span`
  color: #4183c4;
  cursor: pointer;
  text-align: center;
  &:hover {
  color: #333;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const EditIcon = styled(CiEdit)`
  cursor: pointer;
  color: #686f7a;
  &:hover {
    color: #333; 
  }
`;

const DeleteIcon = styled(RiDeleteBinLine)`
  cursor: pointer;
  color: #686f7a;
  &:hover {
    color: #333; 
  }
`;

const Printer = styled(BsPrinter)`
  cursor: pointer;
  color: #686f7a;
  &:hover {
    color: #333; 
  }
`;

const Download = styled(LuDownload)`
  cursor: pointer;
  color: #686f7a;
  &:hover {
    color: #333; 
  }
`;

const NewDiscount = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: rgb(0, 0,0,1) ;
`;






const Form = styled.div`
  margin-top: 40px;
  max-height: 0;
  opacity: 0;
  transition: max-height 0.8s ease-in-out, opacity 0.5s ease-in-out;
  overflow: hidden;

  &.expanded {
    max-height: 1000px;
    opacity: 1;
  } 

  form {
    display: flex;
    flex-wrap: wrap;
  
    label {
      display: flex;
      flex-direction: column;
      flex-basis: 34%;
    
      margin-bottom: 20px;
       
        select,
        input {
          width: 90%;
          padding: 10px;
          margin-top: 5px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
      }

    a {
      font-size: 14px;
      font-weight: 500;
      padding: 16px 0;
      width: 60%;
    }
  }

  button {
      background: #ed2a26;
      color: #fff;
      border: none;
      width: 31%;
      height: 40px;
      border-radius: 40px;
      cursor: pointer;
      margin-top: 10px;
      font-size: 14px;
    }

    button:hover {
      background: #333;
    }

`;

const ToggleButton = styled.button`
  color: #333;
  float: right;
  cursor: pointer;
  border: none;
  background-color: #fff;
`;

const ButtonContainer = styled.div`  
  margin-bottom: 20px;
  h2 {
    float: left;
  }
`;


const PromotionsContainer = styled.div`
  text-align: center;
  padding: 20px;
  width: 100%;
  background-color: #fff;
`;

const Image = styled.img`
  width: 20%;
  height: auto;
  margin-bottom: 20px;
`;

const PromotionText = styled.div`
  p {
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 400;
  color: #686f7a;
  }
  
  a {
    font-size: 18px;
    font-weight: 500;
  }
`;

const ChangePlanButton = styled.button`
  background: #ed2a26;
  color: #fff;
  border: none;
  padding: 12px 30px;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  font-size: 16px;
  border-radius: 20px;

  &:hover {
    background: #333;
  }
`;

const EditForm = styled.form`
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 20px;

  h3 {
    margin-top: 0;
    margin-bottom: 20px;
  }

  label {
    display: block;
    margin-bottom: 10px;

    input {
      width: 100%;
      padding: 8px;
      margin-top: 4px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
  }

  button {
    background-color: #ed2a26;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #d92020;
    }
  }
`;
