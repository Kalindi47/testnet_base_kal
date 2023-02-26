import { ethers } from 'hardhat';

async function main() {
  const NFT = await ethers.getContractFactory('NFT');
  const nft = await NFT.deploy();

  await nft.deployed();
  await nft.mint("0x29A6738E0b9b5e2DBf9e3e35Bd1Ae00D8bD82390");

  console.log(nft, 'nft');
  console.log('NFT Contract Deployed at ' + nft.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});