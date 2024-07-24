import "@/styles/otpForm.css";

export default function OtpForm() {
  return (
    <section className="h-screen bg-background">
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

          <div id="box" className=""></div>

          <div className="max-w-md mx-auto text-center">
            <button className="rounded-lg bg-dark-blue w-full text-white py-4 text-2xl">
              Verify Account
            </button>
          </div>

          <p className="text-center text-2xl mt-4 max-w-lg mx-auto text-gray-custom">
            Didn't receive code? <span className="text-dark-blue">Resend</span>
          </p>
        </div>
      </div>
    </section>
  );
}
