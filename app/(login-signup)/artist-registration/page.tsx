import ArtistRegistrationForm from "@/app/ui/artist-registration-form";

export default function ArtistRegistrationPage() {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="w-80">
        <h2 className="my-4 text-center">Artist Registration</h2>
        <ArtistRegistrationForm />
      </div>
    </div>
  );
}