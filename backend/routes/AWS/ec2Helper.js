// ```
// A ec2 related helper Class
// Mainly used for creating and managing EC2 instances
// Uses AWS SDK
// ```;

// import modules
const AWS = require("aws-sdk");
require("dotenv").config();
require("aws-sdk/lib/maintenance_mode_message").suppress = true;

// set debug mode false to disable console.log
const debug = false;

// set AWS credentials
AWS.config.update({
    // uncomment the following lines to use your own credentials
    // accessKeyId: process.env.ACCESSKEY,
    // secretAccessKey: process.env.SECRETACCESSKEY,

    // use the following lines to use the university account
    accessKeyId: process.env.aws_access_key_id,
    secretAccessKey: process.env.aws_secret_access_key,
    sessionToken: process.env.aws_session_token, // Only applicable when using university account

    region: "ap-southeast-2",
});

// check whether the credentials are loaded
AWS.config.getCredentials(function (err) {
    if (err) console.log(err.stack); // credentials not loaded
    else {
        console.log("EC2 Helper ROOT Access key:", AWS.config.credentials.accessKeyId);
    }
});

// create EC2 service object
const ec2 = new AWS.EC2({ apiVersion: "2016-11-15" });

// create EC2 instance creation function
function createEC2Instance(instanceName) {
    let result = {
        name: instanceName,
        ec2info: [],
        isError: false,
        message: null,
    };
    var instanceParams = {
        ImageId: "ami-0dfb78957e4edea0c",
        InstanceType: "t2.micro",
        // KeyName: "KEY_PAIR_NAME",
        MinCount: 1,
        MaxCount: 1,
    };
    // Create a promise on an EC2 service object
    return new Promise((resolve, reject) => {
        ec2.runInstances(instanceParams, async (err, data) => {
            if (err) {
                console.error(err, err.stack);
                result.isError = true;
                result.message = err;
                reject(result);
            } else {
                if (debug) console.log(data);
                var instanceId = data.Instances[0].InstanceId;
                var PrivateIpAddress = data.Instances[0].PrivateIpAddress;
                var PrivateDnsName = data.Instances[0].PrivateDnsName;
                var status = data.Instances[0].State.Name;
                tagParams = {
                    Resources: [instanceId],
                    Tags: [
                        {
                            Key: "Name",
                            Value: instanceName,
                        },
                    ],
                };
                try {
                    await ec2.createTags(tagParams).promise();
                    result.ec2info = [
                        {
                            InstanceId: instanceId,
                            Status: status,
                            PrivateIpAddress: PrivateIpAddress,
                            PrivateDnsName: PrivateDnsName,
                            tagName: instanceName,
                        },
                    ];
                } catch (err) {
                    console.error(err, err.stack);
                    result.isError = true;
                    result.message = err;
                    reject(result);
                }
                resolve(result);
            }
        });
    });
}

// create EC2 instance start function
function startEC2Instance(instanceId) {
    let result = {
        name: null,
        ec2info: [],
        isError: false,
        message: null,
    };
    var params = {
        InstanceIds: [instanceId],
        DryRun: true,
    };
    // call EC2 to start the selected instances
    return new Promise((resolve, reject) => {
        ec2.startInstances(params, function (err, data) {
            if (err && err.code === "DryRunOperation") {
                params.DryRun = false;
                ec2.startInstances(params, function (err, data) {
                    if (err) {
                        console.log("Error", err);
                        result.isError = true;
                        result.message = err;
                        reject(result);
                    } else if (data) {
                        result.ec2info = data.StartingInstances;
                        resolve(result);
                    }
                });
            } else {
                console.log("You don't have permission to start instances.");
                result.isError = true;
                result.message = err;
                reject(result);
            }
        });
    });
}

// create EC2 instance stop function
function stopEC2Instance(instanceId) {
    let result = {
        name: null,
        ec2info: [],
        isError: false,
        message: null,
    };
    var params = {
        InstanceIds: [instanceId],
        DryRun: true,
    };

    // call EC2 to stop the selected instances
    return new Promise((resolve, reject) => {
        ec2.stopInstances(params, function (err, data) {
            if (err && err.code === "DryRunOperation") {
                params.DryRun = false;
                ec2.stopInstances(params, function (err, data) {
                    if (err) {
                        console.log("Error", err);
                        result.isError = true;
                        result.message = err;
                        reject(result);
                    } else if (data) {
                        // console.log("Success", data.StoppingInstances);
                        result.ec2info = data.StoppingInstances;
                        resolve(result);
                    }
                });
            } else {
                console.log("You don't have permission to stop instances");
                result.isError = true;
                result.message = "You don't have permission to stop instances";
                reject(result);
            }
        });
    });
}

