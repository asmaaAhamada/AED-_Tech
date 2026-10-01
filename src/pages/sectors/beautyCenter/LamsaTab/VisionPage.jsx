import { useTranslation } from "react-i18next";
import ManifestoSection from "../../../common_page/ManifestoSection";
import getLamsaManifestoConfig from "../pageConfig/lamsaManifestoConfig";


export default function VisionPageLamsa() {
  const { t } = useTranslation();

  const currentManifestoConfig = getLamsaManifestoConfig(t);
  

  return <ManifestoSection config={currentManifestoConfig} />;
}