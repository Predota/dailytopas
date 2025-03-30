import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeCategorySkeleton } from "./TypeCategory";

export interface TypeBlogPostFields {
    title: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.RichText;
    cover?: EntryFieldTypes.AssetLink;
    publishedAt: EntryFieldTypes.Date;
    category: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCategorySkeleton>>;
    content: EntryFieldTypes.RichText;
}

export type TypeBlogPostSkeleton = EntrySkeletonType<TypeBlogPostFields, "blogPost">;
export type TypeBlogPost<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeBlogPostSkeleton, Modifiers, Locales>;
