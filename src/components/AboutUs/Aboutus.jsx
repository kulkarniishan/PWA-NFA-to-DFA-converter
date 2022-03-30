import { Helmet } from "react-helmet-async";
import githubLogo from "../../utils/Images/GitHub-Mark-Light-120px-plus.png";

function Aboutus() {
  return (
    <>
      <Helmet>
          <title>About the developers</title>
          <meta name="description" content="Information about the creators of this Webpage." />
          <meta name="robots" content="noindex"/>
          <link rel="cononical" href="/about-us" />
      </Helmet>
      <div className="min-h-screen text-white p-10 transition duration-500 dark:bg-gray-700">
        <div className="grid grid-cols-9 gap-4">
          <div
            className="col-span-9 md:col-span-3 max-h-1/4 bg-blue-300 border-b-8 border-r-8 shadow-lg border-green-700 rounded-md "
            style={{ minHeight: "30vh" }}
          >
            <div className="grid grid-flow-rows grid-rows my-3 gap-4">
              <div className="row-span">
                <div className="w-40 h-40 mx-auto">
                  <img
                    className="rounded-full border border-gray-100 shadow-sm mx-2"
                    src="data:image/png;base64,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"
                    alt="Anurag"
                  />
                </div>
              </div>
              <div className="row-span">
                <div className="grid grid-flow-cols mx-auto gap-4">
                  <div className="row-span mx-auto">
                    <div className="container bg-blue-700 rounded-lg text-white px-3 py-1">
                      <h4>Anurag Ghosh</h4>
                    </div>
                  </div>
                  <div className="row-span mx-auto">
                    <div className="container bg-blue-700 rounded-lg text-white px-3 py-1">
                      <h5>1914019</h5>
                    </div>
                  </div>
                  <div className="row-span mx-auto">
                    <div className="container bg-blue-700 rounded-lg text-white px-3 py-1">
                      <h5>TY B.Tech IT</h5>
                    </div>
                  </div>
                  <div className="row-span mx-auto px-3">
                    <div className="container border-2 border-blue-700 rounded-lg text-white px-3 py-1">
                      <p className="text-blue-700 text-lg">Description</p>
                      <p className="text-blue-700 text-md">
                        Tech Geek, Problem solver, AI/ML enthusiast, JAVA
                        developer, Frontend developer
                      </p>
                    </div>
                  </div>
                  <div className="row-span mx-auto">
                    <div className="container hover:bg-blue-400 bg-blue-600 rounded-lg text-lg  px-4 py-1 ">
                      <a
                        className="text-white no-underline grid  grid-cols-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/Anu26092002"
                        aria-label="Click on this link to view Anurag's Github Profile"
                      >
                        <span className="col-span-1">
                          <img
                            src={githubLogo}
                            width="30em"
                            alt="github Logo"
                          />
                        </span>
                        <span className="col-span-1">Github</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-span-9 md:col-span-3 max-h-1/4 bg-red-300 border-b-8 border-r-8 shadow-lg border-pink-700 rounded-md "
            style={{ minHeight: "30vh" }}
          >
            <div className="grid grid-flow-rows grid-rows my-3 gap-4">
              <div className="row-span">
                <div className="w-40 h-40 mx-auto">
                  <img
                    className="rounded-full border border-gray-100 shadow-sm mx-2"
                    src="https://avatars.githubusercontent.com/u/69432454?v=4"
                    alt="Ishan"
                  />
                </div>
              </div>
              <div className="row-span">
                <div className="grid grid-flow-cols mx-auto gap-4">
                  <div className="row-span mx-auto">
                    <div className="container bg-red-700 rounded-lg  px-3 py-1">
                      <h4>Ishan Kulkarni</h4>
                    </div>
                  </div>
                  <div className="row-span mx-auto">
                    <div className="container bg-red-700 rounded-lg  px-3 py-1">
                      <h5>1914034</h5>
                    </div>
                  </div>
                  <div className="row-span mx-auto">
                    <div className="container bg-red-700 rounded-lg  px-3 py-1">
                      <h5>TY B.Tech IT</h5>
                    </div>
                  </div>
                  <div className="row-span mx-auto px-3">
                    <div className="container border-2 border-red-700 rounded-lg  px-3 py-1">
                      <p className="text-red-700 text-lg">Description</p>
                      <p className="text-red-700 text-md">
                        Geek. Problem solver MERN stack enthusiast. ML developer
                      </p>
                    </div>
                  </div>
                  <div className="row-span mx-auto">
                    <div className="container hover:bg-blue-400 bg-blue-600 rounded-lg text-lg  px-4 py-1 ">
                      <a
                        className=" no-underline grid  grid-cols-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/kulkarniishan"
                        aria-label="Click on this link to view Ishan's Github Profile"
                      >
                        <span className="col-span-1">
                          <img
                            src={githubLogo}
                            width="30em"
                            alt="github Logo"
                          />
                        </span>
                        <span className="col-span-1 text-white">Github</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-span-9 md:col-span-3 max-h-1/4 bg-yellow-300 border-b-8 border-r-8 shadow-lg border-yellow-700 rounded-md "
            style={{ minHeight: "30vh" }}
          >
            <div className="grid grid-flow-rows grid-rows my-3 gap-4">
              <div className="row-span">
                <div className="w-40 h-40 mx-auto">
                  <img
                    className="rounded-full border border-gray-100 shadow-sm mx-2"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVLqfekg_kitC_QJ5kgBUTh2tt5EIcxEnQDQ&usqp=CAU"
                    alt="Akshad"
                  />
                </div>
              </div>
              <div className="row-span">
                <div className="grid grid-flow-cols mx-auto gap-4">
                  <div className="row-span mx-auto">
                    <div className="container bg-yellow-700 rounded-lg  px-3 py-1">
                      <h4>Akshad Thole</h4>
                    </div>
                  </div>
                  <div className="row-span mx-auto">
                    <div className="container bg-yellow-700 rounded-lg  px-3 py-1">
                      <h5>1914062</h5>
                    </div>
                  </div>
                  <div className="row-span mx-auto">
                    <div className="container bg-yellow-700 rounded-lg  px-3 py-1">
                      <h5>TY B.Tech IT</h5>
                    </div>
                  </div>
                  <div className="row-span mx-auto px-3">
                    <div className="container border-2 border-yellow-700 rounded-lg  px-3 py-1">
                      <p className="text-yellow-700 text-lg">Description</p>
                      <p className="text-yellow-700 text-md">
                        A passionate Full Stack Software Developer 🚀 and
                        Machine Learning Enthusiast 🤖 having an experience of
                        building Web and Mobile applications
                      </p>
                    </div>
                  </div>
                  <div className="row-span mx-auto">
                    <div className="container hover:bg-blue-400 bg-blue-600 rounded-lg text-lg  px-4 py-1 ">
                      <a
                        className=" no-underline grid  grid-cols-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/akshadthole"
                        aria-label="Click on this link to view Akshad's Github Profile"
                      >
                        <span className="col-span-1">
                          <img
                            src={githubLogo}
                            width="30em"
                            alt="github Logo"
                          />
                        </span>
                        <span className="col-span-1 text-white">Github</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4"></div>
      </div>
    </>
  );
}

export default Aboutus;
