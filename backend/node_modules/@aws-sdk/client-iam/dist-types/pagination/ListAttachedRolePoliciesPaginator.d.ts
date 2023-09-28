import { Paginator } from "@smithy/types";
import { ListAttachedRolePoliciesCommandInput, ListAttachedRolePoliciesCommandOutput } from "../commands/ListAttachedRolePoliciesCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateListAttachedRolePolicies(config: IAMPaginationConfiguration, input: ListAttachedRolePoliciesCommandInput, ...additionalArguments: any): Paginator<ListAttachedRolePoliciesCommandOutput>;
