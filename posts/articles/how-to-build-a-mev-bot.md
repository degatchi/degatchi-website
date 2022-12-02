# How To Build a MEV Bot

#### Sep 9, 2022 | By DeGatchi

**_This article assumes you know the basics of what MEV are_**

So, you've been doing too much PvE and want to get into the on-chain PvP scene. Be wary traveler, this is a lonely environment to be in if you're playing solo. You will spend months building to upkeep your infrastructure to stay competitive, unless you find a very niche strategy. However, the booty is high and mighty if you manage to pull it off! If that sounds like something you want to do, continue on.

## Finding A Strategy

Now that you have decided to verse other anons on-chain, you're going to need a strategy to extract money.

_How do we do that?_

You have 2 options: copy someone else's or find your own.

### Copying Someone Else's

In order to copy someone else's strategy you need to find out what they're doing. You can do this by viewing blocks on a block explorer, looking through each transaction and seeing what events are being emitted, which contracts are involved and then deciphering what the strategy is based off that. Alternatively, you could go with one of the traditional big 3 strategies: liquidations, arbitrage or sandwiching.

Watching the block explorer and taking one from there is the easiest out of them all since the searcher might be the only one that is executing that specific strategy. Whereas with the others, you'll have to play catch up with the other searchers + their teams that have existing optimised infrastructure prepared.

### Discovering Your Own

If you're a solo searcher and aren't willing to compete against others in the game of optimisation you need to start thinking how you can manipulate function order flow in ways others haven't thought of, yet. This is how people can make big money for a good chunk of time until someone eventually finds the strategy, via the copying method or by doing the same thing you've done.

Different chains have different protocols. Some native to that chain and others that are deployed on multiple. In my experience, for discovering your own, it's best to go for the protocols that are only on a single chain and that have custom code. The custom code is what makes it unique and people need to spend time to understand it. This is where you should strike first because the chances of finding a new strategy on an existing forked codebase is difficult, but not out of scope!

To discover a strategy you need to know how protocols work at the contractual level. Understand how functions interact w/ one another and how/what causes the state to change. Then you need to think of ways to _"exploit"_ the changed state, how can you order the function calls so that you can make money.

For example, if there's 2 ways of getting a token, maybe the first way changes the price but the second way's conversion rate is unaffected and you can sell the second and buy the first.

This is the area where you get highly rewarded to think out of the box.

_How?_

If you've thought of a strategy nobody knows of then that means there are no bots competing with your system! Therefore, having a simple system will be sufficient. Then you can iterate over it, becoming miles ahead of the person that finds your strategy later on.

## Developing Your Bot

Perfect. You found your strategy and are ready to start implementing it. Before you start building, you need to keep in mind that it is better to create a simple system and iterate over that, otherwise you'll never get it done.

For every second you don't have the bot built up and running for your strategy someone else might:

- Stumble across it.
- Be already building their own bot for it.
- Be already making money from it.

I recommend building your bot in Rust, a systems language that focuses on performance and security. However, build it in whatever language you please. Keep in mind, you want to be faster than your competitors in every possible way. A bot in Typescript will not beat the same bot in Rust.

MEV bots (not including infrastructure) are 80% the monitoring system and 20% the contract, depending on the strategy. Without the monitoring system the contract will never be used!

So, you're going to need to build out a basic monitoring system and your contract(s) to both fetch and execute data on-chain. I'm going to list some core concepts to help you wrap ahead around the structure of a MEV bot:

### Custom Contract(s)

This is how you will interact with the blockchain and the contracts we need. If you need to fetch the state of multiple contracts (e.g., dexes) it's best to have a batch call function utilising `array`s to minimise the amount of on-chain calls, as they're _slow_! This will also be the place where you will write your custom strategy logic to execute when your bot finds an opportunity.

### Stored State

An in-house global state that tracks the state of the blockchain. This is how we are able to create an optimised system. Doing all the computations on-chain is far too slow. Make sure you can access your state in multiple threads, e.g., with an _`Arc`_ in Rust, so you can perform different actions on it.

### Transaction Simulation

When you update your state, you want to see if your strategy detects an opportunity. You can do this by creating a simulated environment, mocking the cause (tx) and effect (state after the tx) of the tx. If you're profitable, propagate the tx and send that bad boy into the mempool! If not, drop the simulated changes and wait for the next opportunity.

### Transaction Propagation System

This can be a basic RPC provider, however don't expect to backrun (BR) or frontrun (FR) anyone. In order to do BR/FRs you need to have a infrastructure that can submit transactions to your blockchain's block confirmation system quickly, especially on the quick block confirmation time chains.

### Multi-Threading

Multi-Threading is how we are able to perform multiple tasks with concurrency (different threads executing out-of-order).

Usually we will have a minimum of 2 thread running, however more can be added for whatever you require.

For example, the first thread will be used to:

- To call view functions. This is the simplest way of grabbing state from the blockchain.
- Or to subscribe to event streams to update our state live.

Keep in mind you use event streams it would also be wise to have the view functions called each block to get the true state after the mempool txs have gone through.

The second to simulate and execute transactions. This is how we test if our transaction will be profitable and how we will attempt to capture that profit.

### Event Streams

Using a webhook, you are able to subscribe to a smart contact's incoming events and then use the event data to update your global state, live. E.g., when someone is liquidated you can update their position instead of attempting to fetch each position with a call to the contract.

### Mempool Stream

This is how you will be able to monitor the pending transactions for the upcoming block, enabling you to simulate and execute FR/BR transactions. You can also use node services if you don't want to/don't know how to run your own node (e.g., GETH), but the node will always be more cost effective and you can customise the logic to your liking.

### Hosting

You're going to need a place to a place to host your bot. You _can_ run it locally, but if you want it to be as optimised as possible it's best to host it on a machine dedicated for the bot so you have no hiccups and it can perform at it's best. I've only used AWS, but if you find something that works for you, perfect! Try to get the bot hosted next to your node for maximum efficiency.

## Next Steps

Once your bot is up and running, all there is to do is **_optimise_**! This is what will improve your chances of monitoring the blockchain and landing successful transactions. You can do this by adding better circuit breakers, token blacklists, algorithms, code layout, implementing best practices (e.g., w/ Rust, using references instead of cloning), data structures, gas strategies, all the things mentioned above and more.

## Final Word

There's a lot of work to be done when it comes to building a MEV bot. Even if you don't end up making money, the skills that you learn and hone in on are incredibly valuable and shouldn't be under-looked. I know it's very difficult, especially if you haven't done it before, but we all start somewhere. Keep at it fren!

This is my first article on programming, not so much the coding side, but still I think this will be of use to people trying to break into the MEV game. I learned about these concepts after a year of on-and-off researching and I want to help those that are struggling/have given up, similar to how I once was.

Thanks for your time and I hope you found value in this!
