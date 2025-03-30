import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeTopicSkeleton } from "./TypeTopic";

export interface TypeTemplateFields {
    title: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    topic: EntryFieldTypes.EntryLink<TypeTopicSkeleton>;
}

export type TypeTemplateSkeleton = EntrySkeletonType<TypeTemplateFields, "template">;
export type TypeTemplate<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeTemplateSkeleton, Modifiers, Locales>;
