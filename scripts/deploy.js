const hre = require('hardhat');

async function main() {
	const SunToken = await hre.ethers.getContractFactory('SunToken');
	const sunToken = await SunToken.deploy();

	await sunToken.deployed();

	console.log(
		`sunToken with ${ethers.utils.formatEther(
			lockedAmount
		)}ETH and unlock timestamp ${unlockTime} deployed to ${sunToken.address}`
	);
}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
