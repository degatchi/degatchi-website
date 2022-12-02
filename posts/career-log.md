# Foreword

**_Note: Dates are in DD/MM/YEAR format._**

The aim behind this is to keep a general account of my career in hopes to inspire people who stumble across this. It's a bit of a mess, but hopefully you can find some use out of it! I also would like to look back at this later down my career and be proud of myself for all the hard work I put in.

I'm a practical hands-on-programmer. I learn things when I need it to write code/make it better. I tend to build simple systems first, while keeping in mind where I should add dynamic data structures, and iterate over that rather than dwelling on future proofing everything.

I spend almost everyday building projects I'm interested in. I love to build programs from scratch because it's a blank canvas, allowing you to express your creativity by bringing architecture from your mind to life. I find it therapeutically fun. I tend to work on multiple things at once because I get inspired while building and want to capture the idea(s) as they arise.

## TDLR

**2019**: I read books from and to my 2 jobs at the time (bar + retail). Eventually, covid struck and I ended up just trading full-time in crypto, basically becoming an independent researcher + swing trader. I made a lot of money, but inevitably lost all of it because I either didn't realise the gains, got scammed or rugged. I wanted to become better at investing so I started to learn how to read what I was investing in at a technical level (Solidity). I eventually found myself learning everyday and stopped trading as much. And so, my journey had begun.

