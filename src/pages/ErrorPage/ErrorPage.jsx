import { NavLink, useNavigate } from "react-router";
import { FiHome, FiArrowLeft, FiAlertCircle } from "react-icons/fi";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-base-100 flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center relative">
        {/* DECORATIVE BACKGROUND GRADIENT */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -z-10"></div>

        {/* ICON & ERROR CODE */}
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-error/10 rounded-full animate-bounce">
            <FiAlertCircle className="w-12 h-12 text-error" />
          </div>
        </div>

        <p className="text-sm font-bold tracking-[0.2em] text-primary uppercase">
          Error 404
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tighter text-base-content sm:text-6xl">
          Page not found
        </h1>

        <p className="mt-6 text-base leading-7 text-base-content/60 max-w-md mx-auto">
          Sorry, we couldn’t find the page you’re looking for. It might have
          been moved, deleted, or the link might be broken.
        </p>

        {/* ACTION BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-widest bg-base-200 hover:bg-base-300 transition-all rounded-xl border border-base-300"
          >
            <FiArrowLeft className="w-4 h-4" />
            Go Back
          </button>

          <NavLink
            to="/"
            className="flex items-center gap-2 px-8 py-3 text-sm font-bold uppercase tracking-widest bg-primary text-primary-content hover:shadow-lg hover:shadow-primary/30 transition-all rounded-xl"
          >
            <FiHome className="w-4 h-4" />
            Back to Home
          </NavLink>
        </div>

        {/* OPTIONAL SUPPORT LINK */}
        <p className="mt-12 text-sm text-base-content/40">
          Think this is a mistake?{" "}
          <NavLink
            to="/contact-support"
            className="text-primary hover:underline font-semibold"
          >
            Contact Support
          </NavLink>
        </p>
      </div>
    </main>
  );
};

export default ErrorPage;
