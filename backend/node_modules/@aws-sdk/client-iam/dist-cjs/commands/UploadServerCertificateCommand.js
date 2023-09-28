"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadServerCertificateCommand = exports.$Command = void 0;
const middleware_endpoint_1 = require("@smithy/middleware-endpoint");
const middleware_serde_1 = require("@smithy/middleware-serde");
const smithy_client_1 = require("@smithy/smithy-client");
Object.defineProperty(exports, "$Command", { enumerable: true, get: function () { return smithy_client_1.Command; } });
const types_1 = require("@smithy/types");
const models_1_1 = require("../models/models_1");
const Aws_query_1 = require("../protocols/Aws_query");
class UploadServerCertificateCommand extends smithy_client_1.Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0, middleware_endpoint_1.getEndpointPlugin)(configuration, UploadServerCertificateCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "IAMClient";
        const commandName = "UploadServerCertificateCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.UploadServerCertificateRequestFilterSensitiveLog,
            outputFilterSensitiveLog: (_) => _,
            [types_1.SMITHY_CONTEXT_KEY]: {
                service: "AWSIdentityManagementV20100508",
                operation: "UploadServerCertificate",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_query_1.se_UploadServerCertificateCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_query_1.de_UploadServerCertificateCommand)(output, context);
    }
}
exports.UploadServerCertificateCommand = UploadServerCertificateCommand;
