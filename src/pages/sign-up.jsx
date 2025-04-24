import { Input } from "../components/input/input";
import { Radio } from "../components/radio/radio";

export const SignUp = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      {/* Add sign-up form here */}

      <Input required />
      <br />
      <br />
      <Input />

      <Radio name="userType" id="userType1" value="1" />
      <Radio name="userType" id="userType2" value="2" />
    </div>
  );
};
