import { useTranslation } from "react-i18next";
import getContactConfig from "../common_page/contactConfig";
import ContactSection from "../common_page/ContactSection";


export default function ContactPage() {




  const { t } = useTranslation();
  
const currentContactConfig = getContactConfig(t);
  return <ContactSection config={currentContactConfig} />;
}