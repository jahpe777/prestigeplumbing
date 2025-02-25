import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useForm, ValidationError } from "@formspree/react";
import { useNavigate } from "react-router";

const Message = () => {
  const [state, handleSubmit] = useForm("mlekdkoe");
  const navigate = useNavigate();

  if (state.succeeded) {
    navigate("/success");

    setTimeout(() => {
      navigate("/", { replace: true });
    }, 5000);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar color="bg-gray-800" />
      <section className="flex-grow bg-white flex flex-col items-center justify-center space-y-6">
        <h3 className="text-2xl font-bold">Feel free to ask anything</h3>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-6 w-full px-5 md:px-80 text-black"
          method="POST"
          action="https://formspree.io/f/mlekdkoe"
          name="message"
        >
          <input
            type="text"
            name="username"
            placeholder="Name"
            required="required"
            className="rounded-md p-2 border focus:outline-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            required="required"
            pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
            className="rounded-md p-2 border focus:outline-blue-500"
          />
          <ValidationError field="email" prefix="Email" errors={state.errors} />
          <textarea
            name="message"
            rows="7"
            cols="40"
            className="border rounded-md p-2 focus:outline-blue-500"
            placeholder="Message here"
            maxLength="500"
          />
          <input
            className="border p-2 rounded-md text-white bg-[#00183E] hover:opacity-90
                     active:bg-gray-900
                  dark:active:bg-deepGreen"
            type="submit"
            value="Submit"
            disabled={state.submitting}
          />
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Message;
