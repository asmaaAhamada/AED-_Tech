export const getContactConfig = (t) => {
  const trustNotes = t("contact.trustNotes", {
    returnObjects: true,
    defaultValue: [],
  });

  const businessTypeOptions = t("contact.fields.businessType.options", {
    returnObjects: true,
    defaultValue: [],
  });

  const formTrustBadges = t("contact.formTrustBadges", {
    returnObjects: true,
    defaultValue: [],
  });

  return {
    badgeLabel: t("contact.badgeLabel"),
    title: t("contact.title"),
    description: t("contact.description"),

    primaryCta: {
      label: t("contact.primaryCta.label"),
    },

    secondaryCta: {
      label: t("contact.secondaryCta.label"),
    },

    trustNotes: Array.isArray(trustNotes) ? trustNotes : [],

    formTitle: t("contact.formTitle"),
    formSubtitle: t("contact.formSubtitle"),

    fields: {
      name: {
        label: t("contact.fields.name.label"),
        placeholder: t("contact.fields.name.placeholder"),
      },

      email: {
        label: t("contact.fields.email.label"),
        placeholder: t("contact.fields.email.placeholder"),
      },

      businessType: {
        label: t("contact.fields.businessType.label"),
        options: Array.isArray(businessTypeOptions)
          ? businessTypeOptions
          : [],
      },
    },

    submitLabel: t("contact.submitLabel"),

    formTrustBadges: Array.isArray(formTrustBadges)
      ? formTrustBadges
      : [],
  };
};

export default getContactConfig;