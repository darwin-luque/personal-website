import type { dictionaries, getDictionary } from "./dictionaries";

export type ParamsWithLang<T = object> = T & { lang: keyof typeof dictionaries; };

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

export type PropsWithDictionary<T = object> = T & { dict: Dictionary; };
