// components/AboutAuthor.tsx
import React from 'react';

export default function AboutAuthor() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">About the Creator</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Hi, I'm <span className="font-semibold text-blue-700">Ashar</span>, a full-stack developer passionate about building simple, powerful tools like <span className="font-medium text-black">Countdown Timer</span>.
          This tool was crafted to be fast, reliable, and easy to use for anyone managing time-sensitive tasks.
        </p>
      </div>
    </section>
  );
}
