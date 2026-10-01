// src/pages/sectors/beautyCenter/lamsaContactConfig.js

export const getLamsaContactConfig = (t) => {
  const trustNotes = t("lamsa.contact.trustNotes", {
    returnObjects: true,
    defaultValue: [],
  });

  const businessTypeOptions = t(
    "lamsa.contact.fields.businessType.options",
    {
      returnObjects: true,
      defaultValue: [],
    }
  );

  const formTrustBadges = t(
    "lamsa.contact.formTrustBadges",
    {
      returnObjects: true,
      defaultValue: [],
    }
  );

  return {
    badgeLabel: t("lamsa.contact.badgeLabel"),

    title: t("lamsa.contact.title"),

    description: t("lamsa.contact.description"),

    primaryCta: {
      label: t("lamsa.contact.primaryCta.label"),
    },

    secondaryCta: {
      label: t("lamsa.contact.secondaryCta.label"),
    },

    trustNotes: Array.isArray(trustNotes)
      ? trustNotes
      : [],

    formTitle: t("lamsa.contact.formTitle"),

    formSubtitle: t("lamsa.contact.formSubtitle"),

    fields: {
      name: {
        label: t("lamsa.contact.fields.name.label"),
        placeholder: t(
          "lamsa.contact.fields.name.placeholder"
        ),
      },

      email: {
        label: t("lamsa.contact.fields.email.label"),
        placeholder: t(
          "lamsa.contact.fields.email.placeholder"
        ),
      },

      businessType: {
        label: t(
          "lamsa.contact.fields.businessType.label"
        ),
        options: Array.isArray(businessTypeOptions)
          ? businessTypeOptions
          : [],
      },
    },

    submitLabel: t("lamsa.contact.submitLabel"),

    formTrustBadges: Array.isArray(formTrustBadges)
      ? formTrustBadges
      : [],
  };
};

export default getLamsaContactConfig;