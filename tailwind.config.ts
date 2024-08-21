import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize:{
        "header-1":"40px",
        "header-2":"32px",
        "header-3":"22px",
        "header-4":"18px",
        "header-5":"16px",
        "button":"16px",
        "body":"14px",
        "small":"12px",
        "micro":"9px"
      },
      colors:{
        "txt":{
          "primary": "var(--neutral-900)",
          "secondary": "var(--neutral-700)",
          "tertiary": "var(--neutral-600)",
          "queternary": "var(--neutral-500)",
          "quinary": "var(--neutral-400)",
          "disabled": "var(--neutral-200)",
          "white":{ 
            "primary":"var(--neutral-50)",
            "secondary":"var(--neutral-200)",
            "tertiary":"var(--neutral-400)",
            "quaternary":"var(--neutral-500)"
          },
          "brand":{
            "primary":"var(--aquamarine-600)",
            "secondary":"var(--aquamarine-800)"
          },
          "supp":{
            "primary":"var(--indigo-800)",
            "secondary":"var(--indigo-700)",
            "tertiary":"var(--indigo-600)",
            "quaternary":"var(--indigo-500)"
          },
          "onbrand":{
            "primary":"var(--aquamarine-25)",
            "secondary":"var(--aquamarine-50)",
            "tertiary":"var(--aquamarine-200)",
            "quaternary":"var(--aquamarine-300)"
          },
          "onsupp":{
            "primary":"var(--indigo-900)",
            "secondary":"var(--indigo-800)",
            "tertiary":"var(--indigo-700)",
            "quaternary":"var(--indigo-600)"
          },
          "error":{
            "primary":"var(--error-700)",
          },
          "onerror":{
            "primary":"var(--error-950)",
            "secondary":"var(--error-900)",
            "tertiary":"var(--error-700)"
          }
        },
        "border":{
          "primary":"var(--neutral-300)",
          "primary_solid":"var(--neutral-900)",
          "secondary":"var(--neutral-200)",
          "tertiary":"var(--neutral-100)",
          "disabled":"var(--neutral-200)",
          "brand":{
            "primary":"var(--aquamarine-600)"
          },
          "supp":{
            "primary":"var(--indigo-800)",
            "secondary":"var(--indigo-700)",
            "tertiary":"var(--indigo-600)",
          },
          "onbrand":{
            "primary":"var(--aquamarine-700)",
            "secondary":"var(--aquamarine-600)",
            "tertiary":"var(--aquamarine-800)"
          },
          "onsupp":{
            "primary":"var(--indigo-200)",
            "primary_solid":"var(--indigo-500)",
            "secondary":"var(--indigo-300)",
            "tertiary":"var(--indigo-400)"
          },
          "error":{
            "primary":"var(--error-600)"
          },
          "onerror":{
            "primary":"var(--error-100)",
            "secondary":"var(--error-200)",
            "tertiary":"var(--error-300)"
          }
        },
        "fg":{
          "primary":"var(--neutral-800)",
          "secondary":"var(--neutral-600)",
          "tertiary":"var(--neutral-500)",
          "quaternary":"var(--neutral-400)",
          "disabled":"var(--neutral-100)",
          "white":{
            "primary":"var(--neutral-100)",
            "secondary":"var(--neutral-300)",
            "tertiary":"var(--neutral-500)",
            "quaternary":"var(--neutral-600)",
          },
          "brand":{
            "primary":"var(--aquamarine-500)"
          },
          "supp":{
            "primary":"var(--indigo-500)"
          },
          "onbrand":{
            "primary":"var(--aquamarine-50)",
            "secondary":"var(--aquamarine-100)",
            "tertiary":"var(--aquamarine-300)"
          },
          "onsupp":{
            "primary":"var(--indigo-800)",
            "secondary":"var(--indigo-700)",
            "tertiary":"var(--indigo-600)"
          },
          "error":{
            "primary":"var(--error-600)",
          },
          "onerror":{
            "primary":"var(--error-900)",
            "secondary":"var(--error-800)",
            "tertiary":"var(--error-600)"
          }
        },
        "bg":{
          "primary":"var(--neutral-25)",
          "primary_alt":"var(--white-1000)",
          "primary_modal":"var(--white-1000)",
          "secondary":"var(--neutral-50)",
          "tertiary":"var(--neutral-100)",
          "quaternary":"var(--neutral-200)",
          "brand":{
            "primary":"var(--aquamarine-100)",
            "secondary":"var(--aquamarine-50)"
          },
          "button":{
            "base":{
              "primary":"var(--neutral-50)",
              "secondary":"var(--neutral-100)",
              "tertiary":"var(--neutral-200)",
              "disabled":"var(--neutral-50)"
            },
            "brand":{
              "primary":"var(--aquamarine-500)",
              "secondary":"var(--aquamarine-600)",
              "tertiary":"var(--aquamarine-700)",
            },
            "supp":{
              "primary":"var(--indigo-100)",
              "secondary":"var(--indigo-200)",
              "tertiary":"var(--indigo-300)"
            },
            "error":{
              "primary":"var(--error-50)",
              "secondary":"var(--error-100)",
              "tertiary":"var(--error-200)"
            },
            "search": "rgba(var(--indigo-500),0.3)",
          },
          "error":{
            "secondary":"var(--error-600)",
          }
        }
      },
    },
  },
  plugins: [],
};
export default config;
