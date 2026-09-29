// src/pages/common_page/practiceAreasConfig.js
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import PaletteIcon from "@mui/icons-material/Palette";
import HubIcon from "@mui/icons-material/Hub";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import SecurityIcon from "@mui/icons-material/Security";

const icons = {
  cloud: <CloudQueueIcon fontSize="small" />,
  mobile: <PhoneIphoneIcon fontSize="small" />,
  palette: <PaletteIcon fontSize="small" />,
  hub: <HubIcon fontSize="small" />,
  autograph: <AutoGraphIcon fontSize="small" />,
  security: <SecurityIcon fontSize="small" />,
};

export const getPracticeAreasConfig = (t) => {
  const items = t("practiceAreas.items", { returnObjects: true });
  return {
    eyebrow: t("practiceAreas.eyebrow"),
    title: t("practiceAreas.title"),
    description: t("practiceAreas.description"),
    practices: items.map((item) => ({
      icon: icons[item.key],
      eyebrow: item.eyebrow,
      title: item.title,
      description: item.description,
      tags: item.tags,
    })),
  };
};

export default getPracticeAreasConfig;