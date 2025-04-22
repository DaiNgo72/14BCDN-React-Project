import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import z from "zod";
import { Input } from "../components/input";

function ErrorMessage({ message }) {
  return (
    <>
      <div className="text-red-500 text-sm">{message}</div>
    </>
  );
}

const LoginSchema = z.object({
  email: z.string().email("Email is valid.").nonempty("Email is required"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .nonempty("Password is required"),
});

export default function Login() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit(values) {
      console.log(values);
      axios
        .post("https://shop.cyberlearn.vn/api/Users/signin", {
          email: values.email,
          password: values.password,
        })
        .then((response) => {
          console.log("Login successful:", response.data);

          // Login thành công thì về trang home.
          navigate("/");
        })
        .catch((error) => {
          console.error("Login error:", error);
        });
    },
    validate(values) {
      try {
        LoginSchema.parse(values);
      } catch (error) {
        const errors = error.errors.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {});

        return errors;
      }

      return {};
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4"
      >
        <h1 className="text-4xl mb-4 text-blue-600">Login Page</h1>

        <Input
          {...formik.getFieldProps("email")}
          placeholder="Enter email"
          className="border border-gray-300 rounded px-4 py-2 w-full"
        />
        <ErrorMessage message={formik.touched.email && formik.errors.email} />

        <Input
          {...formik.getFieldProps("password")}
          type="password"
          placeholder="Enter password"
          className="border border-gray-300 rounded px-4 py-2 w-full"
        />

        <ErrorMessage
          message={formik.touched.password && formik.errors.password}
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}