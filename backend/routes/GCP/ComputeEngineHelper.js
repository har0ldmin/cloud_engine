require("dotenv").config();

const compute = require("@google-cloud/compute");
/**
 * TODO(developer): Uncomment and replace these variables before running the sample.
 */

// Create a new instance with the values provided above in the specified project and zone.
async function createInstance(name) {
    const instancesClient = new compute.InstancesClient();
    const projectId = "cloudengine-401003";
    const zone = "australia-southeast1-b";
    const machineType = "n1-standard-1";
    const sourceImage = "projects/debian-cloud/global/images/family/debian-10";
    const networkName = "global/networks/default";
    const instanceName = name;

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
// console.log("hello world");
// createInstance();

module.exports = {
    createInstance,
};
