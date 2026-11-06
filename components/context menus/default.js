import React from "react";

function DefaultMenu(props) {
  return (
    <div
      id="default-menu"
      className={
        (props.active ? " block " : " hidden ") +
        " cursor-default w-52 context-menu-bg border text-left border-gray-900 rounded text-white py-4 absolute z-50 text-sm"
      }>
      <a
        href="https://github.com/dawidolko/Simulaing-Ubuntu-System-GUI"
        target="_blank" rel="noopener noreferrer"
        className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
        <span className="ml-5">🌟</span>{" "}
        <span className="ml-2">Star this Project</span>
      </a>
      <a
        href="https://github.com/dawidolko/Simulaing-Ubuntu-System-GUI/issues"
        target="_blank" rel="noopener noreferrer"
        className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
        <span className="ml-5">❗</span>{" "}
        <span className="ml-2">Report bugs</span>
      </a>
      <Devider />
      <a
        href="https://www.linkedin.com/in/dawidolko/"
        target="_blank" rel="noopener noreferrer"
        className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
        <span className="ml-5">🙋‍♂️</span>{" "}
        <span className="ml-2">
          Follow on <strong>Linkedin</strong>
        </span>
      </a>
      <a
        href="https://github.com/dawidolko"
        target="_blank" rel="noopener noreferrer"
        className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
        <span className="ml-5">🤝</span>{" "}
        <span className="ml-2">
          Follow on <strong>Github</strong>
        </span>
      </a>
      <a
        href="mailto:poczta@dawidolko.pl"
        target="_blank" rel="noopener noreferrer"
        className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
        <span className="ml-5">📥</span>{" "}
        <span className="ml-2">Contact Me</span>
      </a>
      <Devider />
      <div
        onClick={() => {
          localStorage.clear();
          window.location.reload();
        }}
        className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
        <span className="ml-5">🧹</span>{" "}
        <span className="ml-2">Reset Ubuntu</span>
      </div>
    </div>
  );
}

function Devider() {
  return (
    <div className="flex justify-center w-full">
      <div className=" border-t border-gray-900 py-1 w-2/5"></div>
    </div>
  );
}

export default DefaultMenu;
