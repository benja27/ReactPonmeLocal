import storage from "../redux/contador";
import { db } from "../firebase/FireSetUp";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

function Compo() {
  const { count, title } = storage();
  const { increment, decrement } = storage();

  function col(ref) {
    return collection(db, ref);
  }

  async function Add(colname, object) {
    addDoc(col(colname), object).then(() => {
      console.log("we did it");
    });
  }

  // Add("user", { username: "benja" });
  // Add("user", { username: "benja" });

  function fetchAlldocs(name) {
    getDocs(col(name)).then((results) => {
      if (results.docs.length > 0) {
        results.forEach((ele) => {
          console.log(ele.data());
        });
      } else {
        console.log("I did not find that collection");
      }
    });
  }

  function busqueda(colname, campo, valor) {
    let q = query(col(colname), where(campo, "==", valor));

    getDocs(q).then((results) => {
      let n=0
      results.docs.length > 0
        ? results.forEach((ele) => {
            console.log(ele.data());
            n++
          })
        : console.log("no encontre nada");
        console.log("encontrado ",n," veces")
    });
  }

  busqueda("user","username","benja")



  return (
    <div>
      <h2>{title}</h2>
      <h3>the value of counter is !!! {count} !</h3>
      <button
        onClick={() => {
          increment(10);
        }}
        type="btn"
      >
        increment
      </button>

      <button
        onClick={() => {
          decrement(10);
        }}
      >
        decrement
      </button>
    </div>
  );
}

export default Compo;
