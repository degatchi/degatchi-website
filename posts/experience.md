# Foreword

**_Disclaimer: I need to update the details of each section a bit more!_**

A curated list of all my experience in start-ups and established companies/daos.

---

## Senior Blockchain Developer - [DopamineDAO](https://twitter.com/dopamine)

- Nov 2022 - Dec 2022.
- Languages: Solidity.
- Libraries/Tools: Foundry.

**_Accomplishments_**

- Helped optimise and give architecture advice in preparation for launch on the 1st of Dec.
- Created a proxy factory + wrapper contract to mimic underlying nft's details (tokenURI, name + symbol) to enable cross-standard compatability w/ ERC-721s and the self-created standard, ERC-721Bindables.
- Audited and gave advice for architecture.

---

## Senior Blockchain Developer - [STFX](https://twitter.com/STFX_IO)

- Sep 2022 - Nov 2022.
- Languages: Solidity + Rust.
- Libraries/Tools: Ethers.rs + Foundry.

**_Accomplishments_**

- Optimised code to become cleaner and more gas efficient.
- Integrated margin trading position reduction via market and limit orders using [https://gmx.io/](GMX) (a Decentralized
  Perpetual Exchange).
- Built a [merkle tree generator](https://github.com/DeGatchi/merkle-generator) and [transaction decoder](https://github.com/DeGatchi/tx-decoder) w/ Rust.
- Built fixed supply token and token presale contract utilising a merkle tree to claim filled buy orders from the backend.
- Designed mainnet spot manager vaults utilising 1inch.

---

## Fullstack MEV Bot Developer - Gattaca

- May 2022 - Aug 2022.
- Languages: Solidity + Rust.
- Libraries/Tools: Docker, AWS, Ethers.rs + Foundry.

**_Accomplishments_**

- I built a bot from scratch in Rust, for the first time, w/ recursive tx simulation, data fetching in mempool + block, backrunning, long-tail arb strategy integration w/ multiple exchanges, discord alerts + multiple arbs in a single tx.
- Competed with another searcher actively extracting and found another niche strategy that improves on their one.

---

## Fullstack Blockchain Developer + Founder - TheaterDAO

- Jan 2022 - March 2022.
- Languages: Javascript + Solidity.
- Libraries/Tools: React, Ethers.js + Foundry.
- Link: **https://theaterdao.xyz**

**_Accomplishments_**

- A fully-decentralised NFT suite that enables users to create their highly customisable NFT collection and then choose from 3 different sale models to distribute the NFT collection for _free_. There is a small fee that comes from the raised funds they make (around 5%). When a sale is created it generates a fundraising website for the collection, showing complete history of all purchases.
- Built out the brand TheaterDAO on twitter to 500 followers.

---

## Fullstack Blockchain Developer + CoFounder - SoulSwap

- Apr 2021 - Feb 2022.
- Languages: Typescript + Solidity.
- Libraries/Tools: React, Hardhat + Ethers.js.
- Link: **https://soulswap.finance**

**_Accomplishments_**

- CoFounded with _[0xBuns]_
- A UniswapV2 fork with the enhancements of:
  - cross-chain emissions that don't dilute the total supply, enabling incentivization of farms on multiple chains while remaining at the same total supply (e.g, 1_000_000 split across 5 chains).
  - Bonding farms: A user can deposit LP tokens to farm but can only withdraw the rewards by forfeiting their deposited LP to the protocol, creating permanent liquidity for the protocol.
- Built the token presale UI, with a real-time timer and conversion rate calculator that updated whenever someone purchased tokens + contributed to the contracts via internal auditing and discussing ideas.
- Built out the farms and staking UI components, including the rows, off-chain price calculating and statistics, and connection aspects.

---

## Fullstack Blockchain Developer - EasyBakeSwap

- Apr 2022 - Jun 2022.
- Languages: Typescript + Solidity.
- Libraries/Tools: React, Hardhat + Ethers.js.

**_Accomplishments_**

- Got mentored by _[0xBuns]_
- Upgraded the farms UI from v1 to v2 when PancakeSwap released their v2, adding the option to switch between rows and cards, moving where the stats were displayed and being able to sort by different metrics.
- Maintained TypeScript frontend, updating with any new features/releases.

---

## Fullstack Blockchain Developer - MakiSwap

- Jun 2020 - Jul 2021.
- Languages: Typescript + Solidity.
- Libraries/Tools: React, Hardhat + Ethers.js.

**_Accomplishments_**

- Saved the launch of the farms and staking UI. The previous dev left it unfinished with 2 days before the anticipated launch and I came in to prepare it before the ship date.
- Contributed ideas to launchpad.

---

## Junior Solidity Developer - DHedge

- March 2021 - Apr 2021.
- Languages: Typescript + Solidity.
- Libraries/Tools: Hardhat, Ethers.js + Web3.js.

**_Accomplishments_**

- Converted Truffle + Web3.js tests to HardHat Ethers.js & wrote extra
  unit tests in HardHat.
- Developed a trading bot that ran one of the hedge fund's pools (using PineScript, Node.js, Firebase Cloud Functions, and Heroku to run it).

---

## Intern Solidity Developer - Mobiloitee

- Nov 2020 - Jan 2021.
- Languages: Solidity.
- Libraries/Tools: Hardhat, Ethers.js + Remix.

**_Accomplishments_**

- Created a token with an airdrop distributor that sends tokens to each address that is added manually: (https://github.com/degatchi/xyzTokenVault).
- Explored how IPFS works and how it's used in conjunction with the ERC-721 standard.
- Researched foundational protocols at the technical level to understand the inner workings, including Aave, Uniswap, SushiSwap, RottenSwap and MakerDAO.
