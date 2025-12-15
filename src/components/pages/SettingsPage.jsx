import SettingsHeader from "../setting/SettingsHeader";
import CategorySection from "../setting/CategorySection";
import SystemInfo from "../setting/SystemInfo";

const SettingsPage = () => {
  return (
    <main className="p-6">
      <div className="space-y-6">
        <SettingsHeader />
        <CategorySection />
        <SystemInfo />
      </div>
    </main>
  );
};

export default SettingsPage;
