import { Paginator } from "@smithy/types";
import {
  ListSAMLProviderTagsCommandInput,
  ListSAMLProviderTagsCommandOutput,
} from "../commands/ListSAMLProviderTagsCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
export declare function paginateListSAMLProviderTags(
  config: IAMPaginationConfiguration,
  input: ListSAMLProviderTagsCommandInput,
  ...additionalArguments: any
): Paginator<ListSAMLProviderTagsCommandOutput>;
