import React from "react";

type WelcomeProps = {
  message?: string;
};

const Welcome: React.FC<WelcomeProps> = ({
  message = "Welcome to our app",
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white">
      <div className="p-8 bg-white rounded-2xl shadow-md border border-slate-200">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">
          {message}
        </h1>
      </div>
    </div>
  );
};

export default Welcome;
