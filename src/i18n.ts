import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

export const messages = {
  en: () => import('../messages/en.json').then((module) => module.default),
  es: () => import('../messages/es.json').then((module) => module.default),
};

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!(locale in messages)) notFound();

  return {
    messages: await messages[locale as keyof typeof messages](),
  };
});
