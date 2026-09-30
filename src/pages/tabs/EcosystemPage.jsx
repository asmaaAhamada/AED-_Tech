import { useTranslation } from "react-i18next";
import getGridConfig from "../common_page/gridConfig";
import GridSection from "../common_page/GridSection";


export default function EcosystemPage() {

const { t } = useTranslation();
  const currentGridConfig = getGridConfig(t); // ← أضف هاد السطر


  
  return <GridSection config={currentGridConfig} />;
}