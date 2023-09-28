import { Paginator } from "@smithy/types";
import { ListRolePoliciesCommandInput, ListRolePoliciesCommandOutput } from "../commands/ListRolePoliciesCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateListRolePolicies(config: IAMPaginationConfiguration, input: ListRolePoliciesCommandInput, ...additionalArguments: any): Paginator<ListRolePoliciesCommandOutput>;
