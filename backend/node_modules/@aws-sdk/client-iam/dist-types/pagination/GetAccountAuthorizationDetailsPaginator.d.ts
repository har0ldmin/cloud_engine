import { Paginator } from "@smithy/types";
import { GetAccountAuthorizationDetailsCommandInput, GetAccountAuthorizationDetailsCommandOutput } from "../commands/GetAccountAuthorizationDetailsCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateGetAccountAuthorizationDetails(config: IAMPaginationConfiguration, input: GetAccountAuthorizationDetailsCommandInput, ...additionalArguments: any): Paginator<GetAccountAuthorizationDetailsCommandOutput>;
