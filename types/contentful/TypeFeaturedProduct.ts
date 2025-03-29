import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeFeaturedProductFields {
    title: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.RichText;
    cover?: EntryFieldTypes.AssetLink;
}

export type TypeFeaturedProductSkeleton = EntrySkeletonType<TypeFeaturedProductFields, "featuredProduct">;
export type TypeFeaturedProduct<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeFeaturedProductSkeleton, Modifiers, Locales>;
