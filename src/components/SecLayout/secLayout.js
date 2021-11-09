import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="body">
      <div className="navbar">
        <span className="title">Who we are </span>
        <span className="describ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu
          tempus augue. Integer dignissim volutpat eros, fermentum congue risus
          aliquet et. Integer euismod tortor quis augue tempus interdum. Proin
          lobortis leo arcu, et suscipit tortor egestas nec. Vestibulum euismod
          nulla volutpat nunc elementum iaculis. Sed pretium dapibus mauris, sit
          amet porttitor libero. Mauris facilisis nibh vel nisi vestibulum, quis
          auctor enim pretium.
        </span>
        <button>READ MORE</button>
      </div>
      <img
        className="computer"
        src="../../assets/img/computer.png"
        alt="computer"
      />
    </div>
  );
};

export default About;
