const STORE_URL = {
  iOS: 'https://www.apple.com/kr/app-store/',
  android: 'https://play.google.com/store',
};

const openExternalSite = (url: string) => {
  window.open(url, '', '_blank');
};

export const openStore = (platform: keyof typeof STORE_URL) => {
  openExternalSite(STORE_URL[platform]);
};
