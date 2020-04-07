import React, { Fragment } from "react";

// reactstrap components

// core components
const backgroundImage =
  "https://res.cloudinary.com/sebashr20/image/upload/q_auto:low/v1584712106/seed/q8ifficsv0n4ynbbkyjk.jpg";

function ProfilePageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <Fragment>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
        className="page-header page-header-xs "
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
      </div>
    </Fragment>
  );
}

export default ProfilePageHeader;
