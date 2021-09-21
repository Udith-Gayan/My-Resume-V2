export interface Theme {
    name: string;
    properties: any;
  }
  
  export const light: Theme = {
    name: "light",
    properties: {
      "--foreground-default": "#08090A",
      "--foreground-secondary": "#41474D",
      "--foreground-tertiary": "#797C80",
      "--foreground-quaternary": "#F4FAFF",
      "--foreground-light": "#41474D",
  
      "--background-default": "#F4FAFF",
      "--background-secondary": "#A3B9CC",
      "--background-tertiary": "#5C7D99",
      "--background-light": "#FFFFFF",
  
      "--primary-default": "#5DFDCB",
      "--primary-dark": "#24B286",
      "--primary-light": "#B2FFE7",
  
      "--error-default": "#EF3E36",
      "--error-dark": "#800600",
      "--error-light": "#FFCECC",
  
      "--background-tertiary-shadow": "0 1px 3px 0 rgba(92, 125, 153, 0.5)",

      // Udith Main Theme colors
      "--u-primary-color": "#1f3962",
      "--u-secondary-color": "#4e4b84",
      "--u-tertiary-color": "#560badff",
      "--u-fortary-color": "#f38ff0",
      "--u-fivetary-color": "#ffc6f4",
      "--u-sixtary-color": "#4cc9f0ff",

      

      // Navbar colors
      "--u-navbar-background": "var(--u-tertiary-color)",
      "--u-navbar-text": "#ffffff",

      // background colors
      "--u-background-color": "#e9e9e9",

      // Background for card
      "--u-card-background": "#ffffff",

      // Text color
      "--u-text-color" : "#1b0534d1",
      "--u-text-color-light": "rgba(87, 11, 173, 0.555)",

      // Text title colors
      "--u-title-color": "#560badff",
      "--u-subtitle-color": "#3c2b63",

      // Ruler color
      "--u-ruler-color": "rgba(176, 180, 182, 0.849)",
      
    }
  };
  
  export const dark: Theme = {
    name: "dark",
    properties: {
      "--foreground-default": "#5C7D99",
      "--foreground-secondary": "#A3B9CC",
      "--foreground-tertiary": "#F4FAFF",
      "--foreground-quaternary": "#E5E5E5",
      "--foreground-light": "#FFFFFF",
  
      // Udith background
      "--background-default": "#1f3962",
      "--background-secondary": "#4e4b84",
      "--background-tertiary": "#8f67b6",
      "--background-light": "#f38ff0",
  
      "--primary-default": "#5DFDCB",
      "--primary-dark": "#24B286",
      "--primary-light": "#B2FFE7",
  
      "--error-default": "#EF3E36",
      "--error-dark": "#800600",
      "--error-light": "#FFCECC",
  
      "--background-tertiary-shadow": "0 1px 3px 0 rgba(8, 9, 10, 0.5)",

      // Udith Main Theme colors ( Same as light mode)
      "--u-primary-color": "#1f3962",
      "--u-secondary-color": "#4e4b84",
      "--u-tertiary-color": "#560badff",
      "--u-fortary-color": "#f38ff0",
      "--u-fivetary-color": "#ffc6f4",
      "--u-sixtary-color": "#4cc9f0ff",

      // Navbar colors
      "--u-navbar-background": "var(--u-secondary-color)",
      "--u-navbar-text": "#d4f5ff",

      // background colors
      "--u-background-color": "var(--u-primary-color)",

      // Card background
      "--u-card-background": "var(--u-secondary-color)",

      // Text color
      "--u-text-color" : "#d4f5ff",
      "--u-text-color-light": "rgba(76, 202, 240, 0.582)",
     
      // Text title colors
      "--u-title-color": "#4cc9f0ff",
      "--u-subtitle-color": "#dbdbdb",

      // Ruler color
      "--u-ruler-color": "#4cc9f0ff",

    }
  };