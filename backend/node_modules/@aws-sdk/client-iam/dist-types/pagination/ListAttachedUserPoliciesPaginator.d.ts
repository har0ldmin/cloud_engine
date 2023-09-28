import { Paginator } from "@smithy/types";
import { ListAttachedUserPoliciesCommandInput, ListAttachedUserPoliciesCommandOutput } from "../commands/ListAttachedUserPoliciesCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateListAttachedUserPolicies(config: IAMPaginationConfiguration, input: ListAttachedUserPoliciesCommandInput, ...additionalArguments: any): Paginator<ListAttachedUserPoliciesCommandOutput>;
