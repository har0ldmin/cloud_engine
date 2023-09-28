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
import { AddClientIDToOpenIDConnectProviderRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface AddClientIDToOpenIDConnectProviderCommandInput
  extends AddClientIDToOpenIDConnectProviderRequest {}
export interface AddClientIDToOpenIDConnectProviderCommandOutput
  extends __MetadataBearer {}
export declare class AddClientIDToOpenIDConnectProviderCommand extends $Command<
  AddClientIDToOpenIDConnectProviderCommandInput,
  AddClientIDToOpenIDConnectProviderCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: AddClientIDToOpenIDConnectProviderCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: AddClientIDToOpenIDConnectProviderCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    AddClientIDToOpenIDConnectProviderCommandInput,
    AddClientIDToOpenIDConnectProviderCommandOutput
  >;
  private serialize;
  private deserialize;
}
