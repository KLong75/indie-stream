import ListenerSignUpForm from "../../ui/listener-sign-up-form";

export default function ListenerSignUpPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex items-center justify-center">
        <div className="w-80">
          <h2 className="my-4 text-center">Sign Up</h2>
          <ListenerSignUpForm />
        </div>
      </div>
    </div>
  );
}
