import { Link } from "react-router-dom";

function SubmissionPage() {
  return (
    <main className="flex w-full items-center justify-center py-5">
      <div className="bg-white px-5 py-5 sm:px-10 sm:py-7 border-t-8 border-darkBrown rounded-lg flex flex-col gap-4 max-w-xl mx-3">
        <h2 className="text-2xl sm:text-4xl capitalize ">Software Engineer Freelancer</h2>
        <p className="text-xs sm:text-sm ">Thank you for submitting the form. We will get back to you shortly.</p>
        <Link to="/" className="underline text-blue-700 ">Edit your response</Link>
      </div>
    </main>
  );
}

export default SubmissionPage;
