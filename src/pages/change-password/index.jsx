import { useFormik } from "formik";
import { z } from "zod";
import { changePasswordAPI } from "../../service/user.service";

const ChangePasswordSchema = z.object({
  newPassword: z.string().nonempty().min(8).max(50),
});

export default function ChangePassword() {
  const formik = useFormik({
    initialValues: {
      newPassword: "",
    },

    validate(values) {
      try {
        ChangePasswordSchema.parse(values);
      } catch (error) {
        const errors = error.errors.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {});

        return errors;
      }

      return {};
    },

    onSubmit(values) {
      changePasswordAPI(values.newPassword)
        .then(() => {
          alert("Change Password success");
        })
        .catch(() => {
          alert("Change Password fail");
        });
    },
  });
  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-4 p-4 max-w-md mx-auto bg-white shadow-md rounded"
      >
        <input
          {...formik.getFieldProps("newPassword")}
          type="text"
          placeholder="New Password"
          className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {formik.touched.newPassword && formik.errors.newPassword && (
          <p className="text-red-500 text-sm">{formik.errors.newPassword}</p>
        )}

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Save
        </button>
      </form>
    </>
  );
}
