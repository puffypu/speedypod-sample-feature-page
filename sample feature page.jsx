import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Mic, Clock, FileText, Zap } from "lucide-react";

export default function FeaturePage() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            AI-Powered Transcription Made Effortless
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Convert speech to text in real-time with 98% accuracy. Speed up your
            workflow with our intelligent transcription tool.
          </p>
          <Button className="text-lg px-8 py-4">Start Free Trial</Button>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-10 bg-white border-b">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase text-sm text-gray-500 mb-4">
            Trusted by professionals at
          </p>
          <div className="flex justify-center gap-8 flex-wrap">
            <img src="/logos/google.svg" alt="Google" className="h-8" />
            <img src="/logos/microsoft.svg" alt="Microsoft" className="h-8" />
            <img src="/logos/dropbox.svg" alt="Dropbox" className="h-8" />
            <img src="/logos/slack.svg" alt="Slack" className="h-8" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <FeatureCard
            icon={<Mic className="h-10 w-10 text-blue-600 mx-auto" />}
            title="Real-time Transcription"
            description="Transcribe meetings, interviews, and lectures live with near-perfect accuracy."
          />
          <FeatureCard
            icon={<Clock className="h-10 w-10 text-blue-600 mx-auto" />}
            title="Time-Saving"
            description="Save hours on manual transcription and focus on insights instead."
          />
          <FeatureCard
            icon={<FileText className="h-10 w-10 text-blue-600 mx-auto" />}
            title="Multiple Formats"
            description="Download transcripts in TXT, DOCX, PDF, or export directly to your workspace."
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12">How It Works</h2>
          <div className="space-y-8 text-left">
            <Step
              number="1"
              title="Upload or Record Audio"
              description="Start with a file or record directly in the browser."
            />
            <Step
              number="2"
              title="Let AI Transcribe Instantly"
              description="Our engine processes your audio into accurate text in seconds."
            />
            <Step
              number="3"
              title="Edit & Export"
              description="Review, make edits, and download your transcript in your preferred format."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-blue-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transcribe Smarter?
          </h2>
          <p className="mb-6">
            Start your free trial and experience the power of accurate, instant
            AI transcription.
          </p>
          <Button className="bg-white text-blue-600 font-semibold px-6 py-3 text-lg">
            Try It Now
          </Button>
        </div>
      </section>
    </div>
  );
}

// Feature Card Component
function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      {icon}
      <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

// Step Component
function Step({ number, title, description }) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-2xl font-bold text-blue-600">{number}</div>
      <div>
        <h4 className="text-lg font-semibold mb-1">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
