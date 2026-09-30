import { useTranslation } from "react-i18next";
import getManifestoConfig from "../common_page/manifestoConfig";
import ManifestoSection from "../common_page/ManifestoSection";


export default function VisionPage() {
  const { t } = useTranslation();

  const currentManifestoConfig = getManifestoConfig(t);
  

  return <ManifestoSection config={currentManifestoConfig} />;
}