**2020 - 2022**: Started to learn programming from scratch, just went straight into Solidity w/ no prior knowledge, only the high-level knowledge I attained from trading. I began reaching out to people on twitter looking for work for free and met **[@0xBuns](https://twitter.com/0xBuns)** who mentored me. We built a project then re-branded to @SoulSwapFinance. I started building @TheaterDAO then got burnt out because frontend is just not it (for me). And now I'm obsessed with Rust backend (specifically bots atm).

## 2021

**24/12/2021**

- Finished NFT Launchpad contracts + Loan Market contracts.
- Started reviewing old Erc20 Launchpad contracts.
- Applied for Sigma Prime Internship (pending).
- Purchased Rust course for Javascipt devs (**[here](https://rustforjs.dev/)**). Kind of want to build all my contracts in Rust and be a first mover on Sol, KSM + Dot.

**25/12/2021**

- Researching erc20 launchpad protocols (Lukso: rICO, Sushi: MISO) to start building v2 contracts, similar to the NFT launchpad w/ multiple model selectors (much excite!).
- Began building tutorial game (**[here](https://www.youtube.com/watch?v=b8YUfee_pzc)**). Very refreshing to learn something new.
- Started building DutchAuction contract (erc20 launchpad, nft launchpad models, nft marketplace)

**29/12/2021**

- Reworked NFT Launchpad after reading MISO's factory + model deployment strategy (uses clones). So, made a factory that uses EIP-1167 cloning system and is catered to adding new models later on.
- Learned some assembly when deploying clones w/ the EIP-1167 clone factory **[contract](https://blog.openzeppelin.com/deep-dive-into-the-minimal-proxy-contract/)**).
- Thinking of applying for OpenZeppelin Security Analyst. Probs will get denied but why not apply (.\_\_.).

**30/12/2021**

- Applied at: OpenZeppelin, **[Halborn Security](https://twitter.com/HalbornSecurity)**, **[Solidity Finance](https://solidity.finance/)**, Trail of Bits: Summer Internship 2022, Certik, **[Hexens](https://hexens.io/)** + Immunefi. Lets see how this goes :O
- Talking at first AMA in the Diversifi discord at 9am.
- Rereading NFT Launchpad contracts for logic bugs

**31/12/2021 - 01/01/2022**

- Started line-by-line review of NFT Launchpad for B:BC + discovered an on-chain verification method thanks to being inspired by **[Nil DAO's](https://twitter.com/Nil**dao)\_\_ frontend.
- Started learning Rust! (**[here](https://www.youtube.com/watch?v=n3bPhdiJm9I&list=PLai5B987bZ9CoVR-QEIN9foz4QCJ0H2Y8&index=5)**).

---

## 2022

### Goals

- [x] Build a MEV bot (or multiple).
- [ ] Learn EVM infrastructure (GETH).
- [ ] Be proficient w/ Rust.
- [ ] Get a full-time/contractor job in MEV.

**02/01/2022**

- Line-by-line review of 3 price models in NFT Launchpad (B:T, B:CC + B:RC).

**03/01/2022**

- Line-by-line review of 2 price models in NFT Launchpad (A:T + A:BC).
- Reading articles on web3 security from Immunifi (Bug bounty article + why it's beneficial!).

**03/01/2022 - 04/02/2022**

- Sigma Prime internship denied (Applicants had really strong knowledge :o).
- Reading articles on MEV and being more active in the Flashbots discord. Going to learn rust instead of go b/c I think performance is better and I can do more with rust when I learn the language (e.g., rust-based smart contracts).
- Reading some MEV bots (subway, cake_sniper) + learned more assembly and how opcodes work at the low level - especially w/ minimal proxy cloning.
- Want to watch this **[simple arb walkthrough](https://www.youtube.com/watch?v=wn8r674U1B4&t=1s)** but I've had no time b/c of building TheaterDAO. I really want to release it and help everyone! Maybe I'll watch it when I release v1 buyout: fixed UI + cards.
- Reviewing UniswapV2 + V3 create pool func - very interesting how using `salt` can change the created address.
- Learned foundry's forge! (lfg, solidity testing!).
- Released token factory on TheaterDAO!
- Finished create buyout: fixed UI on TheaterDAO.
- Finished coding the NFT launchpad's first model + wrote tests for 9 dif models.
- Created **[TheaterDAO](https://theaterdao.xyz)** from scratch (as of 05/02/2022 working on the card rendering for each sale.
- Started dev'in an airdropper contract for TheaterDAO.
- Learning how FNAFs uses sound to evoke fear (horror game study) + how they keep players fearful, avoiding conditioning of the game's horror elements (uses chances + prevents reusable strategies - creating a permanent unknown scenario).
- Studying strategies game devs use to retain retention that psychologically hook players to keep coming back and how it makes them feel (e.g, look boxes, close misses, long term + short term progression) - very interesting b/c there were laws created as a result from this since they use techniques from casinos.
- Started writing up NFT AMM, onchain nft creator + selector concepts. The NFT AMM forced me to learn **[UniswapV2's code](https://ethereum.org/en/developers/tutorials/uniswap-v2-annotated-code/)** in depth. This will help w/ creating MEV bots too (super excited).
- Created a community dev chat, very nice to hang out in and surround myself w/ some like-minded-people (connecting more).
- Learning more about IPFS + how ERC721s are actually created (**[here](https://www.youtube.com/watch?v=fzH7Gjadmj0)**).

**05/02/2022**

- Determined to learn Rust but have no clue where to start.
- Studied 1inch + other mev bots for a bit.
- Wrote sudocode for Charles (my lil arb bot) - a todo + workflow. Now I know what I need to do and how to start developing him. Game-plan: write in js for v0, get it working the way I want it to, try to optimise it + make it faster or update strategies -> optimise it by turning into Rust +/or add new features over time.

**06/02/2022**

- Started building monitoring system. Learned a lot more about UniswapV2 code - line by line (path[], reserves, kLast).
- Watched **[Flashbots: simple arbitrage repo walkthrough](https://www.youtube.com/watch?v=wn8r674U1B4)**. Learned a lot and recommend to anyone.

**19 - 21/02/2022**

- Completed 7hr Rust Udemy course (Learn by building examples, or something).
- Read learn Rust in 30min article.
- Watched **[Crust of Rust: Lifetime Annotations](https://www.youtube.com/watch?v=rAl-9HwD858)**.

**21/05/2022**

- I have been working on a long-tail mev bot, for a searcher team as a skill demonstration, w/ mempool monitoring, decoding, block refreshing and my first arb algorithm to generate every possible path with a set of predefined paths (e.g, wETH -> USDC -> STAKE -> wSTAKE -> wBTC -> wETH). I literally have no background knowledge for Rust/MEV/Backend but my learning skills are pretty good so thats why I was given a chance (and my Solidity experience, almost 2 yr now). For anyone wanting to get into MEV, my recommendation is build a bot in rust that creates simulations, pre-computes incoming txs and determines optimal profit pathways. The majority of profit for us lil guys will be with long-tail opportunities. MEV is such a selfish space so you need to learn by yourself and filter out the psy-ops (is this psy-ops? :0). Getting into MEV is so hard but it's so worth it. Just persist and build every day and try to break down everything in a very simple way.
- Launched @TheaterDAO + made a basic website (do need to update to make way more user friendly) - currently requires technical knowledge to use and doesn't display all projects on a single page.
- Almost finish algorithmic auction house; finished semi-algorithmic auction house that just requires the auctioneer to start it.
- Optimised atomic swap contract (now atomic trade).
- Listened to **[Permissionless FB founder](https://m.youtube.com/watch?v=s4VFb9l9RmY&t=13441s&pp=2AGBaZACAQ%3D%3D)** + **[ETH Amsterdam](https://www.youtube.com/watch?v=HYPGD2bOMOo&t=22079s)**.
- Hopefully I'll finish my mev bot in the next couple of days (a simple version at least) and see where I go from there. There is only 1 competitor atm and basically for every day im not competing is another day that person is making that $$$ (approve 4-5 txs every 20s - around $8-$30 - _cough_ wtaf). Just for a simple arb + extra steps. Imagine a liquidation longtail or something. Anyway, not much has happened apart from my protocol development pause + beginning of MEV dev. Why? I prefer PvP over PvE ;) I'll finish off some of my old contracts after I get my bot up and running bc im learning so much. I stopped protocol dev bc I reached a point where I wasn't learning much at all. With mev im learning Rust, backend, bot creation, blockchain infrastructure (which is soooo interesting btw), Golang soon, and probs assembly and how shit works at a low level. Super valuable stuff to learn for all sectors of crypto.
- Ty to [swampstream](https://github.com/swampstream) for keeping me accountable for this :P (hope this helps, fren).
- OH and portugal is adding 28(?)% tax soon (FML lol).
- P.s. the Rust book is so good! Love learning about everything, now learning about Channels + Threads to run 2 things in parallel for the mev bot (monitoring systems). Cake_sniper was right...building something is the best way to learn a language. Thats why I was struggling before. Its bc I didnt have a direct goal of what to build / where to start, etc. Now I have direction.

**28/05/2022**

- Started optimising bot in order to get a stronger understanding of problems w/ MEV + Rust - need to do this to get a chance at getting a full-time searcher job.
- Created a rust-experiments repo for testing out and understanding operations (understanding `&strs`, `loops`, `hashmaps` and `vectors` atm). Still need to learn about `traits` and `implementations`. Maybe later on. Not sure how important they are, yet.
- Watching **[Crust of Rust: Channels](https://www.youtube.com/watch?v=b4mS5UPHh20)**. Edit: got 20mins in and think I need to watch something else for real use-case examples. His explanations are really good though!
- Watched **[Something Is Weird About Rust's Threading and Concurrency | Rust Multi-Threading Tutorial](https://www.youtube.com/watch?v=fHz_Li7HqcI)**
- Watched **[Introduction to Rust - Part 14: Threading](https://www.youtube.com/watch?v=eZkbc_UUOs8)**: very good to understand threading!

**16/06/2022**

- Found **[MEV Memoirs: Into the Arena - Chapter 1, Part 2 🤖 ](https://noxx.substack.com/p/mev-memoirs-into-the-arena-chapter-3e9?r=1bwfia&s=w)** but didnt read, yet .-.
- Getting pretty confident with Rust ended up creating an NFT minter bot that creates 100 accounts, mints NFT and records the tx, in 5hrs (? - idk I went to bed at 9am lol). Ended up not even using it bc the BitGoblins mint was delayed by 2hrs. I woke and it was minted out in 40mins.
- Deployed bot to AWS server + using custom node set up by searcher team (no sleep duration :0).
- Fixed the concurrency with the arb bot + updated monitor 328 paths from 72 :D. Only updating with block refresh instead of updating with incoming txs sooo only scanning 1 pair swaps atm.
- Started to learn Serenity for discord bot, wanting to upgrade TombHeads :) Rust is fun and I want to build everything I can with it.
- Learned Uniswap V2's `getAmountOut()` actually works - basically `reserveIn` is the `amountIn`'s reserve supply whereas `reserveOut` is the supply of `amountOut`.

**16/07/2022**

- Discovered my first monitored arb on the 28/06/2022 for 0.03.
- 07/07/2022, monitored $2.5k arb while building my tx crafting (lmao rip).
- 16/07/2022, Submitted 3 successful next block arb txs for the first time, except werent profitable when subtracting gas from profits... After 2.5 months of work on my Rust bot, it's finally able to monitor + submit multi-hop-arb txs (e.g, 4 arbs in 1 tx) using flashswaps and function selector calls (like **[this](https://github.com/1inch/1inch-v2-contracts/blob/master/contracts/OneInchExchange.sol#L166)**).
- Learned Rust pretty well so far. I'm very comfortable with the ownership model now, which has helped tremendously in optimising the bot. I was doing a lot of `clone`ing but now im using `&mut`s which are soooo much more efficient bc you're just mutating the same variable over and over again instead of creating a new instance of it each time.
- Had a chat to Grug Capital, v impressive credentials and achievements (e.g, **[moonbird arb](https://twitter.com/bertcmiller/status/1517278228918018049)**), got given a project to work on, but really don't have time atm + it wont be profitable so not sure if the best use of time. May look into it later(?).
- Now I think I need to learn about GETH and node modification, that will be v interesting. I feel fairly confident with Rust, however I've never used traits or impl (lmfao).
- Shoutout to this cafe mix for being such great white noise: https://www.youtube.com/watch?v=iD4dMdpNe_I.
- I think the competitor for the strategy earned around 88k while I've been building my bot. Insane.

**30/07/2022**

- Learned about signing and verifying messages w/ a signature + message string to get the public key (signer) -> kind of sparked an interest in ZK proofs but not sure when I would want to use it. Saw an example for verifying I have a priv key without showing the key.
- Continuing to work on a discord NFT auction bot for TombHeads since I created a Rust alternative for Web3Auth w/ the signature authentication system, hopefully can start distributing after I get it polished up. Going to need to learn Solana smart contracts for a Solana version of the bot.
- Started to learn about linear algebra (probs going to do **[this](https://www.udemy.com/course/linear-algebra-theory-and-implementation/)** course) + statistics (advice from one of 2 mev anons that reached out when I **[tweeted](https://twitter.com/DeGatchi/status/1553001843219124224)** im starting to do freelancing). Also learned that to be fully successful in crypto you need to know the inner workings of protocols, e.g, their gas process and how the evm works - then optimise via low level programming (Rust + assembly/yul for smart contracts evm) for the millisecond. Definitely want to start learning GETH soon. It makes sense though, everyone I see that I consider at the elite level of crypto tech programming all know the inner workings of the evm in addition to being specialists in their fields (smart contracts || backend stuff). I do think im going in he right direction though, just gotta keep learning everyday.
- Bot update: still stuck on the tx execution. For some reason it fails. Not sure if its to do with the broadcasting bc the manual tx propagation worked before the broadcaster impl. All the tests work in Rust + Solidity :/

**07/08/2022**

- Learned about Rust traits + implementations from **[this](https://www.youtube.com/watch?v=LKYSl7kM5q8)** video. Really good explanations.
- Created an IPFS json parser that filers topics. Focusing on the `image` topic, it downloads the image from the url, in either a JPEG or GIF and stores it in a temporary cache. Just need to add this to my NFT discord auction bot now.
- THe US government sanctioned Tornado Cash and deleted the githubs that contributed. This sparked an interest in cryptography for me and doing some research on **[zkProofs](https://www.youtube.com/watch?v=J3jKROwTPCs)** and zkSnarks.
- Watched **[Rust Demystified 🪄 Simplifying The Toughest Parts](https://www.youtube.com/watch?v=TJTDTyNdJdY)** for fun.

**09/08/2022**

- Got denied from the team I was working with for 3-4 months, however probably will still write bots for them as a freelancing type of thing until I get gud. I actually have even more hunger to learn Rust now. I feel like every time im denied it gives me more strength to learn more. I was getting a bit burnt out by the debugging but I think thats really the hardest thing due to so many moving parts. The bot is still stuck on the execution part, more specifically the calldata construction and propagation.
- Feedback: <br />
  **_Positives_**

  - Able to build simple systems first and iterate on that instead of over-complicating + overthinking w/ complex systems at the start.
  - Natural inclination to look for new opportunities (there are 2 types of people: 1) focus person to perfect + 2) person to look for new opportunities), im a person that naturally looks for new opportunities (I do like constant change) and he said I should focus on maximising that strength.
  - Strong drive + hunger to do things without being told (Somewhat rare personality trait).

  **_To work on_**

  - Mainly experience, so just keep doing what im doing - e.g., build more bots!
  - Understanding new complex concepts quicker (abstracts, etc): understanding mev strategies to the core to the point you can simply explain it in detail. e.g, write down: thread to explain exactly whats happening in a mev strategy (blog).
  - Writing structured code and finding bugs / debugging w/ tests ( the hardest thing ) - I'll be writing more bots + going through bigger projects and how they structure their code so should be better w/ more experience.
  - Learn general programming concepts (object orientated design patterns + undirected graphs).
  - Combine Rust implementations of GETH (not essential, just if I want to get into geth, 2 things w/ 1 stone).

**10/08/2022**

- Watched **[design patterns](https://www.youtube.com/watch?v=tv-_1er1mWI)** video.
- Started restructuring my **[metadata-cacher-rs](https://github.com/DeGatchi/metadata-cacher-rs)** w/ implementations (feels and looks so much cleaner).

**17/08/2022**

- Been working on the discord NFT auction bot. Almost done, just need to add a few more features and implement the metadata json + image embed msgs and then just a basic website for users to deposit their NFTs and a dashboard for the admin to choose which NFTs they want auction off. Tbh, building a discord bot in Rust is disgusting bc I need to keep using RwLocks, using .read() and .write() in scopes. Makes it look icky. Discord.js looks like it would of been soooo much easier. Anyway...good practice. Started using `impl` a lot more and oml is it amazing. The code becomes so much cleaner and readable. This is another reason why I want to do everything in rust now, lmao. Kinda hard to go back to other langs bc writing rust is so fun...apart from this discord bot (only bc of RwLock).
- Need to create a need blog website where I can use mdx to write stuff. Currently writing paragraphs in components...so yeah, need to do that.
- Applied for **[Dora](https://twitter.com/SearchOnDora)** and got an intro thing w/ **[Rook](https://twitter.com/Rook)** today at 10:30pm (its 5:27pm atm).
- Gonna start writing a twitter bot based off that coinfessions post of the twitter botter making 30-40k a month (crazy) to fake interaction in discords and twitter. Soooo, would be nice to learn how to create my own crate to interact with an API instead of relying on other crates, esp when I need it for something new or niche. I think I'll also start looking into Machine Learning to try and have the twitter bot generate unique messages that people would actually send. Otherwise, mass followers and no interaction kinda makes no sense and is pretty obvious. Anyway, we'll see how that goes. Once again, probs should do in JS...buuuuuut I want to get good at Rust bc I do believe Rust devs are going to be in high demand in the future. And junior rust dev jobs are non-existent atm.
- Need to learn about SQL too just so I can set up databases for my backend code to keep track of shit if my bot goes offline.
- Cross-chain mev is becoming a trend I see in mev twitter. I think it's actually not that hard to build one but to have a good one would be interesting. Wondering about cross-chain arb frontrunning + backrunning too. I think you would need to monitor a bridge for interactions then trace the account for swaps, etc.
- Want to get into cryptography too, esp since the Tornado Cash people got shutdown. Seems like it can be very useful for protocols to use.

**23/08/2022**

- Working on this website so that I can continue applying for Rust jobs. I've been using twitter to reach out to people, I think it's a terrific tool to find opportunities. Got markdown files to work on my Next.js **[website](https://www.degatchi.com)**, it makes writing soooo much easier. Articles coming soon!
- Received my first freelancing task (ERC-1155 Migrator).
- Decided not to work on the twitter bot b/c it doesn't seem beneficial atm, instead working on a yield farming bot to practice writing web3 bots. Will be learning to add + remove liquidity programmatically w/ a custom zapper contract.
- Found this darknet stories **[podcast](https://twitter.com/JackRhysider)**, might be an interesting listen.
- Definitely feel like I've been progressing really well with what I needed to work on with the MEV team feedback. Been reading a lot more bots and building a lot more things in Rust. Thank the lord for `impl` and `trait` in Rust!

**28/08/2022**

- Finished the first version of my auto-compounder bot. Currently supports all of SpookySwap's MasterChef farms in a single contract. Most people use a contract for each farm I believe.
- Started applying for jobs on **[AngelList](https://angel.co/jobs)** and **[Cryptocurrency Jobs](https://cryptocurrencyjobs.co/)**.
- Going to start building my first Solana contract. I think this is the way forward if I want to find a job using Rust but in web3. Since I already have smart contract experience and want to have more things to build with Rust Solana contracts may be the way to get that experience (while learning a new skill to get hired). Senior Rust jobs pay a lot atm bc there's such a small supply. Definitely worth learning!

**09/09/2022**

- Finished my first programming article **[How To Build a MEV Bot](http://degatchi.com/articles/how-to-build-a-mev-bot)**!
- Discord Auction Bot:
  - Modularised the code to make it **_so much cleaner_**. Been spending every day working on it and improving the IPFS cacher.
  - Got the IPFS cacher to work w/ discord commands, displaying all images and jsons in a channel.
  - Working on the on-chain stuff now with deploying the contract to testnet and interacting with the bot via bidding.

**22/10/2022**

- Published 2 articles: **[The Areas Of Web3 Development](https://www.degatchi.com/articles/the-areas-of-web3-development)** and **[Entering The Dark Forest](https://www.degatchi.com/articles/entering-the-dark-forest)**.
- Released **[mev-template-rs](https://github.com/DeGatchi/mev-template-rs)** which gained a lot of traction, leading to people dming me on twitter for job opportunities (2 mev related and 5+ protocol related). Also, it inspired the creation of **[subway-rs](https://github.com/abigger87/subway-rs)** :O
- Completed a job trail with STFX from **_21/09/2022_** to **_22/10/2022_**. Built a couple of contracts: Fixed supply ERC20 token, token presale with merkle tree claiming and a vesting contract. Learned about perp markets and integrated with GMX.
- Built a **[merkle tree generator](https://github.com/DeGatchi/merkle-generator)** with Rust (this bad boy took a while to understand the encoding part but we finally got there). Developed a solid understanding of how they work: generating trees, nodes, proofs and how to verify them. Also, learned more about the keccak256 hash function.
- Learned about different ways to handle multi-threaded data with Rust. One type i'm apply to the discord auction bot is the concept of actors - a single thread that receives and processes mutation requests. Multi-threading is a very interesting concept but i've now experienced why it's such a pain.
- Working on a generalised mev bot just to build out a bunch of strategies. I finally learned how to keep track of state changes w/o eth_call each block! This will be very useful for a lot of strategies. Started exploring sandwiching and cross-chain mev: how to build an effective sandwicher on non-flashbot chains (very interesting btw).
- Need to update my website to make it cleaner and easier for people to hire me for freelancing gigs. Having a website is definitely the biggest helper when getting hired, resumes are outdated imo.
- Might do some CTFs (web2 and web3) and publish some write ups. Darknet Diaries' REvil episode makes me want to learn about ransomware + malware development (although i would never use it practically) and it seems web3 hacking just never ends - very useful to have the knowledge of where to look for vulnerabilities.
- Note to myself: With a lot of offers for opportunities coming in, it's a dilemma between payment and desire. Right now, i choose building something im interested in, even it it doesn't pay as well as the one that pays well.

**27/10/2022**

- Scratched the auctioneer bot's data structures to make it dumbfounded simple - sticking to manual commands to begin to finish the damn thing. I had too many moving parts at the start (well, 2 moving parts - but enough to make it too complex).
- Finished off the JSON interaction for my Rust merkle tree generator, preparing for the STFX presale (they're looking to raise 9 mil using a contract I made) - looking forward to it! It spits out an output JSON file to pre-fill frontend parameters for easy integration. That was always the hardest part imo, so i had to make a feature for it!
- Set up my first full-node w/ AWS (shoutout to *Realism* + *0xDmtri* for helping me out).
- Been getting tons of job offers, from contracting work to full-time positions (I think around 12 in a single week - never thought this would happen tbh). The most noticeable ones were *Grug Capital* (super interesting bot work there), *Phantom* (sol wallet), Auto yield farming managers (like the bot i was building in `/projects`) and MEV teams (2 transitioning from traditional HFT to MEV).

**21/11/2022**
- Stopped working on auctioneer bot bc I found it boring and am more interested in learning low-level evm.
- Tried decoding calldata w/ only bytecode around 01/10/2022 - failed to do so w/o abi.
- Learned about black/gray/whitebox fuzzing conceptually.
- Started becoming active in the Huff discord, making new frens, learning how to read bytecode and opcodes - found a passion for low-level programming and reverse engineering.
- Built the foundation for memory + stack decoding for contract bytecode (tryna get like *jon becker*).
- build v1 of pure calldata decoder, however wasn't dynamic enough - example found **[here](https://twitter.com/DeGatchi/status/1593979103451189250)**.
- *jtriley* helped me understand encoding dynaic types (somehow i forgot how it worked lmao), then built a v2 for my calldata decoder on 21/10/2022 that only requires the bytecode input (w/o knowledge of anything else) - example found **[here](https://twitter.com/DeGatchi/status/1594334760683597826)** (quite literally spending 10hrs straight on this to the point where my legs were hurting from sitting too much) - got a lot of interest and a few job offers from this (zk and building an evm on another blockchain).
- On 21/10/2022, started diving into *jon becker*'s **[heimdall](https://github.com/DeGatchi/heimdall-rs)**, also have plans to learn **revm** and **foundry** to understand blockchain emulation for blackbox fuzzing.