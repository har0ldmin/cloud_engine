import { Paginator } from "@smithy/types";
import { ListInstanceProfileTagsCommandInput, ListInstanceProfileTagsCommandOutput } from "../commands/ListInstanceProfileTagsCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateListInstanceProfileTags(config: IAMPaginationConfiguration, input: ListInstanceProfileTagsCommandInput, ...additionalArguments: any): Paginator<ListInstanceProfileTagsCommandOutput>;
