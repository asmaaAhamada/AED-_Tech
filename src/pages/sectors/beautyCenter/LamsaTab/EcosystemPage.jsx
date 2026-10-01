import { useTranslation } from "react-i18next";
import GridSection from "../../../common_page/GridSection";
import getLamsaGridConfig from "../pageConfig/lamsaGridConfig";


export default function EcosystemPageLamsa() {

const { t } = useTranslation();
  const currentGridConfig = getLamsaGridConfig(t); // ← أضف هاد السطر


  
  return <GridSection config={currentGridConfig} />;
}