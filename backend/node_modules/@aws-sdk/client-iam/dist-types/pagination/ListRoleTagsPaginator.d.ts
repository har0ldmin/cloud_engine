import { Paginator } from "@smithy/types";
import { ListRoleTagsCommandInput, ListRoleTagsCommandOutput } from "../commands/ListRoleTagsCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateListRoleTags(config: IAMPaginationConfiguration, input: ListRoleTagsCommandInput, ...additionalArguments: any): Paginator<ListRoleTagsCommandOutput>;
