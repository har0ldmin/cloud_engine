import { Paginator } from "@smithy/types";
import {
  ListOpenIDConnectProviderTagsCommandInput,
  ListOpenIDConnectProviderTagsCommandOutput,
} from "../commands/ListOpenIDConnectProviderTagsCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
export declare function paginateListOpenIDConnectProviderTags(
  config: IAMPaginationConfiguration,
  input: ListOpenIDConnectProviderTagsCommandInput,
  ...additionalArguments: any
): Paginator<ListOpenIDConnectProviderTagsCommandOutput>;
