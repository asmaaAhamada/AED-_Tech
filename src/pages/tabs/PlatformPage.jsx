import automationFlowConfig from "../common_page/automationFlowConfig";
import AutomationFlowSection from "../common_page/AutomationFlowSection";
import ModulesSection from "../common_page/ModuleCard";
import modulesConfig from "../common_page/modulesConfig";


export default function PlatformPage() {
  return (
    <>
      <ModulesSection config={modulesConfig} />
      <AutomationFlowSection config={automationFlowConfig} />
    </>
  );
}