import { Paginator } from "@smithy/types";
import { ListMFADeviceTagsCommandInput, ListMFADeviceTagsCommandOutput } from "../commands/ListMFADeviceTagsCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateListMFADeviceTags(config: IAMPaginationConfiguration, input: ListMFADeviceTagsCommandInput, ...additionalArguments: any): Paginator<ListMFADeviceTagsCommandOutput>;
