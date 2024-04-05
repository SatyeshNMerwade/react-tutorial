export default function PropsConcept({ image, title, description }) {
  //Object Destructuring
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
