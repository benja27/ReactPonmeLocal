import React from "react";

// basicamente le pones al elemento que quieres hacer parallax, le pones background-atachment : fixed

function Gtpparallex() {
  return (
    <main>
      <section className="no-para">
        <h2>no para</h2>
      </section>
      <section className="para">
        <div className="p-content">
          <h2>
            no para Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            ratione fuga, consectetur officia nesciunt debitis cupiditate sit
            veritatis architecto quam suscipit quibusdam deserunt necessitatibus
            vitae sed, aut possimus id nemo.
          </h2>
        </div>
      </section>
      <section className="no-para">
        <h2>no para</h2>
      </section>
    </main>
  );
}

export default Gtpparallex;
