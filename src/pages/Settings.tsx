import { NAV_ITEMS } from "../types/contants/navigation.constant";

const Settings = () => {
  return (
    <>
      <h1>{NAV_ITEMS.settings.title}</h1>
      <p>{NAV_ITEMS.settings.description}</p>
    </>
  );
};

export default Settings;
