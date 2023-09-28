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
  GetSAMLProviderRequest,
  GetSAMLProviderResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface GetSAMLProviderCommandInput extends GetSAMLProviderRequest {}
export interface GetSAMLProviderCommandOutput
  extends GetSAMLProviderResponse,
    __MetadataBearer {}
export declare class GetSAMLProviderCommand extends $Command<
  GetSAMLProviderCommandInput,
  GetSAMLProviderCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: GetSAMLProviderCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetSAMLProviderCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSAMLProviderCommandInput, GetSAMLProviderCommandOutput>;
  private serialize;
  private deserialize;
}
