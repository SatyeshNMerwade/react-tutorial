import PropsConcept from "./PropsConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <PropsConcept key={conceptItem.title} {...conceptItem} />
        ))}
        {/* <PropsConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <PropsConcept {...CORE_CONCEPTS[1]} /> */}
        {/* SPREAD OPERATOR FOR ARRAY */}
        {/* <PropsConcept {...CORE_CONCEPTS[2]} />
            <PropsConcept {...CORE_CONCEPTS[3]} /> */}
      </ul>
    </section>
  );
}
