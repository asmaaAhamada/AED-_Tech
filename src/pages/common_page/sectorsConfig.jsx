// src/pages/common_page/sectorsConfig.js
import BusinessIcon from "@mui/icons-material/Business";
import LanguageIcon from "@mui/icons-material/Language";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Inventory2Icon from "@mui/icons-material/Inventory2";

const icons = {
  single: <BusinessIcon fontSize="small" />,
  multi: <LanguageIcon fontSize="small" />,
  premium: <AutoAwesomeIcon fontSize="small" />,
  popup: <Inventory2Icon fontSize="small" />,
};

export const getSectorsConfig = (t) => {
  const items = t("sectors.items", { returnObjects: true });
  return {
    eyebrow: t("sectors.eyebrow"),
    title: t("sectors.title"),
    subtitle: t("sectors.subtitle"),
    resultLabel: t("sectors.resultLabel"),
    sectors: items.map((item) => ({
      icon: icons[item.key],
      title: item.title,
      description: item.description,
      result: item.result,
    })),
  };
};

export default getSectorsConfig;