import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SpaIcon from "@mui/icons-material/Spa";
import PaymentsIcon from "@mui/icons-material/Payments";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";

const icons = {
  appointments: <CalendarMonthIcon fontSize="small" />,
  customers: <PeopleAltIcon fontSize="small" />,
  services: <SpaIcon fontSize="small" />,
  payments: <PaymentsIcon fontSize="small" />,
  inventory: <Inventory2Icon fontSize="small" />,
  analytics: <AutoGraphIcon fontSize="small" />,
};

const safeArray = (value) =>
  Array.isArray(value) ? value : [];

export const getLamsaPracticeAreasConfig = (t) => {
  const items = safeArray(
    t("lamsa.practiceAreas.items", {
      returnObjects: true,
    })
  );

  return {
    eyebrow: t("lamsa.practiceAreas.eyebrow"),
    title: t("lamsa.practiceAreas.title"),
    description: t("lamsa.practiceAreas.description"),

    practices: items.map((item) => ({
      icon: icons[item.key],
      eyebrow: item.eyebrow,
      title: item.title,
      description: item.description,
      tags: safeArray(item.tags),
    })),
  };
};

export default getLamsaPracticeAreasConfig;