import ReactAudioPlayer from "react-audio-player";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <div className="body-page">
        <h1 className="header-lg">Martin Lammon</h1>
        <h3 className="header-md3 about">About</h3>
        <hr className="horizontial-line"></hr>
        <h3 className="header-md3">A Poet's First Person Look Back</h3>
        <img
          src="https://martinlammon.files.wordpress.com/2017/07/cropped-baseball_at_sunset.png"
          alt="Man at bat"
          className="about-img"
        />

        <article className="article">
          <p className="article-paragraph">
            <span className="first-letter-larger">I</span> was born in Ohio,
            where I studied at Wittenberg University (B.A.) and Ohio University
            (M.A., Ph.D.). Later I lived in Connecticut, Pennsylvania, West
            Virginia (where I founded the journal Kestrel at Fairmont State),
            and Costa Rica. But since 1997, I’ve called Georgia home, where I
            live with my wife, Libby, a native of Atlanta. Since 1995, Libby and
            I have traveled to Costa Rica, Spain, and many other countries. Here
            we are in Germany, where Libby was a Fulbright Scholar in Berlin. My
            mother’s family were “<a href="https://en.wikipedia.org/wiki/Volga_Germans" target="blank">Volga Germans</a>” (Wolgadeutsche) who emigrated
            from Russia’s Volga River Valley to Ohio in 1908. My mother’s family
            name Lichtenwald means, literally, “light in the woods,” but more
            colloquially, “a clearing.”
          </p>

          <img
            src="https://martinlammon.files.wordpress.com/2017/07/libbyandmartygermany.jpg?w=490&h=368"
            alt="Marty and Libby in Germany"
            className="article-img"
          />

          <p className="article-paragraph">
            <span className="first-letter-larger">I</span>n 1997, we moved to
            Milledgeville, where we both started jobs at <a href="https://www.gcsu.edu/" target="blank">Georgia College</a> (famous
            fiction writer Flannery O’Connor grew up and went to college here).
            Libby worked in the International Education office, where she served
            as International Student Advisor (and later as Associate Director).
            And me? As the “Fuller E. Callaway endowed Flannery O’Connor chair
            in Creative Writing,” I founded the literary journal <a href="https://artsandletters.gcsu.edu/" target="blank">Arts & Letters</a>;
            established a “<a href="https://www.gcsu.edu/artsandsciences/english/visiting-writers-department-of-english" target="blank">Visiting Writers</a>” series (featuring such
            distinguished authors as Judith Ortiz Cofer, Billy Collins, Mark
            Doty, Ernest Gaines, Donald Hall, Maxine Kumin, Frances Mayes, W. S.
            Merwin, Charles Simic, Natasha Trethewey, and many more); and
            developed a new creative writing program. That program later became
            in 2001-2002 the nationally competitive <a href="https://www.gcsu.edu/artsandsciences/english/mfa" target="blank">Master of Fine Arts Creative
            Writing graduate program</a> at Georgia College.
          </p>

          <img
            src="https://martinlammon.files.wordpress.com/2017/07/frontcampusspring.jpg?w=564&h=424"
            alt="Georgia College Entrance"
            className="article-img"
          />

          <p className="article-paragraph">
            <span className="first-letter-larger">M</span>rs. Pat Young, my 7th
            and 8th grade English teacher, first inspired my love of poetry.
            Each year, she required her students to memorize a poem and perform
            out loud for the class. Most of my friends chose the shortest poem
            they could find (I think William Carlos Williams “The Red
            Wheelbarrow” was a favorite). But I chose long poems: Tennyson’s
            “The Charge of the Light Brigade,” and my favorite back then, Edgar
            Allan Poe’s “Annabel Lee.” Even then I was a brooding romantic!
            Here’s my best effort to recreate how I read the poem to the class
            so many years ago.
          </p>

          <h6 className="heading-tiny">You can follow with the written poem at the <a href="https://www.poetryfoundation.org/poems/44885/annabel-lee" target="blank">Poetry Foundation</a> web site.</h6>
          <ReactAudioPlayer
            src="https://martinlammon.files.wordpress.com/2017/07/edgar-allan-poes-annabel-lee-read-by-martin-lammon.m4a?_=1"
            controls
            className="audio-player"
          />


          {/* <h1 className="header-md3">1976-1980: Wittenberg University in Springfield, Ohio</h1> */}

          <p className="article-paragraph">
            <span className="first-letter-larger">E</span>xcelling in sports
            (especially baseball) mattered most to me, even if I wasn’t a
            typical jock. I loved poetry, singing solos in the choir, and
            studying advanced anatomy and physiology (my biology teacher, Mr.
            Mitchell, was also my football linebackers coach). I loved learning
            a new language, studying French all four years in high school. (Read
            my essay “My Name Is” for insight into my love of learning new
            languages.) But back in high school, I loved hitting a home run or
            scoring a touchdown even more. The problem was, by the end of my
            senior year, home runs and touchdowns were scarce for me. Then, that
            summer, I broke my hand, had to wear a cast until Thanksgiving, so
            my first term in college marked the end of my athletic career, even
            if I never stopped being a big sports fan. (Read my essay “<a href="https://martinlammon.com/2017/07/11/first-blog-post/" target="blank">Homeward:
            World Series 1995, Costa Rica</a>” for proof).
          </p>

          <p className="article-paragraph">
            <span className="first-letter-larger">I</span> was a science major
            in college, planning to follow in my favorite teacher’s footsteps,
            coaching football and teaching biology. But in college, I also fell
            in love for the first time, and my new girlfriend wasn’t thrilled
            about marrying a high school teacher/coach. Back then, I could have
            chosen almost any field of study: science, literature, history,
            politics, religion, linguistics. She thought Political
            Science/Pre-law would be a good choice, so I switched my major in
            the winter term. A year later, our young love fell apart, but I
            decided to add a minor: English studies would be a good fit for a
            future lawyer.
          </p>

          <p className="article-paragraph">
            <span className="first-letter-larger">B</span>y the end of my
            sophomore year, after taking Dr. Richard Veler’s Modern Poetry
            course, I found my new and lasting love, and I changed my major
            again. I was not quite 20 years old, and I knew what I wanted to do
            with my life: write poems and teach in a college. At Wittenberg, I
            studied the canon: Beowulf, Chaucer, Shakespeare; Hawthorne,
            Emerson, Whitman, Melville, Dickinson; Blake, Wordsworth, Coleridge,
            Keats; Yeats, Eliot, Pound (and dozens more, of course). Dr. Allen
            Koppenhaver’s T.S. Eliot seminar explored the modernist’s complete
            works, poems and plays and criticism. Dr. Conrad Balliet’s course on
            Irish Literature introduced works beyond those by W.B. Yeats and
            James Joyce.
          </p>

          <img
            src="https://martinlammon.files.wordpress.com/2017/07/kicking-the-leaves.jpg"
            alt="Donald Hall Kicking the Leaves Bookcover"
            className="article-img"
          />

          <p className="article-paragraph">
            <span className="first-letter-larger">B</span>ut I also started to
            discover more contemporary poets, a few from Wittenberg faculty
            (James Dickey and Nikki Giovanni in that Modern Poetry course, for
            example), others who visited the college to read from their works:
            Gwendolyn Brooks, Daniel Mark Epstein, Philip Schultz, Howard
            Nemerov, and Robert Bly. But my junior and senior years, I
            discovered many more new poets on my own. In the summer of 1979, one
            book would change my life, Donald Hall’s <a href="https://www.amazon.com/Kicking-Leaves-Poems-Donald-Hall/dp/0060906472" target="blank">Kicking the Leaves</a> (read
            the title poem <a href="https://www.nytimes.com/1975/10/17/archives/kicking-the-leaves.html" target="blank">here</a>; follow other links to Hall’s work, available
            in this site’s <Link to="/poems-essays-more" target="blank">Poems, Essays, and More</Link>  section). I wrote about
            Hall’s work for my senior English project (guided by Dr.
            Koppenhaver), and when Robert Bly visited campus in May, I asked if
            he’d consent to be interviewed about his longtime friendship with
            Hall. That interview would be published two years later
            (<a href="https://www.pshares.org/issues/spring-1982" target="blank">Ploughshares</a>, Spring 1982); the interview (“Something Hard to Get
            Rid Of: An Interview with Robert Bly”) can be found online through
            <a href="https://www.jstor.org/stable/40350069?seq=1" target="blank">JSTOR</a>. Later in the Spring, I’d meet Hall for the first time at
            Otterbein College near Columbus, Ohio.
          </p>

          <img
            src="https://martinlammon.files.wordpress.com/2017/07/witt-review-e1500760297628.jpg"
            alt="Wittenberg Review of Literature and Art Cover"
            className="article-img"
          />

          <p className="article-paragraph">
            <span className="first-letter-larger">M</span>y senior year, I
            became the literary editor of The Wittenberg Review, the college’s
            student magazine of literature and art. Most contributors were
            students, sometimes a faculty member, but I was determined to
            improve the magazine. So I solicited works from writers I’d met or
            who would be visiting the campus that year. Appearing next to
            Wittenberg students were Robert Bly, Daniel Mark Epstein, Terry
            Hermsen, Errol Miller, Howard Nemerov, David Pichaske, and David
            Ray. I laid out that issue, page-by-page, using a brand new
            electric, eraser-tape typewriter, and meticulously lined up rub-on,
            large-letter stencils to create the title page hovering above a
            graphic the art editor designed. That year, I did not seek a faculty
            advisor (the young professor I looked up to my junior year, <a href="https://vanicacummings.com/" target="blank">Ron
            Cummings</a>, left teaching to pursue his own calling, advocating for
            social change and citizen-centered community change, with the woman
            he loved). That year, I began what would become a pattern: create a
            journal, organize readings, advocate however I could for students,
            faculty, and others interested in poetry, literature, and the arts.
            I was creating the blueprint for my life.
          </p>
        </article>
      </div>
    </div>
  );
}

export default About;
