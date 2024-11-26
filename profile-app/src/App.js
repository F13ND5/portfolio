// App.js
import React from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Social from "./components/Social";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Interests from "./components/Interests";
import CoreCompetencies from "./components/CoreCompetencies";
import AnimatedSection from "./components/AnimatedSection";
import ScrollProgressBar from "./components/ScrollProgressBar";

const App = () => {
  return (
    <div
      className="min-h-screen flex flex-col bg-[var(--bg-light)] dark:bg-[var(--bg-dark)] 
      text-[var(--text-light)] dark:text-[var(--text-dark)] transition-all duration-500"
    >
      {/* Header Section */}
      <Header />

      {/* Navigation Bar */}
      <NavBar />

      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto p-6 lg:p-10 space-y-16">
        <AnimatedSection>
          <section id="profile">
            <Profile />
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="social">
            <Social />
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="certifications">
            <Certifications />
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="projects">
            <Projects />
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="competencies">
            <CoreCompetencies />
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="interests">
            <Interests />
          </section>
        </AnimatedSection>
      </main>

      {/* Footer */}
      <footer
        className="py-8 text-center bg-[var(--card-light)] dark:bg-[var(--card-dark)] 
        border-t border-[var(--border-light)] dark:border-[var(--border-dark)]"
      >
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/f13nd5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-light)] dark:text-[var(--text-dark)] hover:text-indigo-500 transition"
            aria-label="GitHub"
          >
            <i className="fab fa-github text-xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/bruno-mr-carvalho/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-light)] dark:text-[var(--text-dark)] hover:text-blue-500 transition"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          {/*<a
            href="https://twitter.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-light)] dark:text-[var(--text-dark)] hover:text-blue-400 transition"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter text-lg"></i>
          </a>*/}
        </div>

        {/* Copyright and Links */}
        <div className="text-sm mb-4">
          <p>
            © {new Date().getFullYear()} <strong>Bruno Carvalho</strong>. All
            Rights Reserved.
          </p>
          {/*<div className="flex justify-center space-x-4 text-xs mt-2">
            <a
              href="/privacy-policy"
              className="text-[var(--text-light)] dark:text-[var(--text-dark)] hover:underline"
            >
              Privacy Policy
            </a>
            <span className="text-[var(--border-light)] dark:text-[var(--border-dark)]">
              |
            </span>
            <a
              href="/terms-of-service"
              className="text-[var(--text-light)] dark:text-[var(--text-dark)] hover:underline"
            >
              Terms of Service
            </a>
          </div>*/}
        </div>
      </footer>
    </div>
  );
};

export default App;
