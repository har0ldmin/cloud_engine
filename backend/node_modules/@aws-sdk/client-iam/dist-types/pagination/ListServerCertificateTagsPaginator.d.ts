import { Paginator } from "@smithy/types";
import { ListServerCertificateTagsCommandInput, ListServerCertificateTagsCommandOutput } from "../commands/ListServerCertificateTagsCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateListServerCertificateTags(config: IAMPaginationConfiguration, input: ListServerCertificateTagsCommandInput, ...additionalArguments: any): Paginator<ListServerCertificateTagsCommandOutput>;
