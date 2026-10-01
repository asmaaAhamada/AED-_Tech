import { useTranslation } from "react-i18next";
import AutomationFlowSection from "../../../common_page/AutomationFlowSection";
import ModulesSection from "../../../common_page/ModuleCard";
import getLamsaModulesConfig from "../pageConfig/lamsaModulesConfig";
import getLamsaAutomationFlowConfig from "../pageConfig/lamsaAutomationFlowConfig";


export default function PlatformPageLamsa() {
  const { t } = useTranslation();

  const currentModulesConfig = getLamsaModulesConfig(t);
  const currentAutomationFlowConfig = getLamsaAutomationFlowConfig(t);
  return (
    <>
      <ModulesSection config={currentModulesConfig} />
      <AutomationFlowSection config={currentAutomationFlowConfig} />
    </>
  );
}