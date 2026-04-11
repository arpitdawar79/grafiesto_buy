import type { CapacitorConfig } from "@capacitor/cli"

const config: CapacitorConfig = {
  "appId": "com.grafiesto.scrabeo",
  "appName": "Scrabeo",
  "webDir": "out",
  "server": {
    "androidScheme": "https",
    "iosScheme": "https"
  },
  "ios": {
    "contentInset": "always",
    "preferredContentMode": "mobile"
  },
  "android": {
    "allowMixedContent": false,
    "backgroundColor": "#FFFFFF"
  },
  "plugins": {
    "SplashScreen": {
      "launchShowDuration": 1200,
      "launchAutoHide": true,
      "backgroundColor": "#FFFFFF",
      "androidSplashResourceName": "splash",
      "splashFullScreen": true,
      "splashImmersive": true
    },
    "StatusBar": {
      "style": "DEFAULT",
      "overlaysWebView": true
    }
  }
}

export default config
