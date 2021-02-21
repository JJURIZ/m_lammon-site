function Books() {
  return (
    <div className="Profile">
      <div className="body-page">
        <h1 className="header-lg">Martin Lammon</h1>
        <h3 className="header-md3">Books</h3>

        <article>
          <div className="book-container">
              <div className="book-img-container">
            <img
              src="https://martinlammon.files.wordpress.com/2019/11/long-road-home-poems-by-martin-lammon.jpg?w=620&h=931&zoom=2"
              alt="The Long Road Home cover"
              className="book-img"
            />
            </div>

            <div className="book-description-container">
              <p className="book-description">
                Martin Lammon’s new book of poems, was published by Finishing
                Line Press in March 2020. Poems in the collection were first
                published in The Southern Review, Gettysburg Review, Atlanta
                Review, Poet Lore, and many other distinguished literary
                journals.
              </p>

              <a
                href="https://www.finishinglinepress.com/product/the-long-road-home-by-martin-lammon/"
                target="blank"
                className="book-order"
              >
                Finishing Line Press
              </a>
              <a
                href="https://www.amazon.com/Long-Road-Home-Martin-Lammon/dp/1646621786/ref=sr_1_1?dchild=1&keywords=martin+lammon&qid=1613945402&sr=8-1"
                target="blank"
                className="book-order amazon"
              >
                Amazon
              </a>
            </div>
          </div>

          <div className="book-container">
          <div className="book-img-container">
            <img
              src="https://wordpressua.uark.edu/uapress/files/2014/09/lammon.png"
              alt="News From Where I Live cover"
              className="book-img"
            />
            </div>

            <div>
              <p className="book-description">
                News from Where I Live won the eighth annual Arkansas Poetry
                Award and was published in 1998 by the University of Arkansas
                Press. Poems in the collection were first published in The
                Gettysburg Review, Midwest Review, Ploughshares, and many other
                distinguished literary journals. Pulitzer Prize poet W. S.
                Merwin selected poems in this collection for a Hardman/Pablo
                Neruda prize, published in the journal Nimrod.
              </p>

              <a
                href="https://www.uapress.com/product/news-from-where-i-live/"
                target="blank"
                className="book-order"
              >
                U. of Arkansas Press
              </a>
              <a
                href="https://www.amazon.com/NEWS-WHERE-Arkansas-Poetry-Award/dp/1557285071/ref=sr_1_2?dchild=1&keywords=martin+lammon&qid=1613946440&sr=8-2"
                target="blank"
                className="book-order amazon"
              >
                Amazon
              </a>
            </div>
          </div>

          <div className="book-container">
          <div className="book-img-container">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/31OXTzc+2IL.jpg"
              alt="Written in Water, Written in Stone cover"
              className="book-img"
            />
            </div>

            <div>
              <p className="book-description">
                Written in Water, Written in Stone: Twenty Years of Poets on
                Poetry was part of the “Poets on Poetry” series published by the
                University of Michigan Press. The anthology collects essays and
                interviews by poets whose books were selected by Donald Hall,
                the first general editor of series. The anthology collects prose
                by many of the most important poets of the late 20th Century,
                including Robert Creeley, James Wright, Tess Gallagher, David
                Ignatow, Robert Hayden, Charles Simic, Philip Levine, Anne
                Sexton, William Stafford, Alice Ostriker, Galway Kinnell, Maxine
                Kumin, and many others (including Hall’s “Poetry and Ambition”).
                The anthology also includes Lammon’s introductory essay, “The
                Second Language of Poetry,” and a foreword by David Lehman, who
                succeeded Hall as series editor.
              </p>

              <a
                href="https://www.press.umich.edu/10190/written_in_water_written_in_stone"
                target="blank"
                className="book-order"
              >
                U. of Michigan Press
              </a>
              <a
                href="https://www.amazon.com/Written-Water-Stone-Twenty-Poetry/dp/0472096346/ref=sr_1_9?dchild=1&keywords=written+in+water+written+in+stone&qid=1613946692&sr=8-9"
                target="blank"
                className="book-order amazon"
              >
                Amazon
              </a>
            </div>
          </div>

          <div className="book-container">
          <div className="book-img-container">
            <img
              src="https://martinlammon.files.wordpress.com/2019/11/arts-and-letters-issue-1.jpg?w=314&h=444"
              alt="Written in Water, Written in Stone cover"
              className="book-img"
            />
            </div>

            <div>
              <p className="book-description">
              Martin Lammon is the founding editor of Arts & Letters (originally titled Arts & Letters Journal of Contemporary Culture), published by Georgia College & State University. The journal’s first issue was published in the spring of 1999; Lammon’s final issue as editor (<a href="https://artsandletters.gcsu.edu/issue-29/" target="blank">issue 29</a>) was published fall 2014, and includes his essay looking back at the history of the journal. Arts & Letters continues to publish and thrive under the new editorship of Laura Newbern. Issue 41 is the most recent edition, published Fall 2020.
              </p>

              <a
                href="https://artsandletters.gcsu.edu/category/past-issues/"
                target="blank"
                className="book-order"
              >
                Order @ Georgia College
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Books;
