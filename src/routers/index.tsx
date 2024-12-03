// src/router.tsx
import { createBrowserRouter } from "react-router-dom";
import SavedCourseHome from "@pages/SavedCourseHome";
import Home from "@pages/Home";
import ProfileDetail from "@pages/ProfileDetail";
import Layout from "@components/Layout/Layout.tsx";
import Login from "@pages/Login/Login.tsx";
import ForgotPassword from "@pages/ForgotPassword/ForgotPassword.tsx";
import SignUp from "@pages/SignUp/SignUp.tsx";
import { PrivateRoutes } from "@components/PrivateRoutes/PrivateRoutes.tsx";
import { PublicRoutes } from "@components/PublicRoutes/PublicRoutes.tsx";
import Help from "@pages/Help";
import ReportHistory from "@pages/ReportHistory/index.tsx";
import NotFoundpage from "@pages/404.tsx";
import SignUpStep from "@pages/SignUpStep";
import ShoppingCart from "@pages/ShoppingCart";
import Setting from "@pages/Setting";
import LiveStreams from "@pages/LiveStream";
import SendFeedBack from "@components/FeedBack/index.tsx";
import About from "@pages/AboutUs/About.tsx";
import Blog from "@pages/AboutUs/Blog.tsx";
import Careers from "@pages/AboutUs/Careers.tsx";
import Company from "@pages/AboutUs/Company.tsx";
import Press from "@pages/AboutUs/Press.tsx";
import BlogSingleView from "@pages/AboutUs/BlogSingleView.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import DataEngineer from "@pages/AboutUs/DataEngineer.tsx";
import SettingsToolbar from "@pages/Setting/Components/SettingsToolbar.tsx";
import CertificationCenter from "@pages/CertificationCenter";
import CertificationFormFill from "@pages/CertificationFormFill";
import TestView from "@pages/TestView";
import AllLiveStreams from "@pages/AllLiveStreams";
import Notifications from "@pages/Notifications";
import MesagePage from "@pages/Message/MainMessage/index";
import InstructorDashboard from "@pages/InstructorDashboard";
import Contact from "@pages/ContactUs";
import Explore from "@pages/Explore/index";

import Verification from "@pages/Verification";
import CreateCourse from "@pages/CreateCourse";
import InstructorCourses from "@pages/InstructorCourses";
import PaidMembership from "@pages/PaidMembership";
import TestResult from "@pages/TestResult";
import Termsofuse from "@pages/TermsOfUse";
import ThankYou from "@pages/ThankYou";
import Earning from "@pages/Earning";
import ProductDetail from "@pages/ProductDetail";

import { ROUTES } from "./contants";

const router = createBrowserRouter([
  {
    element: <PublicRoutes />,
    children: [
      {
        path: ROUTES.LOGIN,
        element: <Login />,
      },
      {
        path: ROUTES.FORGOT_PASSWORD,
        element: <ForgotPassword />,
      },
      {
        path: ROUTES.SIGN_UP,
        element: <SignUp />,
      },
      {
        path: ROUTES.SIGN_UP_STEP,
        element: <SignUpStep />,
      },
    ],
  },
  {
    element: <Layout type="customs" />,
    children: [
      {
        path: ROUTES.ABOUT,
        element: <About />,
      },
      {
        path: ROUTES.BLOG,
        element: <Blog />,
      },
      {
        path: ROUTES.CAREERS,
        element: <Careers />,
      },
      {
        path: ROUTES.COMPANY,
        element: <Company />,
      },
      {
        path: ROUTES.PRESS,
        element: <Press />,
      },
      {
        path: ROUTES.BLOG_SINGLE_VIEW,
        element: <BlogSingleView />,
      },
      {
        path: ROUTES.DATA_ENGINEER,
        element: <DataEngineer />,
      },
      {
        path: ROUTES.CERTIFICATION_CENTER,
        element: <CertificationCenter />,
      },
      {
        path: ROUTES.CERTIFICATION_FORM_FILL,
        element: <CertificationFormFill />,
      },
      {
        path: ROUTES.TEST_VIEW,
        element: <TestView />,
      },
      {
        path: ROUTES.TEST_RESULT,
        element: <TestResult />,
      },
      {
        path: ROUTES.PAID_MEMBERSHIP,
        element: <PaidMembership />,
      },
      {
        path: ROUTES.TERMS_OF_USE,
        element: <Termsofuse />,
      },
      {
        path: ROUTES.SHOPPING_CART,
        element: <ShoppingCart />,
      },
      {
        path: ROUTES.CONTACT,
        element: <Contact />,
      },
    ],
  },
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Layout type="main" />,
        children: [
          {
            path: ROUTES.HOME,
            element: <Home />,
          },
          {
            path: ROUTES.PROFILE_DETAIL,
            element: <ProfileDetail />,
          },
          {
            path: ROUTES.PRODUCT_DETAIL,
            element: <ProductDetail />,
          },
          {
            path: ROUTES.HELP,
            element: <Help />,
          },
          {
            path: ROUTES.SAVED_COURSE,
            element: <SavedCourseHome />,
          },
          {
            path: ROUTES.REPORT_HISTORY,
            element: <ReportHistory />,
          },
          {
            path: ROUTES.LIVE_STREAM,
            element: <LiveStreams />,
          },
          {
            path: ROUTES.FEEDBACK,
            element: <SendFeedBack />,
          },
          {
            path: ROUTES.EXPLORE,
            element: <Explore />,
          },
          {
            path: ROUTES.ALL_LIVE_STREAMS,
            element: <AllLiveStreams />,
          },
          {
            path: ROUTES.SETTING,
            element: <Setting />,
          },
          {
            path: ROUTES.SETTINGS_TOOLBAR,
            element: <SettingsToolbar />,
          },
          {
            path: ROUTES.INSTRUCTOR_COURSES,
            element: <InstructorCourses />,
          },
        ],
      },
      {
        path: ROUTES.HOME,
        element: <Layout type="admin" />,
        children: [
          {
            path: ROUTES.CREATE_COURSE,
            element: <CreateCourse />,
          },
          {
            path: ROUTES.MESSAGE,
            element: <MesagePage />,
          },
          {
            path: ROUTES.INSTRUCTOR_DASHBOARD,
            element: <InstructorDashboard />,
          },
          {
            path: ROUTES.EARNING,
            element: <Earning />,
          },
          {
            path: ROUTES.VERIFICATION,
            element: <Verification />,
          },
        ],
      },
      {
        path: ROUTES.NOT_FOUND,
        element: <NotFoundpage />,
      },
      {
        path: ROUTES.LOGIN,
        element: <Login />,
      },
      {
        path: ROUTES.NOTIFICATIONS,
        element: <Notifications />,
      },
      {
        path: ROUTES.THANK_YOU,
        element: <ThankYou />,
      },
      // {
      //   path: ROUTES.INVOICE,
      //   element: <Invoice />,
      // },
    ],
  },
]);

export default router;
