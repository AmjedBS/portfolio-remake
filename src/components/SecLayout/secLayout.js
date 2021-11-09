import img from "../../assets/img/computer.png";

const About = () => {
  return (
    <div className="body">
      <div className="partO">
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
      <div className="partT">
        <img className="computer" src={img} alt="computer" />
        <span className="triangle"></span>
      </div>
    </div>
  );
};

export default About;
