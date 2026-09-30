import { useTranslation } from "react-i18next";
import SectorsSection from "../common_page/SectorCard";
import { getSectorsConfig } from "../common_page/sectorsConfig";


export default function SolutionsPage() {
  const { t } = useTranslation();

  const currentSectorsConfig = getSectorsConfig(t);

  return <SectorsSection config={currentSectorsConfig} />;
}
 