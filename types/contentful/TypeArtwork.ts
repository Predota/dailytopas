import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeArtworkFields {
    title: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.RichText;
    cover?: EntryFieldTypes.AssetLink;
}

export type TypeArtworkSkeleton = EntrySkeletonType<TypeArtworkFields, "artwork">;
export type TypeArtwork<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeArtworkSkeleton, Modifiers, Locales>;
