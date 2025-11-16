"use client";

import dynamic from "next/dynamic";
import FreeAnalysisForm from "./components/FreeAnalysisForm";
import About from "./components/About";
import DarkModeToggle from "./components/DarkModeToggle";
import Image from "next/image";
import Logo from "../assets/Foxline_logo.png";
import {
  Upload,
  CheckCircle,
  Shield,
  FileText,
  AlertCircle,
} from "lucide-react";
import Hero from "./components/Hero";
import { useState } from "react";

const TestimonialsCarousel = dynamic(
  () => import("./components/TestimonialsCarousel"),
  { ssr: false }
);

const FaqSection = dynamic(() => import("./components/FaqSection"), {
  ssr: false,
});

const BlogPreviewWrapper = dynamic(
  () => import("./components/BlogPreviewSection"),
  { ssr: false }
);

export default function FoxlineClientWrapper() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    file: null,
  });
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, file });
      setFileName(file.name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 :from-slate-900 :to-slate-950 :text-white">
      <Hero />
      <FreeAnalysisForm />
      {/* Value Proposition */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              You shouldn't have to second-guess every number on the page.
            </h2>
            <p className="text-lg text-slate-600 mb-4">
              The{" "}
              <span className="font-semibold">
                endless back-and-forth, the "add-ons I didn't ask for," the
                dealer fees that mysteriously appear
              </span>
              —it's exhausting. And it's designed to make you feel like you're
              bothering them by asking questions.
            </p>
            <p className="text-lg text-slate-600">
              We break down your car contract: What are you actually paying for?
              What's negotiable? What are the red flags? What questions should
              you ask before signing?
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
          What You'll Get
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
              style={{ backgroundColor: "#f5e6d3" }}
            >
              <FileText className="w-6 h-6" style={{ color: "#2c5f5f" }} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Line-by-line cost breakdown
            </h3>
            <p className="text-slate-600">Know exactly where your money goes</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
              style={{ backgroundColor: "#f5e6d3" }}
            >
              <AlertCircle className="w-6 h-6" style={{ color: "#e08e79" }} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Hidden fee detector
            </h3>
            <p className="text-slate-600">
              We flag vague terms and surprise charges
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
              style={{ backgroundColor: "#f5e6d3" }}
            >
              <Shield className="w-6 h-6" style={{ color: "#2c5f5f" }} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Red flag alerts
            </h3>
            <p className="text-slate-600">
              Unusual clauses, aggressive terms, missing details
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
              style={{ backgroundColor: "#f5e6d3" }}
            >
              <CheckCircle className="w-6 h-6" style={{ color: "#2c5f5f" }} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Plain-English summary
            </h3>
            <p className="text-slate-600">
              No jargon, no confusion—just clarity
            </p>
          </div>
        </div>
      </section>

      <section className="w-full mx-auto mt-12 md:px-0 px-4">
        <TestimonialsCarousel />
      </section>

      <FaqSection />

      {/* About Section */}
      <section id="about" className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <div
              className="mx-auto mb-6 flex items-center justify-center"
              style={{ width: "96px", height: "96px" }}
            >
              <svg
                width="96"
                height="96"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="100"
                  cy="100"
                  r="88"
                  fill="none"
                  stroke="#2c5f5f"
                  strokeWidth="3"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="82"
                  fill="none"
                  stroke="#d4af37"
                  strokeWidth="1.5"
                />
                <g transform="translate(100, 100)">
                  <path d="M -15 -20 L -10 -35 L -8 -20 Z" fill="#2c5f5f" />
                  <path d="M 15 -20 L 10 -35 L 8 -20 Z" fill="#2c5f5f" />
                  <path
                    d="M -18 -15 Q -20 0 -15 10 Q -10 15 0 18 Q 10 15 15 10 Q 20 0 18 -15 Q 15 -22 0 -25 Q -15 -22 -18 -15 Z"
                    fill="#2c5f5f"
                  />
                </g>
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              I Know the Games. I'm Here to End Them.
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4 text-lg text-slate-600">
            <p>
              I grew up in the car dealership world. My family was in the
              business for over 40 years.
            </p>
            <p>
              I saw it all: the fine print tactics, the pressure techniques, the
              "add-ons" that mysteriously appeared on contracts. I watched
              customers—mostly women—walk out feeling{" "}
              <span className="font-semibold text-slate-900">
                confused, pressured, and invisible
              </span>
              .
            </p>
            <p>
              Years later, when I went to buy my own car, I thought I'd be fine.
              I knew the industry inside and out. I had all the knowledge and
              tools at my fingertips.
            </p>
            <p className="font-semibold text-slate-900">
              But the moment I walked onto that lot as a woman buying alone,
              everything changed.
            </p>
            <p>
              I was talked down to. Dismissed. Treated like I couldn't possibly
              understand "the numbers." Even with all my insider knowledge,{" "}
              <span className="font-semibold text-slate-900">
                I felt what every woman feels walking into a dealership: like I
                needed an expert advisor or friend in my corner who would tell
                me what to look out for.
              </span>
            </p>
            <p>That's when I knew I had to do something different.</p>
            <p className="text-xl font-semibold text-slate-900">
              So I'm using my insider knowledge to level the playing field.
            </p>
            <p>
              Foxline exists because{" "}
              <span className="font-semibold text-slate-900">
                you deserve transparency before you sign
              </span>
              . You deserve to know exactly what you're paying for, what's
              negotiable, and what's a red flag—without feeling intimidated or
              talked down to.
            </p>
            <p>I've seen both sides. Now I'm on yours.</p>
            <p className="text-lg font-semibold text-slate-900 pt-4">
              — Founder, Foxline
            </p>
          </div>
        </div>
      </section>

      {/* <BlogPreviewWrapper /> */}
{/* FAQ Section */}
<section className="max-w-4xl mx-auto px-4 py-16">
  <div
    className="rounded-2xl p-8 md:p-12"
    style={{ backgroundColor: "#f5e6d3" }}
  >
    <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
      Common Questions
    </h2>

    <div className="space-y-6">
      {/* FAQ 1 */}
      <details className="group">
        <summary className="flex justify-between items-center font-semibold text-lg cursor-pointer list-none">
          <span>How does Foxline help me save money on my car deal?</span>
          <span className="transition group-open:rotate-180">
            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p className="text-slate-700 mt-3 group-open:animate-fadeIn">
          Upload any paperwork or contract related to buying or leasing a car, and Foxline's AI analyzes it using insider knowledge of dealer tactics. We spot inaccuracies, hidden fees, inflated interest rates, and overcharges that dealers hope you won't notice - then show you exactly where to negotiate.
        </p>
      </details>

      {/* FAQ 2 */}
      <details className="group">
        <summary className="flex justify-between items-center font-semibold text-lg cursor-pointer list-none">
          <span>Is my information private and secure?</span>
          <span className="transition group-open:rotate-180">
            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p className="text-slate-700 mt-3 group-open:animate-fadeIn">
          Absolutely. Foxline does not collect, store, or share any of your personal information. We analyze your deal anonymously and never ask for sensitive data like your SSN, driver's license, or financial account information. Your privacy is protected.
        </p>
      </details>

      {/* FAQ 3 */}
      <details className="group">
        <summary className="flex justify-between items-center font-semibold text-lg cursor-pointer list-none">
          <span>Is Foxline really free?</span>
          <span className="transition group-open:rotate-180">
            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p className="text-slate-700 mt-3 group-open:animate-fadeIn">
          Yes, completely free. No credit card, no hidden fees, no data selling. We believe everyone deserves access to insider knowledge when buying a car.
        </p>
      </details>

      {/* FAQ 4 */}
      <details className="group">
        <summary className="flex justify-between items-center font-semibold text-lg cursor-pointer list-none">
          <span>What kind of 'inaccuracies' does Foxline find?</span>
          <span className="transition group-open:rotate-180">
            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p className="text-slate-700 mt-3 group-open:animate-fadeIn">
          Common issues we catch: dealer markup on interest rates, unnecessary dealer fees, inflated add-ons like extended warranties, incorrect tax calculations, and finance charges that don't match the advertised rate. These 'mistakes' can cost you thousands.
        </p>
      </details>

      {/* FAQ 5 */}
      <details className="group">
        <summary className="flex justify-between items-center font-semibold text-lg cursor-pointer list-none">
          <span>What paperwork can I upload to Foxline?</span>
          <span className="transition group-open:rotate-180">
            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p className="text-slate-700 mt-3 group-open:animate-fadeIn">
          Any and all paperwork related to car buying or leasing! This includes purchase agreements, lease contracts, buyer's orders, finance applications, trade-in valuations, and dealer quotes. The more details you provide, the better we can analyze your deal.
        </p>
      </details>

      {/* FAQ 6 */}
      <details className="group">
        <summary className="flex justify-between items-center font-semibold text-lg cursor-pointer list-none">
          <span>Does Foxline work for used cars, new cars, and leases?</span>
          <span className="transition group-open:rotate-180">
            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p className="text-slate-700 mt-3 group-open:animate-fadeIn">
          Yes! Whether you're buying new, used, or leasing, dealers use similar tactics to inflate prices. Foxline analyzes all types of deals and shows you where they're padding the numbers.
        </p>
      </details>

      {/* FAQ 7 */}
      <details className="group">
        <summary className="flex justify-between items-center font-semibold text-lg cursor-pointer list-none">
          <span>Can I use Foxline while I'm at the dealership?</span>
          <span className="transition group-open:rotate-180">
            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p className="text-slate-700 mt-3 group-open:animate-fadeIn">
          Absolutely! That's when it's most powerful. When the dealer comes back with 'the numbers,' snap a photo of the paperwork or enter the details into Foxline. Within seconds, you'll know if the deal is fair or where they're trying to overcharge you.
        </p>
      </details>

      {/* FAQ 8 */}
      <details className="group">
        <summary className="flex justify-between items-center font-semibold text-lg cursor-pointer list-none">
          <span>Is Foxline giving me legal advice?</span>
          <span className="transition group-open:rotate-180">
            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p className="text-slate-700 mt-3 group-open:animate-fadeIn">
          No. Foxline provides educational information and analysis based on market data and common dealer practices. This is not legal, financial, or professional advice. Always consult with qualified professionals for specific guidance on your situation.
        </p>
      </details>
    </div>
  </div>
</section>
      {/* Final CTA */}

      <section
        className="py-16"
        style={{ background: "linear-gradient(to right, #e08e79, #d17d68)" }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to stop feeling pressured at the dealership?
          </h2>
          <p
            className="text-xl mb-8"
            style={{ color: "rgba(255, 255, 255, 0.95)" }}
          >
            Upload your car contract. Get clarity. Walk in empowered.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-block font-semibold py-4 px-8 rounded-lg transition-colors text-lg shadow-xl"
            style={{ backgroundColor: "white", color: "#2c5f5f" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#f5e6d3")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "white")
            }
          >
            Get Your Free Analysis
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-8"
        style={{ backgroundColor: "#2c5f5f", color: "#b8d4d4" }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-2">© 2025 Foxline. Built with transparency.</p>
          <p className="text-sm">
            <a
              href="https://foxline.ai"
              className="transition-opacity hover:opacity-80"
              style={{ color: "#b8d4d4" }}
            >
              foxline.ai
            </a>
          </p>
        </div>
      </footer>

      {/* NW */}

      {/* 
        <section className="max-w-4xl mx-auto px-4 py-16">
          <div
            className="rounded-2xl p-8 md:p-12"
            style={{ backgroundColor: "#f5e6d3" }}
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              Common Questions
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Why free?
                </h3>
                <p className="text-slate-600">
                  We believe you deserve transparency before you commit. This is
                  how we earn your trust—no gimmicks, no bait-and-switch.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Is my information secure?
                </h3>
                <p className="text-slate-600">
                  Your documents are encrypted and never shared. We analyze,
                  send results, and delete within 30 days.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  What's the catch?
                </h3>
                <p className="text-slate-600">
                  No catch. If you love the analysis and want ongoing support,
                  we offer premium services. But the first one's on us, no
                  strings attached.
                </p>
              </div>
            </div>
          </div>
        </section> */}
    </div>
  );
}


