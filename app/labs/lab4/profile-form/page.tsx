import ProfileForm from "../profile/ProfileForm";
import ContextProfileForm from "../context/ContextProfileForm";
import ZustandProfileForm from "../zustand/ZustandProfileForm";

export default function ProfileFormPage() {
  return (
    <div id="wd-lab4-profile-form" className="p-4">
      <h2>Profile Form Three Ways</h2>
      <div className="grid gap-8 lg:grid-cols-3">
        <ProfileForm />
        <ContextProfileForm />
        <ZustandProfileForm />
      </div>
    </div>
  );
}
