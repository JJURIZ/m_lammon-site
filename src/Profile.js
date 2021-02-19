import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles"; // imports option to make custom styles

const useStyles = makeStyles((theme) => ({
  timeline: {
    color: "red",
  },
}));

function Profile() {
  const classes = useStyles(); // allows use of custom styles on page
  return (
    <React.Fragment>
      <div className="Profile">
        <div className="home-page">
          <h1 className="header-lg">Martin Lammon</h1>
          <h3 className="header-md3">Professional Profile</h3>

          <article className="profile-article">
            <p className="article-paragraph">
              <span className="first-letter-larger">M</span>artin Lammon’s first
              book of poems,{" "}
              <a
                href="https://www.amazon.com/NEWS-WHERE-Arkansas-Poetry-Award/dp/155728508X"
                target="blank"
              >
                News From Where I Live
              </a>
              , won the 1997 Arkansas Poetry Award and was published by the
              University NewsPoemsof Arkansas Press (1998). He also edited the
              book{" "}
              <a
                href="https://www.amazon.com/Written-Water-Stone-Twenty-Poetry/dp/047206634X"
                target="blank"
              >
                Written in Water, Written in Stone: Twenty Years of Poets on
                Poetry
              </a>{" "}
              for the University of Michigan Press’s “Poets on Poetry” series,
              an anthology of essays and interviews from the series under the
              general editorship of Donald Hall. He was born, raised, and
              educated in Ohio, but has also lived in Connecticut, Pennsylvania,
              West Virginia, and Costa Rica, before moving to Georgia where’s
              he’s taught at Georgia College since 1997. Lammon’s long-awaited
              new collection of poems,{" "}
              <a
                href="https://www.finishinglinepress.com/product/the-long-road-home-by-martin-lammon/"
                target="blank"
              >
                The Long Road Home
              </a>
              , was published March 2020 by{" "}
              <a href="https://www.finishinglinepress.com/" target="blank">
                Finishing Line Press
              </a>
              .
            </p>

            <p className="article-paragraph">
              <span className="first-letter-larger">L</span>ammon has taught at
              several colleges and universities, most recently Juniata College
              (Pennsylvania), Fairmont State (West Virginia), and Georgia
              College. In addition to teaching, he has been a successful
              advocate for the arts: He has created university and community
              writing programs and reading series; founded
              two national literary journals (Kestrel, Arts & Letters); and
              served on local, state, and national arts boards. He has conducted
              dozens of poetry writing programs for young writers (K-12) at
              schools and summer programs, as well as special workshops for
              college students and community writers in Pennsylvania, West
              Virginia, and Georgia. He has also been an active contributor and
              fundraiser for literary and cultural programs, professional
              opportunities for writers, and student scholarships. A few
              highlights of accomplishments, recognition, and service:
            </p>

            {/* <ul> */}
            {/* <li>1993 - Founded Literary journal Kestrel (Fairmont State, West Virginia)</li> */}
            {/* <li>1994 - Awarded West Virginia Commission on the Arts State Fellowship</li> */}
            {/* <li>1994 - Taught for the Modern Poetry Association/NEH “Poets in Person” project</li> */}
            {/* <li>1997-2018 - Served as endowed Fuller E. Callaway/Flannery O’Connor Chair</li> */}
            {/* <li>1997 - Selected by W.S. Merwin for a Nimrod/Hardman Pablo Neruda Prize</li> */}
            {/* <li>1998-2003 - Elected to Board, Association of Writers and Writing Programs</li> */}
            {/* <li>2000-2001, 2001-2002 - Elected as AWP Board President (two terms)</li> */}
            {/* <li>2000-2009 - Served on the Georgia Council for Arts (GCA) Literary Committee</li> */}
            {/* <li>2003 - Awarded Lamar York Prize in Creative Nonfiction, Chattahoochee Review</li> */}
            {/* <li>2003-2004 - Awarded Iowa Literary Essay prize (2nd place), The Iowa Review</li> */}
            {/* <li>2006-present - Founded GCSU/Early College 7th Grade Creative Writing project</li> */}
            {/* <li>2007 - Awarded Georgia College Distinguished Professor of the Year</li> */}
            {/* <li>2008-2013 - Published 20 poems in 13 journals (twice in The Southern Review)</li> */}
            {/* <li>2016 - Selected by Judson Mitcham for Inspired Georgia anthology (UGA Press)</li> */}
            {/* <li>2018 - Awarded “Professor Emeritus” status at Georgia College</li> */}
            {/* </ul> */}

            <Timeline align="alternate">
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography className={classes.timeline}>1993</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography>
                    Founded Literary journal Kestrel (Fairmont State, West
                    Virginia)
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography className={classes.timeline}>1994</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography>
                    Awarded West Virginia Commission on the Arts State
                    Fellowship
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography className={classes.timeline}>1994</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography>
                    Taught for the Modern Poetry Association/NEH “Poets in
                    Person” project
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography className={classes.timeline}>
                    1997-2018
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography>
                    Served as endowed Fuller E. Callaway/Flannery O’Connor Chair
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography className={classes.timeline}>1997</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography>
                    Selected by W.S. Merwin for a Nimrod/Hardman Pablo Neruda
                    Prize
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography className={classes.timeline}>
                    1998-2003
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography>
                    Elected to Board, Association of Writers and Writing
                    Programs
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography className={classes.timeline}>
                    2000-2002
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography>
                    Elected as AWP Board President (two terms)
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography className={classes.timeline}>
                    2000-2009
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography>
                    Served on the Georgia Council for Arts (GCA) Literary
                    Committee
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography className={classes.timeline}>2003</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography>
                    Awarded Lamar York Prize in Creative Nonfiction,
                    Chattahoochee Review
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography className={classes.timeline}>
                    2003-2004
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography>
                    Awarded Iowa Literary Essay prize (2nd place), The Iowa
                    Review
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography className={classes.timeline}>
                    2006-present
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography>
                    Founded GCSU/Early College 7th Grade Creative Writing
                    project
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography className={classes.timeline}>2007</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography>
                    Awarded Georgia College Distinguished Professor of the Year
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography className={classes.timeline}>2008</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography>
                    Named among authors of “Notable Essays of 2008” in Best
                    American Essays
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography className={classes.timeline}>
                    2008-2013
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography>
                    Published 20 poems in 13 journals (twice in The Southern
                    Review)
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography className={classes.timeline}>2016</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography>
                    Selected by Judson Mitcham for Inspired Georgia anthology
                    (UGA Press)
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography className={classes.timeline}>2018</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography>
                    Awarded “Professor Emeritus” status at Georgia College
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              {/* End Timeline */}
              <TimelineItem>
                <TimelineOppositeContent></TimelineOppositeContent>
                <TimelineDot />
                <TimelineSeparator></TimelineSeparator>
                <TimelineContent></TimelineContent>
              </TimelineItem>
            </Timeline>

            <p className="article-paragraph">
              <span className="first-letter-larger">A</span>t Georgia College
              Lammon founded the university’s <a href="https://www.gcsu.edu/artsandsciences/english/mfa" target="blank">MFA program</a> in 2001-2002. In less
              than 10 years, the program was named one of the nation’s “Top 25
              Underrated Creative Writing MFA Programs (2011-2012mfa students)”
              in <a href="https://www.huffpost.com/entry/underrated-mfa-programs_b_850147" target="blank">The Huffington Post</a> (spring 2011). The program’s students have
              come from coast to coast: Oregon, Texas, Pennsylvania, Arizona,
              Ohio, New York, Michigan, and even Scotland (U.K.), and of course
              from throughout the Southeast and our home state of Georgia.
              Nearly all of Georgia College MFA students are awarded MFA or
              university assistantships, and most earn Foundation scholarships
              in their second and third years. Our alumni have published books
              and in national journals, won national awards for their writing,
              and are teaching in schools, colleges, and universities throughout
              the U.S. and abroad.
            </p>

            <p className="article-paragraph">
              <span className="first-letter-larger">O</span>ver the past 30
              years, Martin Lammon’s poems and essays have appeared in such
              literary journals as <em>The Atlanta Review, Black Warrior Review,
              Chariton Review, Chelsea, Connecticut Review, Gettysburg Review,
              Hotel Amerika, Mid-American Review, Midwest Quarterly, Mississippi
              Review, New Virginia Review, Ploughshares, Poet Lore, Poets &
              Writers, Puerto del Sol, The Southern Review, West Branch</em> and many
              others.
            </p>

            <p className="article-paragraph">
              <span className="first-letter-larger">T</span>hrough his efforts,
              Martin Lammon has helped to create publication, reading, and
              educational opportunities for hundreds of writers, both new and
              experienced, unknown and accomplished. Over the past 30 years, he
              has worked with other generous supporters to help establish
              honoraria for Georgia College visiting writers as well as Arts &
              Letters contributors; endowed funding for the Arts & Letters
              annual prizes; and endowed scholarships for creative writing
              students at Georgia College.
            </p>

            <p className="article-paragraph">
              <em><span className="first-letter-larger">A</span>fter living for
              nearly 20 years in Milledgeville, Georgia, he now lives in Atlanta
              and is looking forward to contributing to his new community and
              continuing his ongoing national efforts to advocate for the
              literary arts.</em>
            </p>
          </article>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Profile;
