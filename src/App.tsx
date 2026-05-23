/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, ScrollRestoration } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Contact from "./pages/Contact";
import Complaints from "./pages/Complaints";
import Reviews from "./pages/Reviews";
import EmailDiagnostics from "./pages/EmailDiagnostics";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import CookiePolicy from "./pages/CookiePolicy";
import HealthSafety from "./pages/HealthSafety";
import EqualityDiversity from "./pages/EqualityDiversity";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/:id" element={<CourseDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="complaints" element={<Complaints />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="email-diagnostics" element={<EmailDiagnostics />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<TermsConditions />} />
          <Route path="cookies" element={<CookiePolicy />} />
          <Route path="health-safety" element={<HealthSafety />} />
          <Route path="equality-diversity" element={<EqualityDiversity />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

