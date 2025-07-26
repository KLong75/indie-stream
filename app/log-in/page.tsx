import UserLoginForm from "../ui/user-login-form";

export default function LoginPage() {
  return (
       <div className="flex flex-1 items-center justify-center ">
      <div className="w-80">
        <h2 className="mb-4 text-center">Log In</h2>
        <UserLoginForm />
      </div>
    </div>
  );
}