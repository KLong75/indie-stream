import ArtistRegistrationForm from "@/app/ui/artist-registration-form";

export default function ArtistRegistrationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-grow items-center justify-center">
        <div className="w-80">
          <h2 className="my-4 text-center">Artist Registration</h2>
          <ArtistRegistrationForm />
        </div>
      </div>
    </div>
  );
}