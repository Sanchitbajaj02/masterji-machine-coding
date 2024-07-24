import { Routes, Route } from "react-router-dom";

// Core Components
import ContainerLayout from "@/components/core/ContainerLayout";

// Pages
import OtpForm from "@/components/pages/OtpForm";
import CourseList from "@/components/pages/CourseList";
import Batches from "@/components/pages/Batches";

export default function App() {
  return (
    <>
      <ContainerLayout>
        <Routes>
          <Route path="/" element={<OtpForm />} />
          <Route path="/otp-form" element={<OtpForm />} />
          <Route path="/course-list" element={<CourseList />} />
          <Route path="/batches" element={<Batches />} />
        </Routes>
      </ContainerLayout>
    </>
  );
}
