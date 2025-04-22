import { Input } from "../components/input/input";
import { useFormik } from "formik";
import z from "zod";
import axios from "axios";
import { useNavigate } from "react-router";

/**
 * Define schema for register form
 * - email: required and must be a valid email
 * - password: required and must be at least 8 characters long
 * - confirmPassword: required and must match password
 * - phone: required, must be a valid phone number
 * - name: required and must not be empty
 */

function ErrorMessage({ message }) {
  return (
    <>
      <div className="text-red-500 text-sm">{message}</div>
    </>
  );
}

const RegisterSchema = z
  .object({
    email: z.string().email("Email is valid.").nonempty("Email is required"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .nonempty("Password is required"),
    confirmPassword: z.string().nonempty("Confirm Password is required"),
    phone: z
      .string()
      .nonempty("Phone number is required")
      .regex(/^\d{10}$/, "Phone number must be 10 digits"),
    name: z.string().nonempty("Name is required"),
  })
  // Định nghĩa cho password và confirmpassword phải giống nhau.
  .superRefine((val, ctx) => {
    if (val.password !== val.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Password is not the same as confirm password",
        // Đưa cái error message vào cho confirmPassword
        path: ["confirmPassword"],
      });
    }
  });

export default function Register() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      name: "",
      gender: "1",
    },
    onSubmit(values) {
      console.log(values);
      //   {
      //     "email": "string",
      //     "password": "string",
      //     "name": "string",
      //     "gender": true,
      //     "phone": "string"
      //   }

      axios
        .post("https://shop.cyberlearn.vn/api/Users/signup", {
          email: values.email,
          password: values.password,
          name: values.name,
          phone: values.phone,
          // true: male (con trai)
          // false: female (con gái)
          gender: values.gender === "2",
        })
        .then((response) => {
          console.log("Registration successful:", response.data);

          // Nếu đăng ký thành công thì chuyển người dùng sang trang login
          navigate("/login");
        })
        .catch((error) => {
          console.error("There was an error registering:", error);
        });
    },

    validate(values) {
      try {
        // Kiểm tra values có khớp với lại RegisterSchema hay không
        // Nếu không khớp thì sẽ bắn ra lỗi
        RegisterSchema.parse(values);
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
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Register</h1>

      <form onSubmit={formik.handleSubmit} className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <Input
              {...formik.getFieldProps("email")}
              id="email"
              className="w-full border border-gray-300 rounded p-2"
              placeholder="email"
            />
            <ErrorMessage
              message={formik.touched.email && formik.errors.email}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1"
            >
              Password
            </label>
            <Input
              {...formik.getFieldProps("password")}
              id="password"
              className="w-full border border-gray-300 rounded p-2"
              placeholder="password"
            />

            <ErrorMessage
              message={formik.touched.password && formik.errors.password}
            />
          </div>
          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium mb-1"
            >
              Confirm Password
            </label>
            <Input
              {...formik.getFieldProps("confirmPassword")}
              id="confirm-password"
              className="w-full border border-gray-300 rounded p-2"
              placeholder="confirm password"
            />
            <ErrorMessage
              message={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Phone
            </label>
            <Input
              {...formik.getFieldProps("phone")}
              id="phone"
              className="w-full border border-gray-300 rounded p-2"
              placeholder="phone"
            />
            <ErrorMessage
              message={formik.touched.phone && formik.errors.phone}
            />
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <Input
              {...formik.getFieldProps("name")}
              id="name"
              className="w-full border border-gray-300 rounded p-2"
              placeholder="name"
            />
            <ErrorMessage message={formik.touched.name && formik.errors.name} />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Gender</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  {...formik.getFieldProps("gender")}
                  type="radio"
                  value={"1"}
                  className="form-radio w-6 h-6"
                  checked={formik.values.gender === "1"}
                />
                <span>Male</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  {...formik.getFieldProps("gender")}
                  type="radio"
                  value={"2"}
                  className="form-radio w-6 h-6"
                  checked={formik.values.gender === "2"}
                />
                <span>Female</span>
              </label>
            </div>
          </div>
        </div>

        <button className="col-span-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
}
