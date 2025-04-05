import UserLoginForm from "../../ui/user-login-form";
import UserSignUpForm from "../../ui/user-sign-up-form";

export default function LoginPage() {
  return (
    <div>
      <div className="my-6">
        <h2>Log In</h2>
        <UserLoginForm />
      </div>
    </div>
  );
}