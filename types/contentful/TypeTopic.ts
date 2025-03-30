import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeTopicFields {
    title: EntryFieldTypes.Symbol;
    id: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.RichText;
    cover?: EntryFieldTypes.AssetLink;
}

export type TypeTopicSkeleton = EntrySkeletonType<TypeTopicFields, "topic">;
export type TypeTopic<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeTopicSkeleton, Modifiers, Locales>;
