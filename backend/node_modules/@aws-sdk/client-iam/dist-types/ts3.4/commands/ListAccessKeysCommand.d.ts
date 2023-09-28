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
  ListAccessKeysRequest,
  ListAccessKeysResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListAccessKeysCommandInput extends ListAccessKeysRequest {}
export interface ListAccessKeysCommandOutput
  extends ListAccessKeysResponse,
    __MetadataBearer {}
export declare class ListAccessKeysCommand extends $Command<
  ListAccessKeysCommandInput,
  ListAccessKeysCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: ListAccessKeysCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListAccessKeysCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAccessKeysCommandInput, ListAccessKeysCommandOutput>;
  private serialize;
  private deserialize;
}
