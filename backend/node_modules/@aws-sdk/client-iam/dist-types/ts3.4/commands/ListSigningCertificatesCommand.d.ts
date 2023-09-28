import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IAMClient";
import {
  ListSigningCertificatesRequest,
  ListSigningCertificatesResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListSigningCertificatesCommandInput
  extends ListSigningCertificatesRequest {}
export interface ListSigningCertificatesCommandOutput
  extends ListSigningCertificatesResponse,
    __MetadataBearer {}
export declare class ListSigningCertificatesCommand extends $Command<
  ListSigningCertificatesCommandInput,
  ListSigningCertificatesCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: ListSigningCertificatesCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListSigningCertificatesCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListSigningCertificatesCommandInput,
    ListSigningCertificatesCommandOutput
  >;
  private serialize;
  private deserialize;
}
