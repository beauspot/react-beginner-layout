import logo from "../images/logo192.png"

const ReactFacts = () => {
  return (
    <section>
      <img src={logo} alt="React Logo" className="react-img" />
      <h1>Fun facts about React.</h1>
      <ol>
        <li>Was first released in 2013</li>
        <li>Was Orginally created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>It's Maintained by FaceBook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ol>
    </section>
  );
};

export default ReactFacts;
console.log(logo);
