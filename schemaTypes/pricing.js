export default {
  name: 'pricingPage',
  title: 'Pricing Page',
  type: 'document',
  fields: [
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      initialValue: 'Free to start, built to scale',
    },
    {
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      rows: 2,
      initialValue: "Start on a 14-day free trial of the Growth plan, then choose the plan that's right for you.",
    },
    {
      name: 'businesses',
      title: 'Businesses Plans',
      type: 'pricingCategory',
      initialValue:       {
      "monthly": [
            {
                  "name": "Free",
                  "description": "Basic reporting for individuals who want visibility into key metrics.",
                  "price": 0,
                  "dataSources": "3 Data Sources included",
                  "cta": "Create Free Account",
                  "ctaType": "outline",
                  "featuresTitle": "Get core features like:",
                  "features": [
                        {
                              "text": "Data updated daily",
                              "icon": "check",
                              "_key": "bus_mon_0_feat_0"
                        },
                        {
                              "text": "1 Dashboard",
                              "isValue": true,
                              "value": "1",
                              "_key": "bus_mon_0_feat_1"
                        },
                        {
                              "text": "3 Users",
                              "isValue": true,
                              "value": "3",
                              "_key": "bus_mon_0_feat_2"
                        },
                        {
                              "text": "10 Custom metrics",
                              "isValue": true,
                              "value": "10",
                              "_key": "bus_mon_0_feat_3"
                        },
                        {
                              "text": "MCP",
                              "icon": "check",
                              "badge": "New",
                              "_key": "bus_mon_0_feat_4"
                        }
                  ],
                  "footerTitle": "Pull data from:",
                  "footerText": "130+ cloud services (incl. marketing, e-comm, CRM)",
                  "_key": "bus_mon_0"
            },
            {
                  "name": "Pro",
                  "description": "Business reporting & goal-tracking for teams that want easy, flexible visibility into their performance.",
                  "price": 199,
                  "dataSources": "3 Data Sources included",
                  "additionalPrice": "$7/mo per additional data source",
                  "cta": "Try It Free",
                  "ctaSecondary": "Book a Demo",
                  "ctaType": "primary",
                  "featuresTitle": "Everything in Free, plus:",
                  "features": [
                        {
                              "text": "AI Analyst",
                              "icon": "sparkles",
                              "badge": "New",
                              "_key": "bus_mon_1_feat_0"
                        },
                        {
                              "text": "Data updated hourly",
                              "icon": "check",
                              "highlight": true,
                              "_key": "bus_mon_1_feat_1"
                        },
                        {
                              "text": "Unlimited dashboards",
                              "icon": "infinity",
                              "_key": "bus_mon_1_feat_2"
                        },
                        {
                              "text": "Unlimited users",
                              "icon": "infinity",
                              "_key": "bus_mon_1_feat_3"
                        },
                        {
                              "text": "Unlimited custom metrics",
                              "icon": "infinity",
                              "_key": "bus_mon_1_feat_4"
                        },
                        {
                              "text": "Reports",
                              "icon": "check",
                              "_key": "bus_mon_1_feat_5"
                        },
                        {
                              "text": "Goals",
                              "icon": "check",
                              "_key": "bus_mon_1_feat_6"
                        },
                        {
                              "text": "Professional onboarding",
                              "icon": "check",
                              "_key": "bus_mon_1_feat_7"
                        }
                  ],
                  "footerTitle": "Additionally pull data from:",
                  "footerText": "Spreadsheets (Excel) and Custom Integrations",
                  "_key": "bus_mon_1"
            },
            {
                  "name": "Growth",
                  "description": "Advanced analytics and AI-generated analysis for teams that need deeper insights.",
                  "price": 499,
                  "dataSources": "3 Data Sources included",
                  "additionalPrice": "$7/mo per additional data source",
                  "cta": "Try It Free",
                  "ctaSecondary": "Book a Demo",
                  "ctaType": "primary",
                  "isPopular": true,
                  "featuresTitle": "Everything in Pro, plus:",
                  "features": [
                        {
                              "text": "AI Analyst",
                              "icon": "sparkles",
                              "badge": "New",
                              "_key": "bus_mon_2_feat_0"
                        },
                        {
                              "text": "Datasets",
                              "icon": "check",
                              "badge": "New",
                              "_key": "bus_mon_2_feat_1"
                        },
                        {
                              "text": "Raw data export & drilldown",
                              "icon": "check",
                              "badge": "New",
                              "_key": "bus_mon_2_feat_2"
                        },
                        {
                              "text": "Data prep (merge, filter, calculate)",
                              "icon": "check",
                              "_key": "bus_mon_2_feat_3"
                        },
                        {
                              "text": "AI-performance summaries",
                              "icon": "check",
                              "_key": "bus_mon_2_feat_4"
                        },
                        {
                              "text": "Forecast modeling",
                              "icon": "check",
                              "_key": "bus_mon_2_feat_5"
                        },
                        {
                              "text": "Anomaly detection",
                              "icon": "check",
                              "_key": "bus_mon_2_feat_6"
                        },
                        {
                              "text": "Growth onboarding",
                              "icon": "check",
                              "_key": "bus_mon_2_feat_7"
                        }
                  ],
                  "footerTitle": "Additionally pull data from:",
                  "footerText": "Databases and Cloud warehouses",
                  "_key": "bus_mon_2"
            },
            {
                  "name": "Premium",
                  "description": "Enterprise-grade service and security for larger companies that need more support.",
                  "price": 999,
                  "dataSources": "50 Data Sources included",
                  "additionalPrice": "$7/mo per additional data source",
                  "cta": "Talk to us",
                  "ctaType": "outline-purple",
                  "isBestValue": true,
                  "featuresTitle": "Everything in Growth, plus add-ons:",
                  "features": [
                        {
                              "text": "AI Analyst",
                              "icon": "sparkles",
                              "badge": "New",
                              "_key": "bus_mon_3_feat_0"
                        },
                        {
                              "text": "White-labeling ($250 value)",
                              "icon": "check",
                              "_key": "bus_mon_3_feat_1"
                        },
                        {
                              "text": "OKRs ($200 value)",
                              "icon": "check",
                              "badge": "New",
                              "_key": "bus_mon_3_feat_2"
                        },
                        {
                              "text": "Advanced security ($100 value)",
                              "icon": "check",
                              "_key": "bus_mon_3_feat_3"
                        },
                        {
                              "text": "15-min sync ($90 value)",
                              "icon": "check",
                              "_key": "bus_mon_3_feat_4"
                        },
                        {
                              "text": "Fiscal calendar ($50 value)",
                              "icon": "check",
                              "_key": "bus_mon_3_feat_5"
                        },
                        {
                              "text": "Reporting specialist ($200 value)",
                              "icon": "check",
                              "_key": "bus_mon_3_feat_6"
                        },
                        {
                              "text": "Priority support ($100 value)",
                              "icon": "check",
                              "_key": "bus_mon_3_feat_7"
                        },
                        {
                              "text": "Premium onboarding",
                              "icon": "check",
                              "_key": "bus_mon_3_feat_8"
                        }
                  ],
                  "footerText": "This plan includes data sources and add-ons valued at $1,290",
                  "_key": "bus_mon_3"
            }
      ],
      "annual": [
            {
                  "name": "Free",
                  "description": "Basic reporting for individuals who want visibility into key metrics.",
                  "price": 0,
                  "dataSources": "3 Data Sources included",
                  "cta": "Create Free Account",
                  "ctaType": "outline",
                  "featuresTitle": "Get core features like:",
                  "features": [
                        {
                              "text": "Data updated daily",
                              "icon": "check",
                              "_key": "bus_ann_0_feat_0"
                        },
                        {
                              "text": "1 Dashboard",
                              "isValue": true,
                              "value": "1",
                              "_key": "bus_ann_0_feat_1"
                        },
                        {
                              "text": "3 Users",
                              "isValue": true,
                              "value": "3",
                              "_key": "bus_ann_0_feat_2"
                        },
                        {
                              "text": "10 Custom metrics",
                              "isValue": true,
                              "value": "10",
                              "_key": "bus_ann_0_feat_3"
                        },
                        {
                              "text": "MCP",
                              "icon": "check",
                              "badge": "New",
                              "_key": "bus_ann_0_feat_4"
                        }
                  ],
                  "footerTitle": "Pull data from:",
                  "footerText": "130+ cloud services (incl. marketing, e-comm, CRM)",
                  "_key": "bus_ann_0"
            },
            {
                  "name": "Pro",
                  "description": "Business reporting & goal-tracking for teams that want easy, flexible visibility into their performance.",
                  "price": 159,
                  "dataSources": "3 Data Sources included",
                  "additionalPrice": "$5.6/mo per additional data source",
                  "cta": "Try It Free",
                  "ctaSecondary": "Book a Demo",
                  "ctaType": "primary",
                  "featuresTitle": "Everything in Free, plus:",
                  "features": [
                        {
                              "text": "AI Analyst",
                              "icon": "sparkles",
                              "badge": "New",
                              "_key": "bus_ann_1_feat_0"
                        },
                        {
                              "text": "Data updated hourly",
                              "icon": "check",
                              "highlight": true,
                              "_key": "bus_ann_1_feat_1"
                        },
                        {
                              "text": "Unlimited dashboards",
                              "icon": "infinity",
                              "_key": "bus_ann_1_feat_2"
                        },
                        {
                              "text": "Unlimited users",
                              "icon": "infinity",
                              "_key": "bus_ann_1_feat_3"
                        },
                        {
                              "text": "Unlimited custom metrics",
                              "icon": "infinity",
                              "_key": "bus_ann_1_feat_4"
                        },
                        {
                              "text": "Reports",
                              "icon": "check",
                              "_key": "bus_ann_1_feat_5"
                        },
                        {
                              "text": "Goals",
                              "icon": "check",
                              "_key": "bus_ann_1_feat_6"
                        },
                        {
                              "text": "Professional onboarding",
                              "icon": "check",
                              "_key": "bus_ann_1_feat_7"
                        }
                  ],
                  "footerTitle": "Additionally pull data from:",
                  "footerText": "Spreadsheets (Excel) and Custom Integrations",
                  "_key": "bus_ann_1"
            },
            {
                  "name": "Growth",
                  "description": "Advanced analytics and AI-generated analysis for teams that need deeper insights.",
                  "price": 399,
                  "dataSources": "3 Data Sources included",
                  "additionalPrice": "$5.6/mo per additional data source",
                  "cta": "Try It Free",
                  "ctaSecondary": "Book a Demo",
                  "ctaType": "primary",
                  "isPopular": true,
                  "featuresTitle": "Everything in Pro, plus:",
                  "features": [
                        {
                              "text": "AI Analyst",
                              "icon": "sparkles",
                              "badge": "New",
                              "_key": "bus_ann_2_feat_0"
                        },
                        {
                              "text": "Datasets",
                              "icon": "check",
                              "badge": "New",
                              "_key": "bus_ann_2_feat_1"
                        },
                        {
                              "text": "Raw data export & drilldown",
                              "icon": "check",
                              "badge": "New",
                              "_key": "bus_ann_2_feat_2"
                        },
                        {
                              "text": "Data prep (merge, filter, calculate)",
                              "icon": "check",
                              "_key": "bus_ann_2_feat_3"
                        },
                        {
                              "text": "AI-performance summaries",
                              "icon": "check",
                              "_key": "bus_ann_2_feat_4"
                        },
                        {
                              "text": "Forecast modeling",
                              "icon": "check",
                              "_key": "bus_ann_2_feat_5"
                        },
                        {
                              "text": "Anomaly detection",
                              "icon": "check",
                              "_key": "bus_ann_2_feat_6"
                        },
                        {
                              "text": "Growth onboarding",
                              "icon": "check",
                              "_key": "bus_ann_2_feat_7"
                        }
                  ],
                  "footerTitle": "Additionally pull data from:",
                  "footerText": "Databases and Cloud warehouses",
                  "_key": "bus_ann_2"
            },
            {
                  "name": "Premium",
                  "description": "Enterprise-grade service and security for larger companies that need more support.",
                  "price": 799,
                  "dataSources": "50 Data Sources included",
                  "additionalPrice": "$5.6/mo per additional data source",
                  "cta": "Talk to us",
                  "ctaType": "outline-purple",
                  "isBestValue": true,
                  "featuresTitle": "Everything in Growth, plus add-ons:",
                  "features": [
                        {
                              "text": "AI Analyst",
                              "icon": "sparkles",
                              "badge": "New",
                              "_key": "bus_ann_3_feat_0"
                        },
                        {
                              "text": "White-labeling ($200 value)",
                              "icon": "check",
                              "_key": "bus_ann_3_feat_1"
                        },
                        {
                              "text": "OKRs ($160 value)",
                              "icon": "check",
                              "badge": "New",
                              "_key": "bus_ann_3_feat_2"
                        },
                        {
                              "text": "Advanced security ($80 value)",
                              "icon": "check",
                              "_key": "bus_ann_3_feat_3"
                        },
                        {
                              "text": "15-min sync ($72 value)",
                              "icon": "check",
                              "_key": "bus_ann_3_feat_4"
                        },
                        {
                              "text": "Fiscal calendar ($40 value)",
                              "icon": "check",
                              "_key": "bus_ann_3_feat_5"
                        },
                        {
                              "text": "Reporting specialist ($160 value)",
                              "icon": "check",
                              "_key": "bus_ann_3_feat_6"
                        },
                        {
                              "text": "Priority support ($80 value)",
                              "icon": "check",
                              "_key": "bus_ann_3_feat_7"
                        },
                        {
                              "text": "Premium onboarding",
                              "icon": "check",
                              "_key": "bus_ann_3_feat_8"
                        }
                  ],
                  "footerText": "This plan includes data sources and add-ons valued at $1,032",
                  "_key": "bus_ann_3"
            }
      ]
      }
    },
    {
      name: 'agencies',
      title: 'Agencies Plans',
      type: 'pricingCategory',
      initialValue:       {
      "monthly": [
            {
                  "name": "Agency Starter",
                  "description": "Essential reporting for small agencies that need professional, client-ready dashboards.",
                  "price": 99,
                  "dataSources": "3 Data Sources included",
                  "additionalPrice": "$3/mo per additional data source",
                  "cta": "Try It Free",
                  "ctaSecondary": "Book a Demo",
                  "ctaType": "primary-orange",
                  "featuresTitle": "Get core features like:",
                  "features": [
                        {
                              "text": "Data updated hourly",
                              "icon": "check",
                              "highlight": true,
                              "_key": "age_mon_0_feat_0"
                        },
                        {
                              "text": "10 Dashboards (across all accounts)",
                              "isValue": true,
                              "value": "10",
                              "_key": "age_mon_0_feat_1"
                        },
                        {
                              "text": "5 Client accounts",
                              "isValue": true,
                              "value": "5",
                              "_key": "age_mon_0_feat_2"
                        },
                        {
                              "text": "Unlimited users",
                              "icon": "infinity",
                              "_key": "age_mon_0_feat_3"
                        },
                        {
                              "text": "Unlimited custom metrics",
                              "icon": "infinity",
                              "_key": "age_mon_0_feat_4"
                        },
                        {
                              "text": "Scheduling and sharing",
                              "icon": "check",
                              "_key": "age_mon_0_feat_5"
                        },
                        {
                              "text": "Bulk operations",
                              "icon": "check",
                              "_key": "age_mon_0_feat_6"
                        },
                        {
                              "text": "Client performance overview",
                              "icon": "check",
                              "_key": "age_mon_0_feat_7"
                        }
                  ],
                  "footerTitle": "Pull data from:",
                  "footerText": "130+ cloud services (incl. marketing, e-comm, CRM)",
                  "_key": "age_mon_0"
            },
            {
                  "name": "Agency Pro",
                  "description": "Business reporting & goal-tracking for teams that want easy, flexible visibility into their performance.",
                  "price": 199,
                  "dataSources": "3 Data Sources included",
                  "additionalPrice": "$3/mo per additional data source",
                  "cta": "Try It Free",
                  "ctaSecondary": "Book a Demo",
                  "ctaType": "primary",
                  "featuresTitle": "Everything in Starter, plus:",
                  "features": [
                        {
                              "text": "AI Analyst",
                              "icon": "sparkles",
                              "badge": "New",
                              "_key": "age_mon_1_feat_0"
                        },
                        {
                              "text": "Unlimited dashboards",
                              "icon": "infinity",
                              "_key": "age_mon_1_feat_1"
                        },
                        {
                              "text": "Unlimited client accounts",
                              "icon": "infinity",
                              "_key": "age_mon_1_feat_2"
                        },
                        {
                              "text": "Reports",
                              "icon": "check",
                              "_key": "age_mon_1_feat_3"
                        },
                        {
                              "text": "Goals",
                              "icon": "check",
                              "_key": "age_mon_1_feat_4"
                        },
                        {
                              "text": "Media creatives",
                              "icon": "check",
                              "_key": "age_mon_1_feat_5"
                        },
                        {
                              "text": "Remove branding from dashboards",
                              "icon": "check",
                              "_key": "age_mon_1_feat_6"
                        },
                        {
                              "text": "Professional onboarding",
                              "icon": "check",
                              "_key": "age_mon_1_feat_7"
                        }
                  ],
                  "footerTitle": "Additionally pull data from:",
                  "footerText": "Spreadsheets (Excel) and Custom Integrations",
                  "_key": "age_mon_1"
            },
            {
                  "name": "Agency Growth",
                  "description": "Advanced analytics and AI-generated analysis for teams that need deeper insights.",
                  "price": 499,
                  "dataSources": "3 Data Sources included",
                  "additionalPrice": "$3/mo per additional data source",
                  "cta": "Try It Free",
                  "ctaSecondary": "Book a Demo",
                  "ctaType": "primary-dark",
                  "featuresTitle": "Everything in Professional, plus:",
                  "features": [
                        {
                              "text": "AI Analyst",
                              "icon": "sparkles",
                              "badge": "New",
                              "_key": "age_mon_2_feat_0"
                        },
                        {
                              "text": "AI perf. summaries & Data stories",
                              "icon": "check",
                              "_key": "age_mon_2_feat_1"
                        },
                        {
                              "text": "Metric anomalies & Smart alerts",
                              "icon": "check",
                              "_key": "age_mon_2_feat_2"
                        },
                        {
                              "text": "Datasets",
                              "icon": "check",
                              "badge": "New",
                              "_key": "age_mon_2_feat_3"
                        },
                        {
                              "text": "Raw data export & drilldown",
                              "icon": "check",
                              "badge": "New",
                              "_key": "age_mon_2_feat_4"
                        },
                        {
                              "text": "Data prep (merge, filter, calculate)",
                              "icon": "check",
                              "_key": "age_mon_2_feat_5"
                        },
                        {
                              "text": "Forecast modeling",
                              "icon": "check",
                              "_key": "age_mon_2_feat_6"
                        },
                        {
                              "text": "Growth onboarding",
                              "icon": "check",
                              "_key": "age_mon_2_feat_7"
                        }
                  ],
                  "footerTitle": "Additionally pull data from:",
                  "footerText": "Databases and Cloud warehouses",
                  "_key": "age_mon_2"
            },
            {
                  "name": "Agency Premium",
                  "description": "Enterprise-grade service and security for larger companies that need more support.",
                  "price": 999,
                  "dataSources": "50 Data Sources included",
                  "additionalPrice": "$3/mo per additional data source",
                  "cta": "Talk to us",
                  "ctaType": "outline-purple",
                  "featuresTitle": "Everything in Growth, plus add-ons:",
                  "features": [
                        {
                              "text": "AI Analyst",
                              "icon": "sparkles",
                              "badge": "New",
                              "_key": "age_mon_3_feat_0"
                        },
                        {
                              "text": "White-labeling ($250 value)",
                              "icon": "check",
                              "_key": "age_mon_3_feat_1"
                        },
                        {
                              "text": "OKRs ($200 value)",
                              "icon": "check",
                              "badge": "New",
                              "_key": "age_mon_3_feat_2"
                        },
                        {
                              "text": "Advanced security ($100 value)",
                              "icon": "check",
                              "_key": "age_mon_3_feat_3"
                        },
                        {
                              "text": "15-min sync ($90 value)",
                              "icon": "check",
                              "_key": "age_mon_3_feat_4"
                        },
                        {
                              "text": "Fiscal calendar ($50 value)",
                              "icon": "check",
                              "_key": "age_mon_3_feat_5"
                        },
                        {
                              "text": "Reporting specialist ($200 value)",
                              "icon": "check",
                              "_key": "age_mon_3_feat_6"
                        },
                        {
                              "text": "Priority support ($100 value)",
                              "icon": "check",
                              "_key": "age_mon_3_feat_7"
                        },
                        {
                              "text": "Premium onboarding",
                              "icon": "check",
                              "_key": "age_mon_3_feat_8"
                        }
                  ],
                  "footerText": "This plan includes data sources and add-ons valued at $1,090",
                  "_key": "age_mon_3"
            }
      ],
      "annual": [
            {
                  "name": "Agency Starter",
                  "description": "Essential reporting for small agencies that need professional, client-ready dashboards.",
                  "price": 79,
                  "dataSources": "3 Data Sources included",
                  "additionalPrice": "$2.4/mo per additional data source",
                  "cta": "Try It Free",
                  "ctaSecondary": "Book a Demo",
                  "ctaType": "primary-orange",
                  "featuresTitle": "Get core features like:",
                  "features": [
                        {
                              "text": "Data updated hourly",
                              "icon": "check",
                              "highlight": true,
                              "_key": "age_ann_0_feat_0"
                        },
                        {
                              "text": "10 Dashboards (across all accounts)",
                              "isValue": true,
                              "value": "10",
                              "_key": "age_ann_0_feat_1"
                        },
                        {
                              "text": "5 Client accounts",
                              "isValue": true,
                              "value": "5",
                              "_key": "age_ann_0_feat_2"
                        },
                        {
                              "text": "Unlimited users",
                              "icon": "infinity",
                              "_key": "age_ann_0_feat_3"
                        },
                        {
                              "text": "Unlimited custom metrics",
                              "icon": "infinity",
                              "_key": "age_ann_0_feat_4"
                        },
                        {
                              "text": "Scheduling and sharing",
                              "icon": "check",
                              "_key": "age_ann_0_feat_5"
                        },
                        {
                              "text": "Bulk operations",
                              "icon": "check",
                              "_key": "age_ann_0_feat_6"
                        },
                        {
                              "text": "Client performance overview",
                              "icon": "check",
                              "_key": "age_ann_0_feat_7"
                        }
                  ],
                  "footerTitle": "Pull data from:",
                  "footerText": "130+ cloud services (incl. marketing, e-comm, CRM)",
                  "_key": "age_ann_0"
            },
            {
                  "name": "Agency Pro",
                  "description": "Business reporting & goal-tracking for teams that want easy, flexible visibility into their performance.",
                  "price": 159,
                  "dataSources": "3 Data Sources included",
                  "additionalPrice": "$2.4/mo per additional data source",
                  "cta": "Try It Free",
                  "ctaSecondary": "Book a Demo",
                  "ctaType": "primary",
                  "featuresTitle": "Everything in Starter, plus:",
                  "features": [
                        {
                              "text": "AI Analyst",
                              "icon": "sparkles",
                              "badge": "New",
                              "_key": "age_ann_1_feat_0"
                        },
                        {
                              "text": "Unlimited dashboards",
                              "icon": "infinity",
                              "_key": "age_ann_1_feat_1"
                        },
                        {
                              "text": "Unlimited client accounts",
                              "icon": "infinity",
                              "_key": "age_ann_1_feat_2"
                        },
                        {
                              "text": "Reports",
                              "icon": "check",
                              "_key": "age_ann_1_feat_3"
                        },
                        {
                              "text": "Goals",
                              "icon": "check",
                              "_key": "age_ann_1_feat_4"
                        },
                        {
                              "text": "Media creatives",
                              "icon": "check",
                              "_key": "age_ann_1_feat_5"
                        },
                        {
                              "text": "Remove branding from dashboards",
                              "icon": "check",
                              "_key": "age_ann_1_feat_6"
                        },
                        {
                              "text": "Professional onboarding",
                              "icon": "check",
                              "_key": "age_ann_1_feat_7"
                        }
                  ],
                  "footerTitle": "Additionally pull data from:",
                  "footerText": "Spreadsheets (Excel) and Custom Integrations",
                  "_key": "age_ann_1"
            },
            {
                  "name": "Agency Growth",
                  "description": "Advanced analytics and AI-generated analysis for teams that need deeper insights.",
                  "price": 399,
                  "dataSources": "3 Data Sources included",
                  "additionalPrice": "$2.4/mo per additional data source",
                  "cta": "Try It Free",
                  "ctaSecondary": "Book a Demo",
                  "ctaType": "primary-dark",
                  "featuresTitle": "Everything in Professional, plus:",
                  "features": [
                        {
                              "text": "AI Analyst",
                              "icon": "sparkles",
                              "badge": "New",
                              "_key": "age_ann_2_feat_0"
                        },
                        {
                              "text": "AI perf. summaries & Data stories",
                              "icon": "check",
                              "_key": "age_ann_2_feat_1"
                        },
                        {
                              "text": "Metric anomalies & Smart alerts",
                              "icon": "check",
                              "_key": "age_ann_2_feat_2"
                        },
                        {
                              "text": "Datasets",
                              "icon": "check",
                              "badge": "New",
                              "_key": "age_ann_2_feat_3"
                        },
                        {
                              "text": "Raw data export & drilldown",
                              "icon": "check",
                              "badge": "New",
                              "_key": "age_ann_2_feat_4"
                        },
                        {
                              "text": "Data prep (merge, filter, calculate)",
                              "icon": "check",
                              "_key": "age_ann_2_feat_5"
                        },
                        {
                              "text": "Forecast modeling",
                              "icon": "check",
                              "_key": "age_ann_2_feat_6"
                        },
                        {
                              "text": "Growth onboarding",
                              "icon": "check",
                              "_key": "age_ann_2_feat_7"
                        }
                  ],
                  "footerTitle": "Additionally pull data from:",
                  "footerText": "Databases and Cloud warehouses",
                  "_key": "age_ann_2"
            },
            {
                  "name": "Agency Premium",
                  "description": "Enterprise-grade service and security for larger companies that need more support.",
                  "price": 799,
                  "dataSources": "50 Data Sources included",
                  "additionalPrice": "$2.4/mo per additional data source",
                  "cta": "Talk to us",
                  "ctaType": "outline-purple",
                  "featuresTitle": "Everything in Growth, plus add-ons:",
                  "features": [
                        {
                              "text": "AI Analyst",
                              "icon": "sparkles",
                              "badge": "New",
                              "_key": "age_ann_3_feat_0"
                        },
                        {
                              "text": "White-labeling ($200 value)",
                              "icon": "check",
                              "_key": "age_ann_3_feat_1"
                        },
                        {
                              "text": "OKRs ($160 value)",
                              "icon": "check",
                              "badge": "New",
                              "_key": "age_ann_3_feat_2"
                        },
                        {
                              "text": "Advanced security ($80 value)",
                              "icon": "check",
                              "_key": "age_ann_3_feat_3"
                        },
                        {
                              "text": "15-min sync ($72 value)",
                              "icon": "check",
                              "_key": "age_ann_3_feat_4"
                        },
                        {
                              "text": "Fiscal calendar ($40 value)",
                              "icon": "check",
                              "_key": "age_ann_3_feat_5"
                        },
                        {
                              "text": "Reporting specialist ($160 value)",
                              "icon": "check",
                              "_key": "age_ann_3_feat_6"
                        },
                        {
                              "text": "Priority support ($80 value)",
                              "icon": "check",
                              "_key": "age_ann_3_feat_7"
                        },
                        {
                              "text": "Premium onboarding",
                              "icon": "check",
                              "_key": "age_ann_3_feat_8"
                        }
                  ],
                  "footerText": "This plan includes data sources and add-ons valued at $872",
                  "_key": "age_ann_3"
            }
      ]
      }
    },
    {
      name: 'trustText',
      title: 'Trust Section Text',
      type: 'string',
      initialValue: 'Trusted by more than 20,000 companies.',
    },
    {
      name: 'trustLogos',
      title: 'Trust Section Logos',
      type: 'array',
      of: [{type: 'image'}],
      description: 'Upload the logos to display at the bottom of the hero section',
    },
  ],
}
