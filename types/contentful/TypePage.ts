import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeBlogPostSkeleton } from "./TypeBlogPost";
import type { TypeFeaturedProductSkeleton } from "./TypeFeaturedProduct";
import type { TypeProductSkeleton } from "./TypeProduct";

export interface TypePageFields {
    title: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    topic?: EntryFieldTypes.Symbol<"Blog Post" | "Featured Product" | "Product">;
    content?: EntryFieldTypes.EntryLink<TypeBlogPostSkeleton | TypeFeaturedProductSkeleton | TypeProductSkeleton>;
}

export type TypePageSkeleton = EntrySkeletonType<TypePageFields, "page">;
export type TypePage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePageSkeleton, Modifiers, Locales>;
