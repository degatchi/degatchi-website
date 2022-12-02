# The Areas Of Web3 Development

#### Sep 13, 2022 | By DeGatchi

There are so many sectors when it comes to blockchain it's somewhat hard to choose where you want to start. I like to think of it as an MMO, where there are different _classes_ or _roles_ that dictate how you play the game, to some degree. However, if you're like me you create multiple characters with different roles because you like to switch things up. You can apply the same concept to web3. Nonetheless, everything interconnects despite specialising in the different fields.

Lets dive into them!

## Smart Contracts

The backbone of web3. This is where all the apps we love and get rugged by are created. Initially, to get into a specialisation of web3 engineering, you need to learn how to at the very least, read smart contracts. Writing them is for the backend developers of web3. There are 2 main sectors, atm. The most matured, Decentralised Finance (DeFi) and the slowly blossoming NFT scene.

To become a smart contract expert you'll need to learn how the basics work, in depth. These include the following:

### DeFi

- AMMs (**_[UniswapV2 + UniswapV3](https://uniswap.org/)_**, **_[PancakeSwap](https://pancakeswap.finance/)_**)
- Staking (**_[Synthetix](https://staking.synthetix.io/)_**)
- Simple Farming (SushiSwap's MasterChefV2)
- Advanced Farming (**_[Yearn](https://yearn.finance/vaults)_**)
- Bridging (**_[Multichain](https://multichain.org/)_**)
- Bonding (**_[OlympusDAO](https://www.olympusdao.finance/)_**)
- Borrowing (**_[Aave](https://aave.com/)_** + **_[Compound](https://compound.finance/)_**)
- Launchpads

### NFTs

- Marketplaces (**_[Opensea](https://opensea.io/)_**, **_[Seaport](https://opensea.io/blog/announcements/introducing-seaport-protocol/)_**, **_[LooksRare](https://looksrare.org/)_**)
- Minting (**_[HashMasks](https://www.thehashmasks.com/)_**)
- Airdrops
- AMM (**_[SudoSwap](https://sudoswap.xyz/)_**)

Keep in mind, these aren't _all_ of the protocol systems designed, but more so the ones you will continuously hear and come back to time and time again. There are niche protocols that do their own thing but these fundamentals are what will get you a job. The knowledge is very valuable. Once you understand how these fields work at a high-level and technically, you will be able to expand into 2 sub-divisions. Smart contract development or security.

### Development

This is where the _innovation_ happens. When you understand what's been done before you are able to think of new ways, by gaining inspiration and reference to what's already possible. If you come up with a new idea you can make some serious money. However, joining a team of world-class developers is also a lucrative career choice. Don't be afraid of join start-ups as they give you the opportunity to take on leadership roles, directing the future of the protocol. Freelancing becomes very easy to do as well considering everyone wants some sort of fork of the basic DeFi protocols, specifically, MasterChefV2 farms, UniswapV2 or a variation of staking. All in all, you'll be set if you learn the DeFi fundamentals.

The NFT side of things brings more out-of-the-box thinking as there aren't any staples to fork, yet. This is a massive opportunity for developers looking to become pioneers and potentially creating some tidal-waves in the crypto scene. Just look at Owen from SudoSwap - attempting to create an efficient market for NFT liquidity pools.

### Security

When there are developers and protocols, there are security flaws. This is the field where you can make some serious money. You'll be booked out 24/7 for weeks in advance. If you join an auditing team you'll be working with giga-brains. This side of smart contracts requires you to have concrete understanding of the language (e.g., Solidity) and how fundamental protocols function at a technical level. You will need to know the most common exploits, how to fix them and the best practices when it comes to developing these systems. Then there is tooling like **_[Slither](https://www.immunebytes.com/blog/slither-a-solidity-static-analyzer-for-smart-contracts/)_** or **_[Echidna](https://github.com/SayaliPatiil/echidna_solidity)_** for smart contract fuzzing. You will also need to write mainnet tests to check if the exploits work without actually executing them.

## Frontend

This is the area responsible for capturing user attention and directing them to the smart contract interaction part of the website. It's the frontend developer's job to convey the complex topics in such a way that allows even your 90 year old grandma to understand. The website's got to be simple but informative. I'm not a frontend dev, so I can't comment too much of the specificities of this area. It's basically traditional web2 integrating the jargon and game-like feeling of web3. When understanding DeFi and checking out all their websites you get an idea of how they structure their components, etc. Most websites are done w/ React.js/Next.js + Ethers.js.

## Botting

This is a somewhat rogue specialisation of smart contract development. You need to understand how a protocol works at a technical level and design a system that automates what you need. For example, auto-compounding farm bot, where the bot harvests and reinvests the rewards back into the farm. Or even an NFT marketplace sales tracker that pushes the event into a discord channel or on twitter (or even both!). This role is more tuned towards freelancers, especially when it comes to NFT projects.

There is an even more advanced version of the basic botting specialisation called MEV. This is the automated trading area of web3. You need to have a strong understanding of how protocols work in order to find ways to make money where others wouldn't know exist, e.g, automated arbitrage of multiple exchanges, potentially cross-chain.

_See how the fundamentals kick in?_

AMM (exchange) + cross-chain protocol combined. There are tons of opportunities out there, but this is where the specialisation kicks in of smart contract development - teams want solidity devs to create highly optimised contracts to spend the least amount of gas and dynamic contracts that can execute the strategies found by the quants.

## Infrastructure

Infrastructure, in my opinion, the most valuable thing to build as all areas benefit from it. From frontends being able to display statistics from databases to smart contracts using oracles (e.g, **_[ChainLink](https://chain.link/)_**) to get off-chain API data on-chain. Infrastructure is what assists smart contract developers build reliable systems and is definitely the most underrated area of web3 development.

For example, **_[DeFiLlama](https://defillama.com/)_** is a dashboard for all protocols, displaying the stats for each one. This is a terrific tool for the average user, alongside **_[CoinGecko](https://www.coingecko.com/en/)_** or **_[EtherScan](https://etherscan.io)_**. Without these we wouldn't know what's on the blockchain without going through each block's transactions individually through a node, such as GETH.

## Final

There are so many areas to learn and so many ideas to be built. If I were to do my whole web3 career again, I would learn Solidity smart contracts in-depth, join an existing protocol, build my own full-stack protocol (website + smart contracts), and then expand into botting w/ infrastructure set.

Hopefully this article gives some insight into the development areas of web3 for you new folk attempting to jump into the wild-west of blockchain.

Thanks for your time and I hope you found value in this!
