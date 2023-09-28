import { Paginator } from "@smithy/types";
import {
  ListPolicyTagsCommandInput,
  ListPolicyTagsCommandOutput,
} from "../commands/ListPolicyTagsCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
export declare function paginateListPolicyTags(
  config: IAMPaginationConfiguration,
  input: ListPolicyTagsCommandInput,
  ...additionalArguments: any
): Paginator<ListPolicyTagsCommandOutput>;
