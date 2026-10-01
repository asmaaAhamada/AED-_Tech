import { useTranslation } from "react-i18next";
import ContactSection from "../../../common_page/ContactSection";
import getLamsaContactConfig from "../pageConfig/LamsaContactConfig";


export default function ContactPageLamsa() {




  const { t } = useTranslation();
  
const currentContactConfig = getLamsaContactConfig(t);
  return <ContactSection config={currentContactConfig} />;
}