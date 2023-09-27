import AboutusComponent from "../../assets/svgs/Aboutus";
import AttendanceComponent from "../../assets/svgs/Attendance";
import ComplainboxComponent from "../../assets/svgs/Complainbox";
import ContactUsComponent from "../../assets/svgs/ContactUs";
import EventComponent from "../../assets/svgs/Event";
import ExamComponent from "../../assets/svgs/Exam";
import FeesComponent from "../../assets/svgs/Fees";
import HolidayComponent from "../../assets/svgs/Holiday";
import MaterialComponent from "../../assets/svgs/Material";
import PrivacyPolicyComponent from "../../assets/svgs/PrivacyPolicy";
import RateusComponent from "../../assets/svgs/Rateus";
import ResultComponent from "../../assets/svgs/Result";
import ShareComponent from "../../assets/svgs/Share";
import TermConditionComponent from "../../assets/svgs/TermCondition";
import TimeTableComponent from "../../assets/svgs/TimeTable";
import { content } from "../utils/content";

export const homeData = [
  {
    id: 1,
    image: <AttendanceComponent />,
    name: content.attendance,
    navigation: "Attendance",
  },
  {
    id: 2,
    image: <TimeTableComponent />,
    name: content.timeTable,
    navigation: "Timetables",
  },
  {
    id: 3,
    image: <ComplainboxComponent />,
    name: content.complain,
    navigation: "Complainbox",
  },
  {
    id: 4,
    image: <ExamComponent />,
    name: content.exam,
    navigation: "Exam",
  },
  {
    id: 5,
    image: <ResultComponent />,
    name: content.result,
    navigation: "Result",
  },
  {
    id: 6,
    image: <HolidayComponent />,
    name: content.holiday,
    navigation: "Holiday",
  },
  {
    id: 7,
    image: <EventComponent />,
    name: content.events,
    navigation: "Event",
  },
  {
    id: 8,
    image: <FeesComponent />,
    name: content.fees,
    navigation: "Fees",
  },
  {
    id: 9,
    image: <MaterialComponent />,
    name: content.materials,
    navigation: "Material",
  },
];

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const subject = [
  {
    id: 1,
    name: "Maths",
  },
  {
    id: 2,
    name: "English",
  },
  {
    id: 3,
    name: "Gujarati",
  },
  {
    id: 4,
    name: "Hindi",
  },
  {
    id: 5,
    name: "Computer",
  },
  {
    id: 6,
    name: "Science",
  },
];

export const homeWorkData = [
  {
    id: 1,
    title: "Chapter 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    dueDate: "10/03/2023",
  },
  {
    id: 2,
    title: "Chapter 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    dueDate: "10/03/2023",
  },
];

export const settingData = [
  {
    id: 1,
    name: content.privacyPolicy,
    image: <PrivacyPolicyComponent />,
    navigation: "PrinacyPolicy",
  },
  {
    id: 2,
    name: content.termsConditions,
    image: <TermConditionComponent />,
    navigation: "TermsConditions",
  },
  {
    id: 3,
    name: content.aboutUs,
    image: <AboutusComponent />,
    navigation: "Aboutus",
  },
  {
    id: 4,
    name: content.contactUs,
    image: <ContactUsComponent />,
    navigation: "ContactUs",
  },
  {
    id: 5,
    name: content.rateUs,
    image: <RateusComponent />,
    // navigation: "Rateus",
  },
  {
    id: 6,
    name: content.share,
    image: <ShareComponent />,
    // navigation: "",
  },
];

export const TimeTableTabData = [
  {
    id: 1,
    title: "Mon",
  },
  {
    id: 2,
    title: "Tue",
  },
  {
    id: 3,
    title: "Wed",
  },
  {
    id: 4,
    title: "Thu",
  },
  {
    id: 5,
    title: "Fri",
  },
  {
    id: 6,
    title: "Sat",
  },
];
