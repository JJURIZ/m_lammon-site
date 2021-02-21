import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: "50vw",
    marginBottom: "1rem",
    backgroundColor: "#fff",
    "&:hover": {
      backgroundColor: "#CDE8FD",
      transition: ".2s",
    },
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 1,
  },
  anchor: {
    fontSize: 20,
    color: "#fff",
    backgroundColor: "#319AEB",
    border: "1px solid #319AEB",
    borderRadius: "5px",
    "&:hover": {
      color: "#000",
      backgroundColor: "#79BBED",
      border: "1px solid #79BBED",
    },
  },
  label: {
    textDecoration: "none",
  },
});

function PoemsEssaysMore() {
  const classes = useStyles();

  return (
    <div className="Profile">
      <div className="body-page">
        <h1 className="header-lg">Martin Lammon</h1>
        <h3 className="header-md3">Poems, Essays, and More</h3>

        <article className="article">
          <p className="article-paragraph">
            <span className="first-letter-larger">H</span>ere are links to poems
            and essays, as well as other content, organized for easy review.
            Please use these links not only to learn more about Martin Lammon
            but also to follow links to (or search for) the writers, journals,
            presses, and organizations referenced here. Note: The Internet is
            always in flux, so links current now may not work in the future.
            This site will make every effort to check links regularly, and add
            new links as available.
          </p>

          <h2 className="header-md2">Podcast Interview</h2>

          <p className="article-paragraph">
            <span className="first-letter-larger">L</span>isten to the interview{" "}
            <a
              href="https://isanythingpodcast.wordpress.com/2019/02/23/episode-2-martin-lammon-poetry/"
              target="blank"
            >
              Martin Lammon & Poetry
            </a>{" "}
            featured on Jeremy Uriz’s Atlanta-based podcast Is Anything. In
            addition to stories about the poet’s life and family, topics
            include: How Poetry Changed in the 20th Century; The Poetry Reading;
            Poetry and Vulnerability. The interview concludes with Lammon
            reading two poems included in his new book of poems The Long Road
            Home: “My Wife and I Learn to Accept Our Clutter” and “Blood
            Mountain Villanelle.”
          </p>

          <h2 className="header-md2">Poems and Creative Essays</h2>
          <a
            href="https://muse.jhu.edu/article/522835/pdf"
            target="blank"
            className={classes.label}
          >
            <Card className={classes.root}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Poem
                </Typography>
                <Typography variant="body2" component="p">
                  The Southern Review (49:4, Autumn 2013) on Project Muse.
                </Typography>
              </CardContent>
            </Card>
          </a>

          <a
            href="https://www.connotationpress.com/a-poetry-congeries-with-john-hoppenthaler/2009/december-2009/246-martin-lammon-poetry"
            target="blank"
            className={classes.label}
          >
            <Card className={classes.root}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Poem
                </Typography>
                <Typography variant="body2" component="p">
                  “Sestina Qué Triste,” Connotation Press (Vol. III, Issue VI,
                  July 2017).
                </Typography>
              </CardContent>
            </Card>
          </a>

          <a
            href="https://ttr.tusculum.edu/2012/12/06/poems-by-martin-lammon/"
            target="blank"
            className={classes.label}
          >
            <Card className={classes.root}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Poem
                </Typography>
                <Typography variant="body2" component="p">
                  The Tusculum Review online (December 6, 2012).
                </Typography>
              </CardContent>
            </Card>
          </a>

          <a
                  href="https://ir.uiowa.edu/cgi/viewcontent.cgi?article=5737&context=iowareview"
                  target="blank"
                  className={classes.label}
                >
            <Card className={classes.root}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Essay
                </Typography>
                <Typography variant="body2" component="p">
                  “My Name Is,” in The Iowa Review (33:3, Winter 2003-2004;
                  runner-up for the Iowa Award for Literary Nonfiction). This
                  essay actually combined two essays (“My Name Is” and “Moon
                  Man”), included in a collection of essays in-progress about
                  living in Costa Rica: “Nine Degrees North: Essays from the
                  Land of la Pura Vida.”
                </Typography>
              </CardContent>
            </Card>
          </a>

          <a
                href="https://ir.uiowa.edu/cgi/viewcontent.cgi?article=3461&context=iowareview"
                target="blank"
                className={classes.label}
              >
          <Card className={classes.root}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Essay
              </Typography>
              <Typography variant="body2" component="p">
                “Making Acquaintance: Second Hand Notes on James Wright,” in The
                Iowa Review (17:1, Winter 1987). A hybrid essay on the life and
                work of James Wright, a blend of bibliographic research,
                criticism, and creative nonfiction.
              </Typography>
            </CardContent>
          </Card>
          </a>


          <a
                href="https://www.youtube.com/watch?v=F4eo2MoDXeo"
                target="blank"
                className={classes.label}
              >
          <Card className={classes.root}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Video
              </Typography>
              <Typography variant="body2" component="p">
                Poetry reading, Poetry @ Tech (August 26, 2006)
              </Typography>
            </CardContent>
          </Card>
          </a>

          <h2 className="header-md2 essay">
            Interviews, Essays, Observations, and More
          </h2>

          <p className="article-paragraph">
            <span className="first-letter-larger">I</span>n the article{" "}
            <a
              href="https://www.pw.org/content/contester_one_editor039s_take_clean_competition"
              target="blank"
            >
              One Editor’s Take on Clean Competition
            </a>{" "}
            (Poets & Writers, Sept/Oct 2005) Martin Lammon, founding editor of
            Arts & Letters, argues for fiscal integrity in the way journals and
            presses conduct contests and fund prizes. Most importantly, he
            argues that marketing costs and prizes should not be funded by
            submission fees.
          </p>

          <img
            src="https://martinlammon.files.wordpress.com/2017/07/issue01-139x1981.jpg"
            alt="Arts & Letters Cover"
            className="article-img"
          />

          <p className="article-paragraph">
            <span className="first-letter-larger">A</span>n interview with
            Donald Hall,{" "}
            <a
              href="https://poets.org/text/flying-revisions-flag"
              target="blank"
            >
              Flying Revision’s Flag
            </a>{" "}
            (originally published in the first issue of{" "}
            <a href="https://www.fairmontstate.edu/kestrel/" target="blank">
              Kestrel: A Journal of Literature and Art in the New World
            </a>
            , Spring 1993), available on the Academy of American Poets website.
            Martin Lammon first met Donald Hall in 1980, and the two poets have
            corresponded often ever since. Hall acknowledges Lammon in his
            poetry collection The Happy Man (Random House, 1986), and in 1996,
            Lammon edited an anthology of essays, Written in Water, Written in
            Stone: Twenty Years of Poets on Poetry (University of Michigan
            Press), which celebrates Hall’s two decades as the editor of the
            press’s “Poets on Poetry” series. In the early 2000’s, Lammon’s gift
            and fund-raising efforts helped to establish{" "}
            <a
              href="https://www.awpwriter.org/contests/awp_award_series_overview"
              target="blank"
            >
              The Association of Writers and Writing Programs’ annual Donald
              Hall Prize
            </a>{" "}
            for a book of poems, AWP’s first endowed book prize. Learn more
            about Donald Hall’s life and work at the{" "}
            <a href="https://poets.org/poet/donald-hall" target="blank">
              Academy of American Poets
            </a>
            , or at an excellent April 2017 post on Jack Preston King’s{" "}
            <a
              href="https://beyondtherobot.com/meet-donald-hall-national-poetry-month-featured-poet-for-april-7th-5955b31cc58f"
              target="blank"
            >
              Beyond the Robot
            </a>{" "}
            web site.
          </p>

          <img
            src="https://martinlammon.files.wordpress.com/2017/07/poetsonpoetry1.jpg?w=224&h=334"
            alt="Written in Water, Written in Stone cover"
            className="article-img"
          />

          <p className="article-paragraph">
            <span className="first-letter-larger">D</span>onald Hall passed away
            in late June of 2018. At the AWP Portland (Oregon) conference in the
            spring of 2019, Lammon organized a tribute to Hall that included
            Alicia Ostriker, Tree Swenson, and Barbara Hamby (winner of the
            first Donald Hall prize for her collection Babel, selected by
            Pulitzer Prize winning poet Stephen Dunn). In the September issue of
            the AWP Writer’s Chronicle, Lammon published the essay{" "}
            <a href="https://www.awpwriter.org/user/force_login" target="blank">
              An Eye for the Long Run: A Tribute to Donald Hall
            </a>{" "}
            (AWP members can read the article online).
          </p>

          <img
            src="https://martinlammon.files.wordpress.com/2019/10/awp-don-hall-cover.jpg?w=142&h=182&zoom=2"
            alt="The Writer's Corner"
            className="article-img"
          />

          <p className="article-paragraph">
            <span className="first-letter-larger">C</span>hapter on{" "}
            <a
              href="https://books.google.com/books?id=Pzu4cKye7GAC&pg=PA63&dq=martin+lammon+Creative+Non-fiction&hl=en&sa=X&ved=0ahUKEwiatJKdhYzVAhXMWj4KHZV4BFoQ6AEIKjAA#v=onepage&q=martin%20lammon%20Creative%20Non-fiction&f=false"
              target="blank"
            >
              Creative Non-Fiction
            </a>
            , in Teaching Creative Writing (ed. Graeme Harper, Bloomsbury
            Publishing/Continuum, 2006). Lammon was asked to write this chapter
            for Graeme Harper’s textbook. In addition to information about the
            history of the genre and strategies for writing creative nonfiction,
            the chapter offers an A-Z list of recommended creative nonfiction
            authors’ works. The book also includes chapters on writing poetry,
            short fiction, the novel, plays, film, and more. Lammon’s
            award-winning essays have been published widely in journals such as
            The Chattahoochee Review, The Iowa Review, Zone 3, and more. Note:
            Link is to Google Books, which doesn’t show the complete chapter.
          </p>

          <p className="article-paragraph">
            <span className="first-letter-larger">A</span>n essay by Derick
            Varn,{" "}
            <a
              href="https://symptomaticcommentary.wordpress.com/2016/02/09/to-a-few-of-my-mentors-martin-lammon-and-susan-atefat/"
              target="blank"
            >
              To a Few of My Mentors: Martin Lammon and Susan Atefat
            </a>{" "}
            (February 9, 2016 blog post). Varn was a student at Georgia College,
            earning his B.A. and MFA in the early 2000’s, who also lived and
            taught for three years in South Korea. Susan Atefat (Peckham), whose
            first book of poems{" "}
            <a
              href="https://www.amazon.com/That-Kind-Sleep-National-Poetry/dp/1566891167"
              target="blank"
            >
              That Kind of Sleep
            </a>{" "}
            won the National Poetry Series award, joined the Georgia College MFA
            program faculty in 2002. In the winter of 2004, while on a Fulbright
            in Amman, Jordan, she and her young son Cyrus were killed in a
            tragic car accident. The annual{" "}
            <a
              href="https://artsandletters.gcsu.edu/submit/annual-prize-contest/"
              target="blank"
            >
              Arts & Letters-Susan Atefat Prize
            </a>{" "}
            (for a creative nonfiction essay), endowed by Bahram and Fari
            Atefat, honors their daughter’s and and grandson’s memory. Long time
            Georgia College poet-in-residence, Alice Friman (also mentioned in
            Varn’s essay) writes about tragic loss and enduring memory in her
            moving essay{" "}
            <a href="https://www.alicefrimanpoet.com/the-office" target="blank">
              The Office
            </a>
            , which originally appeared in the Fall 2004 issue of Arts &
            Letters).
          </p>

          <img
            src="https://martinlammon.files.wordpress.com/2017/07/aliceandsusan.jpg"
            alt="Alice and Susan at Georgia College in Milledgeville"
            className="article-img"
          />

          <h2 className="header-md2">Miscellaneous Links</h2>

          <p className="article-paragraph">
            <span className="first-letter-larger">P</span>oet Lore‘s{" "}
            <a
              href="https://www.poetlore.com/store/backissues/volume-105-number-12/"
              target="blank"
            >
              Editor’s Page
            </a>{" "}
            (Vol. 105, Number 1/2) comments upon Lammon’s poem “Bird Offering,”
            published in that issue. E. Ethelbert Miller co-edits Poet Lore, and
            was one of the first writers to encourage Martin Lammon to consider
            running for election to AWP board of directors (Lammon served on the
            board from 1998-2003, and two terms as President from 2000-2002).
            Miller’s contributions to literature, as a writer, editor, teacher,
            and arts advocate, inspired Lammon and many others (read Washington
            Post staff writer Linton Weeks’ retrospective on Miller’s life and
            career, which includes a quotation from Lammon about Miller’s
            influence). Below:{" "}
            <a
              href="https://www.amazon.com/Among-Bones-Peggy-Ann-Tartt/dp/0916418901"
              target="blank"
            >
              Peggy Ann Tartt
            </a>{" "}
            (winner of the 2001 Arts & Letters $1,000 Prize in Poetry) with
            final judge E. Ethelbert Miller.
          </p>

          <img
            src="https://martinlammon.files.wordpress.com/2017/07/peggyandebert.jpg"
            alt="Peggy and Ebert"
            className="article-img"
          />

          <p className="article-paragraph">
            <a
              href="https://www.bloomsburyreview.com/Archives/2004/Troubling%20Poetry%20Trends.pdf"
              target="blank"
            >
              <span className="first-letter-larger">W</span>hat recent trends in
              American poetry do you find troubling or worrisome?
            </a>{" "}
            A Survey by Ray González (2004) in The Bloomsbury Review. Includes
            Lammon’s concern that some poets (so-called “New Formalists”)
            believe poetry must turn away from “free verse” and return to formal
            verse.
          </p>

          <p className="article-paragraph">
            <span className="first-letter-larger">A</span>fter living for 20
            years in Georgia, and as the Fuller E. Callaway/Flannery O’Connor
            Chair in Creative Writing at Georgia College, Lammon has become a
            longtime supporter of UGA Press books. Two books are of special
            interest. Lammon praised{" "}
            <a
              href="https://www.amazon.com/After-OConnor-Stories-Contemporary-Georgia/dp/0820325570"
              target="blank"
            >
              After O’Connor: Stories from Contemporary Georgia
            </a>{" "}
            (Ed. Hugh Ruppersburg, UGA Press, 2003; published in association
            with the Georgia Humanities Council), which includes stories by
            Alice Walker, Anthony Grooms, Ha Jin, Judith Ortiz Cofer, Judson
            Mitcham, Mary Hood, Sheri Joseph, Tina McElroy Ansa, and many other
            writers. And Lammon’s poem “What We Feel in Our Bones” was selected
            by Georgia Poet Laureate Judson Mitcham for{" "}
            <a
              href="https://ugapress.org/book/9780820349343/inspired-georgia/"
              target="blank"
            >
              Inspired Georgia
            </a>{" "}
            (ed. Judson Mitcham, Michael David Murphy, and Karen L. Paty, UGA
            Press 2016; a copublication with Georgia Council for the Arts,
            exploring Georgia’s contemporary poets and photographers). Anyone
            interested in Georgia’s contemporary fiction, poetry, and
            photography should add both of these books to their libraries!
          </p>

          <img
            src="https://martinlammon.files.wordpress.com/2017/07/inspired-ga1.jpg"
            alt="Inspired Georgia"
            className="article-img"
          />
        </article>
      </div>
    </div>
  );
}

export default PoemsEssaysMore;
