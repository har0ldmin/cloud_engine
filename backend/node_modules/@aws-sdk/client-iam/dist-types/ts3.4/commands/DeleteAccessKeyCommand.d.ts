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
import { DeleteAccessKeyRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DeleteAccessKeyCommandInput extends DeleteAccessKeyRequest {}
export interface DeleteAccessKeyCommandOutput extends __MetadataBearer {}
export declare class DeleteAccessKeyCommand extends $Command<
  DeleteAccessKeyCommandInput,
  DeleteAccessKeyCommandOutput,
  IAMClientResolvedConfig
> {
  readonly input: DeleteAccessKeyCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteAccessKeyCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteAccessKeyCommandInput, DeleteAccessKeyCommandOutput>;
  private serialize;
  private deserialize;
}
