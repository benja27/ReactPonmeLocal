import React from "react";

function Parallax() {
  return (
    <main>      

      <section className="no-parallax" >
        <h2>No Parallax</h2>
      </section>
      <section className="parallax bg" >
        <h2>Parallax</h2>
      </section>
      <section className="no-parallax" >
        <h2>no parallax</h2>
      </section>

    </main>
  );
}

export default Parallax;