// create EC2 instance reboot function
function rebootEC2Instance(instanceId) {
    let result = {
        name: null,
        ec2info: [],
        isError: false,
        message: null,
    };
    var params = {
        InstanceIds: [instanceId],
        DryRun: true,
    };

    // call EC2 to reboot instances
    return new Promise((resolve, reject) => {
        ec2.rebootInstances(params, function (err, data) {
            if (err && err.code === "DryRunOperation") {
                params.DryRun = false;
                ec2.rebootInstances(params, function (err, data) {
                    if (err) {
                        console.log("Error", err);
                        result.isError = true;
                        result.message = err;
                        reject(result);
                    } else if (data) {
                        // console.log("Success", data);
                        result.ec2info = data;
                        resolve(result);
                    }
                });
            } else {
                console.log("You don't have permission to reboot instances.");
                result.isError = true;
                result.message = "You don't have permission to reboot instances.";
                reject(result);
            }
        });
    });
}

// create EC2 instance describe function
function describeEC2Instance(instanceId) {
    let result = {
        name: null,
        ec2info: [],
        isError: false,
        message: null,
    };
    var params = {
        InstanceIds: [instanceId],
    };

    // call EC2 to retrieve instance description
    return new Promise((resolve, reject) => {
        ec2.describeInstances(params, function (err, data) {
            if (err) {
                console.log("Error", err);
                result.isError = true;
                result.message = err;
                reject(result);
            } else {
                result.ec2info = [
                    {
                        InstanceId: data.Reservations[0].Instances[0].InstanceId,
                        Status: data.Reservations[0].Instances[0].State.Name,
                        PrivateIpAddress: data.Reservations[0].Instances[0].PrivateIpAddress,
                        PrivateDnsName: data.Reservations[0].Instances[0].PrivateDnsName,
                        InstanceType: data.Reservations[0].Instances[0].InstanceType,
                    },
                ];
                result.name = data.Reservations[0].Instances[0].Tags[0].Value;
                resolve(result);
            }
        });
    });
}

// create helper that returns all ec2 instance that belongs to the user
function getAllEC2Instances(instanceIds) {
    let result = {
        name: [],
        ec2info: [],
        isError: false,
        message: null,
    };

    // show all instance that is not terminated
    var params = {
        InstanceIds: instanceIds,
        Filters: [
            {
                Name: "instance-state-name",
                Values: ["pending", "running", "stopping", "stopped"],
            },
        ],
    };

    // call EC2 to retrieve instance description
    return new Promise((resolve, reject) => {
        ec2.describeInstances(params, function (err, data) {
            if (err) {
                console.log("Error", err);
                result.isError = true;
                result.message = err;
                reject(result);
            } else {
                for (let i = 0; i < data.Reservations.length; i++) {
                    result.ec2info[i] = {
                        InstanceId: data.Reservations[i].Instances[0].InstanceId,
                        Status: data.Reservations[i].Instances[0].State.Name,
                        PrivateIpAddress: data.Reservations[i].Instances[0].PrivateIpAddress,
                        PrivateDnsName: data.Reservations[i].Instances[0].PrivateDnsName,
                        InstanceType: data.Reservations[i].Instances[0].InstanceType,
                        tagName: data.Reservations[i].Instances[0].Tags[0].Value,
                    };
                    result.name[i] = data.Reservations[i].Instances[0].Tags[0].Value;
                }
                resolve(result);
            }
        });
    });
}

// create EC2 instance termination function
function terminateEC2Instance(instanceId) {
    let result = {
        name: null,
        ec2info: [],
        isError: false,
        message: null,
    };
    var params = {
        InstanceIds: [instanceId],
        DryRun: true,
    };

    // call EC2 to terminate instances
    return new Promise((resolve, reject) => {
        ec2.terminateInstances(params, function (err, data) {
            if (err && err.code === "DryRunOperation") {
                params.DryRun = false;
                ec2.terminateInstances(params, function (err, data) {
                    if (err) {
                        console.log("Error", err);
                        result.isError = true;
                        result.message = err;
                        reject(result);
                    } else if (data) {
                        result.ec2info = [
                            {
                                InstanceId: data.TerminatingInstances[0].InstanceId,
                                CurrentState: data.TerminatingInstances[0].CurrentState.Name,
                                PreviousState: data.TerminatingInstances[0].PreviousState.Name,
                            },
                        ];
                        resolve(result);
                    }
                });
            } else {
                console.log("You don't have permission to terminate instances.");
                result.isError = true;
                result.message = "You don't have permission to terminate instances.";
                reject(result);
            }
        });
    });
}

// export all functions
module.exports = {
    createEC2Instance,
    startEC2Instance,
    stopEC2Instance,
    rebootEC2Instance,
    describeEC2Instance,
    getAllEC2Instances,
    terminateEC2Instance,
};
