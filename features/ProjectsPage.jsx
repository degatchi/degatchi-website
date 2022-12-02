import {
  Page,
  H2,
  ContentOuter,
  ContentInner,
  CenterWrap,
  Wrap,
} from "../components/styles";
import ProjectsRow from "../components/ProjectsRow";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProjectsPage = () => {
  return (
    <CenterWrap>
      <Page>
        <Wrap>
          <Navbar />

          <ContentOuter>
            <ContentInner>
              <H2>Full-Stack</H2>
              <ProjectsRow
                title="SoulSwap - CoFounder"
                description="UniswapV2 dex w/ bond farms that use the traditional farm reward system but substitute the depositing system with OHM's bonding system, "
              />
              <ProjectsRow
                title="TheaterDAO | WIP"
                description="A decentralised NFT platform that aims to make NFT collection initial distribution easy to access, for both investors + creators."
              />
              <H2>Solidity</H2>
              <ProjectsRow
                title="Algorithmic Auctions"
                description="Fully decentralised auction house that cycles through each lot, distributing winning bids + funds to each designated party involved."
              />
              <ProjectsRow
                title="NFT Launchpad"
                description="Choose from a variety of sale models to distribute your NFT collection. E.g., Fixed, Thresholds, Bonding Curve + Dutch Auctions."
              />
              <ProjectsRow
                title="Atomic Trade"
                description="AtomicTrade is a multi-token compatible escrow contract that allows listings of trades to the market (public trades) or to a specific address (private trades), where the trade is configurable via an offer and can be either accepted or counter-offered by the creator of the trade."
              />
              <ProjectsRow
                title="NFT Marketplace"
                description="Sell and buy NFT bundles, sell or buy instantly on the floor prices, ask + provide NFTs - allowing NFT arbitrage."
              />
              <ProjectsRow
                title="NFT Collateralised Loans"
                description="Let anons borrow your NFT by asking for collateral + an interest rate. If unpaid, you seize their collateral as a payment for stolen NFT."
              />
              <ProjectsRow
                title="NFT Contract Creator"
                description="Create an ERC-721 + ERC-1155 contract for free that allows you to update the total supply + metadata for how ever many times you've set the update var to."
              />

              <H2>Rust</H2>
              <ProjectsRow
                title="NFT Piranha Bot"
                description="A 4hr hack for the BitGoblins mint on Fantom, designed to create 100+ new public-private key pairs, register them in a CSV file and swarm free NFT mints that have a limit to how many NFTs a wallet can mint, then send it to a main wallet."
              />
              <ProjectsRow
                title="Longtail Arb Bot | WIP"
                description="A monitoring system that generates every single path combination, given the pair parameters, then creating simulations for each incoming tx to check if we've found any profitable paths to execute on."
              />
              <ProjectsRow
                title="Discord Auction Bot | WIP"
                description="The discord auctioneer operator role is able create auctions w/ specific lot ids, then the bot orchestrates the auctions - tracking highest bids, sending the lot winner the funds, then moving onto the next lot, repeating the process."
              />

              {/* <ProjectsRow
                title="Liquidation Bot | WIP"
                description="S"
              /> */}
            </ContentInner>
          </ContentOuter>

          <Footer />
        </Wrap>
      </Page>
    </CenterWrap>
  );
};

export default ProjectsPage;
