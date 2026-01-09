import { useState } from "react";

const OTP = () => {
  const [otp, setOtp] = useState("");

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("OTP:", otp);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={handleVerify}
        className="w-full max-w-sm bg-white p-6 rounded-lg shadow"
      >
        <h1 className="text-xl font-semibold text-blue-600 text-center">
          OTP Verification
        </h1>

        <p className="mt-2 text-sm text-gray-600 text-center">
          An OTP has been sent to <span className="font-medium">example.com</span>
        </p>

        <p className="mt-1 text-xs text-gray-500 text-center">
          Please verify within <span className="font-medium">10 minutes</span>
        </p>

        <input
          type="text"
          inputMode="numeric"
          maxLength={6}
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
          className="mt-6 w-full text-center text-lg tracking-widest rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        <button
          type="submit"
          disabled={otp.length < 6}
          className="mt-5 w-full rounded-md bg-blue-600 py-2 text-white font-medium hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Verify
        </button>
      </form>
    </div>
  );
};

export default OTP;
