import { createI18n } from 'vue-i18n';

const message = {
  // golbal
};

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'zh',
  message,
});

export default i18n;
