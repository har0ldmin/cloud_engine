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
  CreateOpenIDConnectProviderRequest,
  CreateOpenIDConnectProviderResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface CreateOpenIDConnectProviderCommandInput
  extends CreateOpenIDConnectProviderRequest {}
export interface CreateOpenIDConnectProviderCommandOutput
  extends CreateOpenIDConnectProviderResponse,
    __MetadataBearer {}
export declare class CreateOpenIDConnectProviderCommand extends $Command<
  CreateOpenIDConnectProviderCommandInput,
  CreateOpenIDConnectProviderCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: CreateOpenIDConnectProviderCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CreateOpenIDConnectProviderCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreateOpenIDConnectProviderCommandInput,
    CreateOpenIDConnectProviderCommandOutput
  >;
  private serialize;
  private deserialize;
}
