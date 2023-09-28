import { Paginator } from "@smithy/types";
import { ListSSHPublicKeysCommandInput, ListSSHPublicKeysCommandOutput } from "../commands/ListSSHPublicKeysCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateListSSHPublicKeys(config: IAMPaginationConfiguration, input: ListSSHPublicKeysCommandInput, ...additionalArguments: any): Paginator<ListSSHPublicKeysCommandOutput>;
