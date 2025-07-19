import UserLoginForm from "../ui/user-login-form";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex items-center justify-center">
        <div className="w-80">
          <h2 className="my-4 text-center">Log In</h2>
          <UserLoginForm />
        </div>
      </div>
    </div>
  );
}