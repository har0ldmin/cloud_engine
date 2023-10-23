```
[Proof of Concept Only]
This file contains the code to create a Compute Engine instance from Google Cloud Platform

In order to run this code, you need to have a a key.json file in the current directory. 

```;
require("dotenv").config();

const compute = require("@google-cloud/compute");

async function createInstance(name) {
    const instancesClient = new compute.InstancesClient();
    const projectId = "cloudengine-401003";
    const zone = "australia-southeast1-b";
    const machineType = "n1-standard-1";
    const sourceImage = "projects/debian-cloud/global/images/family/debian-10";
    const networkName = "global/networks/default";
    const instanceName = "testinstance";

    console.log(`Creating the ${instanceName} instance in ${zone}...`);

    const [response] = await instancesClient.insert({
        instanceResource: {
            name: instanceName,
            disks: [
                {
                    // Describe the size and source image of the boot disk to attach to the instance.
                    initializeParams: {
                        diskSizeGb: "10",
                        sourceImage,
                    },
                    autoDelete: true,
                    boot: true,
                    type: "PERSISTENT",
                },
            ],
            machineType: `zones/${zone}/machineTypes/${machineType}`,
            networkInterfaces: [
                {
                    // Use the network interface provided in the networkName argument.
                    name: networkName,
                },
            ],
        },
        project: projectId,
        zone,
    });
    let operation = response.latestResponse;
    const operationsClient = new compute.ZoneOperationsClient();

    // Wait for the create operation to complete.
    while (operation.status !== "DONE") {
        [operation] = await operationsClient.wait({
            operation: operation.name,
            project: projectId,
            zone: operation.zone.split("/").pop(),
        });
    }

    console.log("Instance created.");
}

createInstance();

module.exports = {
    createInstance,
};
