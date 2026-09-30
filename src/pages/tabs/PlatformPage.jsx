import { useTranslation } from "react-i18next";
import AutomationFlowSection from "../common_page/AutomationFlowSection";
import ModulesSection from "../common_page/ModuleCard";
import getModulesConfig from "../common_page/modulesConfig";
import getAutomationFlowConfig from "../common_page/automationFlowConfig";


export default function PlatformPage() {
  const { t } = useTranslation();

  const currentModulesConfig = getModulesConfig(t);
  const currentAutomationFlowConfig = getAutomationFlowConfig(t);
  return (
    <>
      <ModulesSection config={currentModulesConfig} />
      <AutomationFlowSection config={currentAutomationFlowConfig} />
    </>
  );
}