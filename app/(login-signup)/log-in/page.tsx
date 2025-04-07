import UserLoginForm from "../../ui/user-login-form";

export default function LoginPage() {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="w-80">
        <h2 className="my-4 text-center">Log In</h2>
        <UserLoginForm />
      </div>
    </div>
  );
}