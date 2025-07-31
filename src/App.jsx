import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PropertyPage from './pages/PropertyPage';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import Careers from './pages/Careers';
import TestimonialForm from './pages/TestimonialForm';
import ManageCommunities from './pages/admin/ManageCommunities';
import PropertyDetails from "./pages/properties/PpcDetails";
import PropertyLuxeDetails from "./pages/properties/PplDetails";
import AdminUploadTestimonial  from './pages/admin/ManageVideos';
import InquiryForm from "./pages/inquiry/Inquiry"
import WhatsAppButton from './components/Whatsapp';
import AdminPostJob from "./pages/admin/AddJob"
import Apply from './pages/job/JobApplication';
import ViewJobApplications from "./pages/admin/ViewApplication"
import AdminJobsPage from './pages/admin/AdminJobsPage';
import AboutUs from "./pages/AboutUs"

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/property/:id" element={<PropertyPage />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/testimonial" element={<TestimonialForm />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/manage-communities" element={<ManageCommunities />} />
      <Route path="/property/ceylon" element={<PropertyDetails />} />
      <Route path="/property/luxe" element={<PropertyLuxeDetails />} />
      <Route path="/manage-testimonials" element={<AdminUploadTestimonial />} />
      <Route path="/contact" element={<InquiryForm />} />
      <Route path="/admin/post-job" element={<AdminPostJob />} />
      <Route path="/careers/apply" element={<Apply />} />    
      <Route path="/admin/view-applications" element={<ViewJobApplications />} />  
      <Route path="/admin/view-openings" element={<AdminJobsPage />} />
      <Route path="/about-us" element={<AboutUs />} />

    </Routes>
    <WhatsAppButton/>
    </>
  );
}
