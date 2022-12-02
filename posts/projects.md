# Foreword

A list of all the projects I have built from January 2021 until now. Almost all of the repos are private because they are able to generate money when used. When people hire me I can use them as reference and cater to their needs.

---

# Full-Stack

## [SoulSwap](https://soulswap.finance/)

- Build time: 6 months
- Repo(s): **Public, https://github.com/SoulSwapFinance**

A UniswapV2 fork on Fantom Opera with cross-chain swaps, lending, traditional SushiSwap MasterChef farms, staking and custom bonding farms that allow users to deposit LP tokens to start earning farm rewards, but when they want to harvest they need to forfeit their LP position to receive the rewards, resulting in protocol owned liquidity.

- $175.8mil total volume traded.
- $15mil ATH total value locked (**[DeFi Llama](https://defillama.com/protocol/soulswap?denomination=FTM)**)
- $500k funded presale (w/ landing page + dynamically changing ratio).
- 1.5k telegram members.
- 1.45k discord members.
- 5k twitter followers

## [TheaterDAO](https://theaterdao.xyz/)

- Build time: 5 months
- Repo(s): **Private**

A fully decentralised NFT platform on Fantom Opera that allows anyone to create and own an NFT contract (w/ their desired settings), create a presale (out of 3 unique models, (3 more are a WIP)), and pay a small 5% commission w/ the funds raised.

- 28 NFT contracts created.
- 20 NFT presales created.
- 500 twitter members.

---

# Solidity

## Merkle Tree Presale

- Build time: 2 days
- Contracts: 1
- Tested: True
- Repo(s): **Public**, https://github.com/DeGatchi/merkle-presale.

A fundraising contract that emits events when users create a buy order, which is then filled in from the backend. After the sale's duration has finalised, a merkle tree is created using **_[merkle-tree-generator](https://github.com/DeGatchi/merkle-generator)_** and a root is set. Users are then able to claim their filled presale token orders and their USDC that wasn't used to fill their remaining orders.

## ERC-20 Token

- Build time: 15 minutes
- Contracts: 1
- Tested: True
- Repo(s): **Private**

A simple ERC-20 token with a fixed supply and capabilities to be integrated into a DAO voting system.

## MasterChef Auto Compounder

- Build time: 2 days
- Contracts: 1
- Tested: False
- Repo(s): **Private**

Enables users to deposit under a single entity (the contract) that harvests, exchanges the rewards for the underlying liquidity pool tokens and reinvests it back into the pool, compounding.

## Algorithmic Auctions

- Build time: 2 weeks
- Contracts: 3
- Tested: True
- Repo(s): **Private**

A fully decentralised auction house that cycles through each lot algorithmically w/o the need for a EOA to interact with the contract, distributing winning bids + funds to each designated party involved. Anyone is able to deposit bundles of NFTs which are then added to the next auction after the auction delay. There is also a semi-algorithmic version where the deployer chooses the NFT lots to be auctioned, allowing for running a auction house community.

## NFT Collection Launchpad

- Build time: 3 months
- Contracts: 7
- Tested: True
- Repo(s): **Private**

A fully decentralised platform to select, deploy and **own** from a variety of sale models to distribute your NFT collection (e.g., Fixed, Thresholds, Bonding Curve + Dutch Auctions), allowing artists that don't have funds to hire a dev to have access to advanced distribution models for free.

## ERC20 launchpad

- Build time: 2 months
- Contracts: 4
- Tested: False
- Repo(s): **Private**

A fully decentralised platform, similar to MISO, allows anyone to select, deploy and own from a variety of sale models to distribute their ERC20 tokens. The deployer is able to choose which token will be used to purchase the ERC20, how much someone can buy, the duration and whether there is a whitelist in place.

## Atomic Trades

- Build time: 3 months
- Contracts: 3
- Tested: True
- Repo(s): **Private**

AtomicTrades is a multi-token compatible escrow contract that allows listings of trades to the market (public trades) or to a specific address (private trades), where the trade is configurable via an offer and can be either accepted or counter-offered by the creator of the trade.

## NFT Marketplace

- Build time: 5 days
- Contracts: 1
- Tested: False
- Repo(s): **Private**

Sell and buy bundles of NFTs, sell or buy instantly on the floor prices, ask + provide NFTs - allowing NFT arbitrage.

## NFT Collateralised Loans

- Build time: 2 days
- Contracts: 1
- Tested: False
- Repo(s): **Private**

A p2p platform that allows anyone to borrow NFTs by depositing collateral w/ an interest rate. If the NFT is not repaid, the provider is able to seizes the borrower's collateral as a reimbursement payment for the stolen NFT. If the NFT is repaid, the provider receives the NFT + the interest from the collateral provider and the collateral is given back to the borrower.

## NFT Contract Creator

- Build time: 3 days
- Contracts: 3
- Tested: True
- Repo(s): **Private**

A free to use platform that allows anyone to customise, create and own an ERC-721 + ERC-1155 contract for free that allows you to update the total supply + metadata for how ever many times you've set the update variable to.

## NFT Airdropper

- Build time: 3 days
- Contracts: 2
- Tested: False
- Repo(s): **Private**

A factory that enables NFT creators to create an airdrop contract that allows anyone that owns token ids from the `IERC721 public checking` collection to claim `x` free airdropped NFT(s) based on the `multiplier` variable set by the creator, w/ or w/o a time limit to claim.

## Longtail Arb Bot Contract

- Build time: 1 day (v1), 3 days (v2)
- Contracts: 1
- Tested: True (onchain)
- Repo(s): **Private**

A contract to get reserves + data from multiple contracts with a single call and to perform multiple flashswap calls (w/ extra steps) in a single call, allowing for 4+ arbs in a single tx. Real-time dynamic reserve adjustments is implemented too just in case a tx has changed the reserves since we monitored the arb. And so, if the first arb is successful and the next one in the hop fails, the first one will still succeed and we would drop the rest.

---

# Rust

## EVM Bytecode Decoder

- Build time: 10/2022 - Current.
- Repo(s): **Private**, (sorry lol).

An advanced VM tool that _only_ requires bytecode to operate (e.g, calldata + contract bytecode). Currently, it only deciphers calldata into potential types and sorts the params into a structured format and disassembles contracts into opcodes.

## Merkle Tree Generator

- Build time: 7 days.
- Repo(s): **Public**, https://github.com/DeGatchi/merkle-generator.

A practical generator that creates a merkle tree from nodes that support multiple data types in the initial hash instead of a single data type (e.g., address for a whitelist). Utilising efficient keccak256 hashing, mimicking openzeppelin's `MerkleProof.sol`, it can be used for any whitelist/restrictive blockchain action. Simply import your JSON file of values and watch it spit out a JSON output file for easy frontend integration.

## MEV Template

- Build time: 1 week.
- Repo(s): **Public**, https://github.com/DeGatchi/mev-template-rs.

A template to bootstrap MEV strategies with a simple boilerplate to build on top of. Create a new repo using the template then integrate the niche specifics of the strategy to get it running. It includes: mempool scanner + tx decoder, block monitoring, historic block function caller, simple discord alert system, abi binder abd uniswap v2 function calls.

## API Fetcher

- Build time: 2 hours.
- Repo(s): **Public**, https://github.com/DeGatchi/rust-api-fetcher.

A simple system that consumes and stores the data from the `https://rickandmortyapi.com/`.

## Transaction Decoder

- Build time: 30 minutes.
- Repo(s): **Public**, https://github.com/DeGatchi/tx-decoder.

A simple but helpful system that uses transaction hash and a contract's ABI to decode the hash into one of the contract's calls (or Null), displaying the parameter names and inputs.

## NFT IPFS Metadata Cacher

- Build time: 1 week.
- Repo(s): **Private**.

A system that grabs the json metadata from an IPFS url and caches it. It then parses through the json, filtering by topics, one of them being `image`. It then attempts to download the url provided in the content section of the `image` topic and cache it, allowing for easy access for discord attachments, etc.

## Yield Farmer Bot: Auto Compounder V1

- Build time: 2 months.
- Repo(s): **Private**.

Every 24hrs it automatically harvests, exchanges the harvested reward token(s) for the underlying liquidity pool (lp) token used to earn from the farm, and reinvests the exchanged lp token back into the farm, compounding the rewards. Able to compound multiple farms at once.

## NFT Marketplace Tracking Bot

- Build time: 1 day.
- Repo(s): **Private**.

A quick hack to subscribe to all events from an NFT marketplace to track NFT activity. Future implementations would be to track from all marketplaces on a single chain and track

## Longtail Arb Bot

- Build time: 5 months.
- Repo(s): **Private**.

A system that has 2 threads. The first uses a batch-call function from the custom arb contract to retrieve on-chain data and stores it in the global state. The second simulates any pending txs from the mempool to see if we have a profitable arb opportunity. If so, it recursively simulates the new state resulted from the first arb until there is no more profitable paths from the tx (allowing multiple arbs in a single tx). After profitable paths are found, the params are converted into calldata to then send to a tx broadcaster (also rpc calls are implemented, but not-competitive).

## NFT Piranha Bot

- Build time: 4 hours.
- Repo(s): **Private**.

A 4hr hack for the BitGoblins mint on Fantom, designed to create 100+ new public-private key pairs, register them in a CSV file and swarm free NFT mints that have a limit to how many NFTs a wallet can mint, then send it to a main wallet. Essentially spamming the mint function with newly created wallets.

## Discord NFT Auction Bot (Discontinued)

- Build time: 3+ months
- Repo(s): **Private**

A bot that automates a discord auction houses' auctions. Users verify their wallet via signing a message on-chain w/ their discord account ID and inputting the signature to discord's `@auctioneer auth <signature>` command, which then links the discord account to the public key that signed the message. Once linked, the discord account is able to bid w/o gas instantly. To start an the process, anyone with the discord auctioneer operator role is able create auctions w/ specific lot ids, then the bot orchestrates the auctions - tracking highest bids, resetting a timer when a new bid is placed, ending the lot being auctioned when the timer is up while simultaneously sending the lot winner the funds. After the auction cycles onto the next lot, repeating the process.

## Yield Farmer Bot: Auto Risk Manager (Discontinued)

A system that manages capital by moving it into different yield farming pools (liquidity pool and staking deposits) based on the risk factor the user provides + the current value of the assets. It gets the stats of a farm's underlying tokens (reward and deposit) and exists the position based on the risk parameters set. E.g., if the current asset value drops to break even w/ the initial asset value then exit.
