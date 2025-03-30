import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypePromoCodeFields {
    title: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.RichText;
    cover?: EntryFieldTypes.AssetLink;
    url: EntryFieldTypes.Symbol;
    code: EntryFieldTypes.Symbol;
}

export type TypePromoCodeSkeleton = EntrySkeletonType<TypePromoCodeFields, "promoCode">;
export type TypePromoCode<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePromoCodeSkeleton, Modifiers, Locales>;
