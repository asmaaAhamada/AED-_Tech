import { useTranslation } from "react-i18next";
import  { getPracticeAreasConfig } from "../common_page/practiceAreasConfig";
import PracticeAreasSection from "../common_page/PracticeAreasSection";


export default function ServicesPage() {


const { t } = useTranslation();

  const currentPracticeAreasConfig = getPracticeAreasConfig(t);
  



  return <PracticeAreasSection config={currentPracticeAreasConfig} />;
}