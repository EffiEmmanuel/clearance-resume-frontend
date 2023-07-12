import React from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import ProtectedRoute from "./components/security/ProtectedRoute";
import DashboardOverview from "./pages/dashboard/HomePage";
import SignupPage from "./pages/auth/SignupPage";
import ResumeFormattingPage from "./pages/dashboard/ResumeFormattingPage";
import PaymentPage from "./pages/dashboard/PaymentPage";
import MyProfilePage from "./pages/dashboard/MyProfilePage";
import SettingsPage from "./pages/dashboard/SettingsPage";
import CreateResumePage from "./pages/dashboard/CreateResumePage";
import CustomizationPage from "./pages/dashboard/CreateResumePage/CustomizationPage";
import JobDescriptionPage from "./pages/dashboard/CreateResumePage/Advanced/JobDescriptionPage";
import ParsingPage from "./pages/dashboard/CreateResumePage/Advanced/ParsingPage";
import PersonalDetailsPage from "./pages/dashboard/CreateResumePage/Informations/PersonalDetailsPage";
import EducationPage from "./pages/dashboard/CreateResumePage/Informations/EducationPage";
import WorkExperiencePage from "./pages/dashboard/CreateResumePage/Informations/WorkExperiencePage";
import SkillsPage from "./pages/dashboard/CreateResumePage/Informations/SkillsPage";
import AchievementsPage from "./pages/dashboard/CreateResumePage/Informations/AchievementsPage";

function App() {
  return (
    <>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<LoginPage />} />

        {/* Auth pages */}
        <Route path="/auth">
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>

        {/* Dashboard routes */}
        <Route path="/dashboard">
          <Route
            path=""
            element={
              <ProtectedRoute>
                <DashboardOverview />
              </ProtectedRoute>
            }
          />
          <Route
            path="resume-formatting"
            element={
              <ProtectedRoute>
                <ResumeFormattingPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="payment"
            element={
              <ProtectedRoute>
                <PaymentPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="my-profile"
            element={
              <ProtectedRoute>
                <MyProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="settings"
            element={
              <ProtectedRoute>
                <SettingsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="create-resume"
            element={
              <ProtectedRoute>
                <CreateResumePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="create-resume/template"
            element={
              <ProtectedRoute>
                <CreateResumePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="create-resume/customization"
            element={
              <ProtectedRoute>
                <CustomizationPage />
              </ProtectedRoute>
            }
          />

          {/* CREATE RESUME - ADVANCED DROPDOWN */}
          <Route
            path="create-resume/advanced/job-description"
            element={
              <ProtectedRoute>
                <JobDescriptionPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="create-resume/advanced/parsing"
            element={
              <ProtectedRoute>
                <ParsingPage />
              </ProtectedRoute>
            }
          />

          {/* CREATE RESUME - INFORMATIONS DROPDOWN */}
          <Route
            path="create-resume/informations/personal-details"
            element={
              <ProtectedRoute>
                <PersonalDetailsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="create-resume/informations/education"
            element={
              <ProtectedRoute>
                <EducationPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="create-resume/informations/work-experience"
            element={
              <ProtectedRoute>
                <WorkExperiencePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="create-resume/informations/skills"
            element={
              <ProtectedRoute>
                <SkillsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="create-resume/informations/achievements"
            element={
              <ProtectedRoute>
                <AchievementsPage />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
