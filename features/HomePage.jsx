import {
  Page,
  H1,
  H2,
  H3,
  MenuOuter,
  Nav,
  Span,
  ContentOuter,
  ContentInner,
  Article,
  P,
  CenterWrap,
  Wrap,
} from "../components/styles";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <CenterWrap>
      <Page>
        <Wrap>
          <Navbar />

          <ContentOuter>
            <ContentInner>
              <Article>
                <P>
                  Hi, I'm DeGatchi. Some 20 y/o self-taught anon dev, from
                  Australia.
                </P>

                <H3>Interests</H3>
                <P>
                  Dark-web, decentralisation, automation, optimisation, Web3,
                  Rust, bots, + MEV.
                </P>

                <H3>Why anon?</H3>
                <P>
                  B/c I believe someone shouldn't be judged based on their
                  appearance, but instead on their personality + the things they
                  do. In this case, I want my reputation to be based off my work
                  and how I treat others. I think open-sourcing my age can give
                  others inspiration that they can do what I do too.
                </P>
                <H3>Brief</H3>
                <P>
                  I spend almost everyday building projects i'm interested in. I
                  have no degree, only a high-school education. I tend to work
                  on multiple things at once b/c I get inspired while building
                  and don't want to lose the idea(s). I have an obsessive
                  personality so when I really get into something, theres no
                  going back until:
                  <ol>
                    <li>I finish the task ||</li>
                    <li>
                      I get to a point where I can't upgrade it anymore/the
                      time-opportunity cost isn't worth it anymore ||
                    </li>
                    <li>
                      I get burnt out, take some time off, then keep going
                    </li>
                  </ol>
                  But all-in-all it really helps me with my mental health and
                  that's another factor to why I do it everyday. The people I
                  associate myself are people who have similar interests to me
                  and are doing things that I also like to do.
                </P>

                <P>
                  You are the average of who you surround yourself with, aye?
                </P>

                <H3>Deeper</H3>
                <P>
                  I'm a serial learner to the point where I would rather read a
                  book on Rustlang than watch Netflix before bed and stay inside
                  to code instead of going out b/c I feel like I'll fall behind
                  if I take a day off (I guess this falls into my anxiety
                  disorder, also I have anxiety disorder (lol)).
                </P>

                <P>
                  I think my biggest strength is being able to learn and adapt
                  quickly. Especially when surrounded by people better than me.
                  A common trend I've realised is whenever I'm in an environment
                  with people better than me at something, I make a personal
                  goal/competition with myself to become, at minimum, competent
                  to challenge || help them.
                </P>

                <P>
                  This competitive nature stems from my childhood. I used to be
                  a gaming addict. Playing every single day after school,
                  disregarding everything that wasn't related to the game. I was
                  able to climb in LoL from b5 to g5 in a few months, with only
                  Jhin (I guess this is a good example of specialised fast
                  learning). However, it took a close relative to develop a
                  terminal illness (this is where the anxiety disorder came
                  from) to make me realise I was wasting my life away, not
                  gaining anything from my efforts. And so since 2019, I've
                  converted that negative addiction into a positive addiction
                  (is that even healthy still? I guess better than before) in
                  the form of learning.
                </P>

                <H3>Journey</H3>
                <P>
                  2019: I read books on the way to and back from my 2 jobs (bar
                  + retail) at the time. Eventually, covid struck and I ended up
                  just trading full-time in crypto, basically becoming a
                  researcher + swing trader. I made a lot of money, but
                  inevitably lost all of it b/c I either didn't realise the
                  gains (e.g., In a month turned $10k into $200k then took
                  profit when it went down to $50k), got scammed (1.5 BTC, don't
                  even ask) or just lost the json password ($400k USD lost,
                  again, don't even ask, lmfao).
                </P>

                <P>
                  2020 - 2022: Started to learn programming from scratch, just
                  went straight into Solidity. Reached out to people on twitter
                  looking for work for free and met @0xBuns who mentored me. We
                  built a project then re-branded to @SoulSwapFinance. I started
                  building @TheaterDAO then got burnt out b/c frontend is just
                  not it (for me). And now I'm (finally) getting into MEV + bots
                  :D
                </P>

                <H3>Extra Lore</H3>
                <P>
                  My interest in programming started when I was in highschool,
                  playing Hurtworld with some friends, when I heard about
                  scripting in python. The thought of programming was incredibly
                  daunting and I didn't think I would like it. Turns out we
                  should really just try and do what we are afraid of.
                </P>
                <P>
                  I used to play a lot of Garry's Mod (GMOD) dark roleplay (dark
                  rp) servers. This is where I first learned about crypto, well
                  kinda. In dark rp you basically role play in cities, buy guns,
                  build bases, raid people, set up automated money prints +
                  bitcoin miners. I didn't know what the BTC miners were, but
                  they made a lot of (in-game) money over time. Oh, how I wish I
                  looked further into it (this was around 2012+).
                </P>
              </Article>
            </ContentInner>
          </ContentOuter>

          <Footer />
        </Wrap>
      </Page>
    </CenterWrap>
  );
};

export default HomePage;
