// src/pages/sectors/beautyCenter/lamsaModulesConfig.js
import MenuBookIcon from "@mui/icons-material/MenuBook";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import BadgeIcon from "@mui/icons-material/Badge";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import HubIcon from "@mui/icons-material/Hub";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import RateReviewIcon from "@mui/icons-material/RateReview";
import ForumIcon from "@mui/icons-material/Forum";

const safeArray = (value) => (Array.isArray(value) ? value : []);

// نفس مبدأ الأصلي — أيقونات ثابتة بالكود، مربوطة بكود الموديول (MOD_01..MOD_12)
const icons = {
  MOD_01: <MenuBookIcon fontSize="small" />,
  MOD_02: <QrCodeScannerIcon fontSize="small" />,
  MOD_03: <BadgeIcon fontSize="small" />,
  MOD_04: <LocalOfferIcon fontSize="small" />,
  MOD_05: <ConfirmationNumberIcon fontSize="small" />,
  MOD_06: <EventAvailableIcon fontSize="small" />,
  MOD_07: <AutorenewIcon fontSize="small" />,
  MOD_08: <InsertChartIcon fontSize="small" />,
  MOD_09: <HubIcon fontSize="small" />,
  MOD_10: <AdminPanelSettingsIcon fontSize="small" />,
  MOD_11: <RateReviewIcon fontSize="small" />,
  MOD_12: <ForumIcon fontSize="small" />,
};

export const getLamsaModulesConfig = (t) => {
  const items = safeArray(t("lamsaModules.items", { returnObjects: true }));

  return {
    eyebrow: t("lamsaModules.eyebrow"),
    title: t("lamsaModules.title"),
    subtitle: t("lamsaModules.subtitle"),
    modules: items.map((item) => ({
      code: item.code,
      icon: icons[item.code],
      title: item.title,
      description: item.description,
      badge: { label: item.badgeLabel, value: item.badgeValue },
    })),
  };
};

export default getLamsaModulesConfig;