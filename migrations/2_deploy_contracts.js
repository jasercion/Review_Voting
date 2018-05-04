var Voting = artifacts.require("PanelVoting");

module.exports = function(deployer) {
    deployer.deploy(Voting);
};
