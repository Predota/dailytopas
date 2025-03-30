import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeEmbedFields {
    title: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    type: EntryFieldTypes.Symbol<"Pinterest" | "Spotify">;
    html: EntryFieldTypes.Text;
}

export type TypeEmbedSkeleton = EntrySkeletonType<TypeEmbedFields, "embed">;
export type TypeEmbed<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeEmbedSkeleton, Modifiers, Locales>;
