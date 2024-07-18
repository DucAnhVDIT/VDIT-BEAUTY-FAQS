"use client";
import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import CreateNewBooking from "@/components/CalendarFAQs/createNewBooking";
import ChangeStatus from "@/components/CalendarFAQs/changeStatus";
import WorkingHours from "@/components/ManagerFAQs/workingHours";
import MultipleServices from "@/components/CalendarFAQs/multipleServicesNotes";
import ViewSingleStaff from "@/components/CalendarFAQs/viewSingleStaff";
import CalendarView from "@/components/CalendarFAQs/calendarView";
import ManuallyAdd from "@/components/ClientFAQs/manuallyAdd";
import EditClient from "@/components/ClientFAQs/editClient";
import AppHistory from "@/components/ClientFAQs/appointmentHistory";
import RebookHistory from "@/components/ClientFAQs/rebookHistory";
import CompanyInfo from "@/components/ManagerFAQs/companyInfo";
import EmailSetting from "@/components/ManagerFAQs/emailSetting";
import AddSerivce from "@/components/ManagerFAQs/addService";
import AddCat from "@/components/ManagerFAQs/addCat";
import EditSerivce from "@/components/ManagerFAQs/EditService";
import EditCat from "@/components/ManagerFAQs/editCat";
import EditStatus from "@/components/ManagerFAQs/editStatus";
import EditStaff from "@/components/ManagerFAQs/editStaff";
import EditSchedule from "@/components/ManagerFAQs/editSchedule";
import AddStaff from "@/components/ManagerFAQs/addStaff";
import StaffServices from "@/components/ManagerFAQs/staffService";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const calendarFaqs = [
    {
      question: "How to create a new booking?",
      answer: <CreateNewBooking />,
    },
    {
      question: "How to add multiple services and notes?",
      answer: <MultipleServices />,
    },
    {
      question: "How to change appointment status?",
      answer: <ChangeStatus />,
    },
    {
      question: "How to view single staff's appointments?",
      answer: <ViewSingleStaff />,
    },
    {
      question: "How to change calendar's view settings",
      answer: <CalendarView />,
    },
  ];

  const clientFaqs = [
    {
      question: "How to manually add a new client?",
      answer: <ManuallyAdd />,
    },
    {
      question: "How to edit client details?",
      answer: <EditClient />,
    },
    {
      question: "How to view client's appointment history?",
      answer: <AppHistory />,
    },
    {
      question: "How to rebook an appointment client's appointment history?",
      answer: <RebookHistory />,
    },
  ];

  const managerFaqs = [
    {
      question: "How to change business information?",
      answer: <CompanyInfo />,
    },
    {
      question: "How to change business email setting?",
      answer: <EmailSetting />,
    },
    {
      question: "How to change business working hours?",
      answer: <WorkingHours />,
    },
    {
      question: "How to add new service category?",
      answer: <AddCat />,
    },
    {
      question: "How to add new service?",
      answer: <AddSerivce />,
    },
    {
      question: "How to edit service category?",
      answer: <EditCat />,
    },
    {
      question: "How to edit service details?",
      answer: <EditSerivce />,
    },
    {
      question: "How to add a new staff?",
      answer: <AddStaff />,
    },
    {
      question: "How to assign service to staff?",
      answer: <StaffServices />,
    },
    {
      question: "How to edit staff details?",
      answer: <EditStaff />,
    },
    {
      question: "How to edit schedules?",
      answer: <EditSchedule />,
    },
    {
      question: "How to change status colour?",
      answer: <EditStatus />,
    },
  ];

  const filteredCalendarFaqs = calendarFaqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredClientFaqs = clientFaqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredManagerFaqs = managerFaqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Head>
        <link rel="icon" href="/vditheader.png" />
        <title>VDIT Beauty FAQs</title>
      </Head>
      <main className="flex flex-col items-center p-4 sm:p-6 lg:p-24 min-h-screen">
        <header className=" w-full sm:w-[80%] lg:w-[60%]">
          <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <Image
              src="/vditheader.png"
              alt="VDIT Logo"
              width={50}
              height={50}
            />
            <nav className="space-x-4">
              <a href="https://www.vdit.co.uk" className="text-gray-600">
                Home
              </a>
              <a href="/" className="text-gray-800 font-bold">
                FAQ
              </a>
            </nav>
            <div>
              <a href="https://www.facebook.com/VDITSolutionsLtd">
                <button className="bg-black text-white px-4 py-2 rounded">
                  Contact
                </button>
              </a>
            </div>
          </div>
        </header>
        <h1 className="scroll-m-20 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-8 sm:mt-12 text-center">
          VDIT Beauty{" "}
          <span className="highlight bg-gray-200 text-black px-2">FAQs</span>
        </h1>

        <section className="py-8 w-full sm:w-[80%] lg:w-[60%]">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-center">
            Frequently asked questions
          </h2>
          <p className="text-center mb-8">
            Everything you need to know about VDIT Beauty
          </p>

          <div className="mb-8 w-full flex justify-center">
            <div className="w-[70%]">
              <Input
                placeholder="Search FAQs"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
            Calendar
          </h3>
          <Accordion type="single" collapsible className="w-full mb-8">
            {filteredCalendarFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`calendar-item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
            Clients
          </h3>
          <Accordion type="single" collapsible className="w-full mb-8">
            {filteredClientFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`calendar-item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
            Manager
          </h3>
          <Accordion type="single" collapsible className="w-full mb-8">
            {filteredManagerFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`manager-item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>
    </>
  );
}
