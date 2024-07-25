import "@/styles/otpForm.css";
import { useState, useRef } from "react";

export default function OtpForm() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const [answer, setAnswer] = useState({
    message: "Verify Account",
    success: "pending",
  });

  const ANS = "1234";

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < 3) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    console.log(e.key, otp[index]);
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
      if (index > 0) inputRefs.current[index - 1].focus();
    }
  };

  const onHandleClick = () => {
    console.log("click");
    if (ANS === otp.join("")) {
      setAnswer({
        message: "Verified",
        success: "success",
      });
    } else {
      setAnswer({
        message: "Verification Failed",
        success: "fail",
      });
    }
  };

  console.log(answer);

  return (
    <section className="h-screen bg-background-otp">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-white text-6xl font-bold pt-16 pb-20 text-center drop-shadow-lg">
          Chai aur Code
        </h1>

        <div className="bg-white py-8 rounded-2xl">
          <h2 className="text-black text-4xl text-center font-bold tracking-tight">
            Mobile Phone Verification
          </h2>
          <p className="text-center text-2xl mt-4 max-w-lg mx-auto text-gray-custom">
            Enter the 4-digit verification code that was sent to your phone
            number.
          </p>

          <div className="max-w-md mx-auto text-center my-8">
            <div className="flex flex-row items-center justify-evenly">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  maxLength="1"
                  className={`bg-[#DBE2EF] rounded-xl w-20 h-24 outline-none text-4xl text-center border ${
                    answer.success === "success"
                      ? "border-green-600"
                      : answer.success === "success"
                        ? "border-red-600"
                        : "border-[#DBE2EF]"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="max-w-md mx-auto text-center">
            {answer.success === "pending" ? (
              <button
                className="rounded-lg bg-dark-blue w-full text-white py-4 text-2xl"
                onClick={onHandleClick}
              >
                {answer.message}
              </button>
            ) : answer.success === "success" ? (
              <button
                className="rounded-lg bg-green-600 w-full text-white py-4 text-2xl"
                onClick={onHandleClick}
              >
                {answer.message}
              </button>
            ) : (
              <button
                className="rounded-lg bg-red-400 w-full text-white py-4 text-2xl"
                onClick={onHandleClick}
              >
                {answer.message}
              </button>
            )}
          </div>

          <p className="text-center text-2xl mt-4 max-w-lg mx-auto text-gray-custom">
            Didn't receive code? <span className="text-dark-blue">Resend</span>
          </p>
        </div>
      </div>
    </section>
  );
}
