import { useTranslation } from "react-i18next";
import PracticeAreasSection from "../../../common_page/PracticeAreasSection";
import getLamsaPracticeAreasConfig from "../pageConfig/lamsaPracticeAreasConfig";


export default function ServicesPageLamsa() {


const { t } = useTranslation();

  const currentPracticeAreasConfig = getLamsaPracticeAreasConfig(t);
  



  return <PracticeAreasSection config={currentPracticeAreasConfig} />;
}