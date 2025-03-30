import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeTopicSkeleton } from "./TypeTopic";

export interface TypeArchiveFields {
    title: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    topic: EntryFieldTypes.EntryLink<TypeTopicSkeleton>;
}

export type TypeArchiveSkeleton = EntrySkeletonType<TypeArchiveFields, "archive">;
export type TypeArchive<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeArchiveSkeleton, Modifiers, Locales>;
