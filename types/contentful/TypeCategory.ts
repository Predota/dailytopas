import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeTopicSkeleton } from "./TypeTopic";

export interface TypeCategoryFields {
    title: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.RichText;
    cover?: EntryFieldTypes.AssetLink;
    topic: EntryFieldTypes.EntryLink<TypeTopicSkeleton>;
}

export type TypeCategorySkeleton = EntrySkeletonType<TypeCategoryFields, "category">;
export type TypeCategory<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeCategorySkeleton, Modifiers, Locales>;
