import React, { useState } from "react";
import "./DeepThought.css";
import tools from "../assets/tools.png";
import schedule from "../assets/schedule.png";
import meeting from "../assets/meeting.png";
import home from "../assets/home.png";
import closeIcon from "../assets/close-Icon.png";
import image from "../assets/image.jpg";
import arrowCurveLeftRight from "../assets/arrow-curve-left-right.png";
import arrowCurveLeftDown from "../assets/arrow-curve-left-down.png";
import arrowExpand02 from "../assets/arrow-expand-02.png";
import one from "../assets/one.png";

const DeepThought = () => {
  const [open, setOpen] = useState(false);
  const journeyBoardHandle = () => {
    setOpen(!open);
    console.log(open);
  };

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <div>
          <img
            src="https://deepthought.education/assets/images/logo/logo.svg"
            alt="logo"
            className="logo"
          />
        </div>
        <div className="navbar-icon">
          <div>
            <img src={home} alt="home" className="nav-links" />
          </div>
          <div>
            <img src={tools} alt="tools" className="nav-links" />
          </div>
          <div>
            <i
              className="fa-regular fa-bell nav-links"
              style={{ color: "white" }}
            ></i>
          </div>
          <div>
            <i
              className="fa-regular fa-user nav-links"
              style={{ color: "white" }}
            ></i>
          </div>
          <div>
            <i
              className="fa-solid fa-ellipsis-vertical"
              style={{ color: "#3683f0" }}
            ></i>
          </div>
        </div>
      </div>

      {/* Journey Board */}
      <div className={`journey-board ${open ? "expanded" : ""}`}>
        <div className="head">
          {open && <h1 className="journey-heading">Journey Board</h1>}
          <i
            className={`fa-solid fa-arrow-right head-arrow ${open ? "rotate" : ""}`}
            onClick={journeyBoardHandle}
          ></i>
        </div>
        {open ? (
          <div>
            <div className="explore-text">Explore the world of management</div>
            <div className="journey-board-body">
              <ul>
                <li>Technical Project Management</li>
                <li>Threadbuild</li>
                <li>Structure Your Pointer</li>
                <li>4SA Method</li>
              </ul>
            </div>
          </div>
        ):<div className="one-align">
            <div className="one">
                  <img src={one}/>
            </div>
            </div>} 
      </div>

      {/* Technical Project Management */}
      <div className="technical-align">
        <div className="technical">Technical Project Management</div>
        <div>
          <button className="submit-task">Submit Task</button>
        </div>
      </div>

      {/* Notice Board */}
      <div className="notice-board">
        <div className="notice-board-side">
          <img src={closeIcon} alt="close" className="close" />
          <div className="notice-board-text">
            <div>N</div>
            <div>o</div>
            <div>t</div>
            <div>i</div>
            <div>c</div>
            <div>e</div>
            <div style={{ paddingTop: "6px" }}>B</div>
            <div>o</div>
            <div>a</div>
            <div>r</div>
            <div>d</div>
          </div>
        </div>
      </div>

      {/* Explore Section */}
      <div className="explore">
        <div className="explore-typography">
          Explore the world of management
        </div>
        <div className="explore-typography-sub-body">
          As a project manager, you play an important role in leading a project
          through initiation, planning, execution, monitoring, controlling, and
          completion. How? Do you want to manage each and every step of your
          life?
        </div>

        {/* Cards Section */}
        <div className="card-align">
          <div className="card">
            <div className="card-title">
              <div>Project Management Report</div>
              <div className="card-icon">
                <i className="fa-solid fa-circle-info"></i>
              </div>
            </div>
            <div className="card-content">
              <div className="card-content-description">
                <strong>Description:</strong> Story of Alignment Scope of
                Agility Specific Accountable Staggering Approach
              </div>
              <img src={image} alt="Card Content" />
            </div>
          </div>

          <div className="card">
            <div className="card-title">
              <div>Threadbuild</div>
              <div className="card-icon">
                <i className="fa-solid fa-circle-info"></i>
              </div>
            </div>
            <div className="card-content">
              <div className="card-content-description">
                <strong>Description:</strong> Watch the video and threadbuild,
                and jot out key threads while watching the video
              </div>
              <div className="thread-section">
                <div className="thread-header">
                  <i className="fa-solid fa-chevron-up"></i>
                  Thread A
                </div>
                <div className="thread-body">
                  <div className="input-group">
                    <div className="input-box">
                      <p className="input-box-title">Sub thread 1</p>
                      <textarea
                        className="textarea input-box-title"
                        placeholder="Enter Text Here"
                      ></textarea>
                    </div>
                    <div className="input-box">
                      <p className="input-box-title">Sub Interpretation 1</p>
                      <textarea
                        className="textarea input-box-title"
                        placeholder="Enter Text Here"
                      ></textarea>
                    </div>
                  </div>
                  <div className="thread-actions">
                    <div className="thread-actions-icons">
                      <i className="fa-solid fa-lightbulb"></i>
                      <i className="fa-solid fa-quote-left"></i>
                      <i className="fa-solid fa-file-alt"></i>
                      <i className="fa-solid fa-download"></i>
                    </div>
                    <div className="thread-actions-dropdown">
                      <select className="dropdown">
                        <option>Select Categ</option>
                      </select>
                      <select className="dropdown">
                        <option>Select Process</option>
                      </select>
                    </div>
                  </div>
                  <button className="add-subthread">+ Sub-thread</button>
                  <div className="summary">
                    <div className="input-box-summary">
                      <p className="input-box-title">Summary of thread A</p>
                      <textarea
                        className="textarea input-box-title"
                        placeholder="Enter Text Here"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More cards */}
        <div className="card-align">
          <div className="card">
            <div className="card-title-2">
              <div>Structure Your Pointer</div>
              <div className="card-icon">
                <i className="fa-solid fa-circle-info"></i>
              </div>
            </div>
            <div className="card-content">
              <div className="card-content-description-structure">
                <strong>Description:</strong> Write a 300 - 400 word article
                from your thread. Publish your understanding and showcase your
                understanding to the entire world
              </div>
              <div className="card-content-description-border"></div>
              <div className="title">
                <div className="title-text">Title</div>
                <input />
              </div>
              <div className="input-content">
                <div className="content-text">Content</div>
                <div className="content-box">
                  <div className="content-menu">
                    <div className="content-menu-icon">
                      <div className="content-menu-text">File</div>
                      <div className="content-menu-text">Edit</div>
                      <div className="content-menu-text">View</div>
                      <div className="content-menu-text">Insert</div>
                      <div className="content-menu-text">Format</div>
                      <div className="content-menu-text">Tools</div>
                      <div className="content-menu-text">Table</div>
                      <div className="content-menu-text">Help</div>
                    </div>
                    <div className="content-menu-icon-2">
                      <img src={arrowCurveLeftRight} />
                      <img src={arrowCurveLeftDown} />
                      <img src={arrowExpand02} />
                      <div className="content-menu-text paragraph">Paragraph</div>
                    </div>
                  </div>
                  <textarea className="textarea-2"></textarea>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-title-2">
              <div>4SA Method</div>
              <div className="card-icon">
                <i className="fa-solid fa-circle-info"></i>
              </div>
            </div>
            <div className="card-content">
              <div className="card-content-description-structure">
                <strong>Description:</strong> Write a 300 - 400 word article
                from your thread. Publish your understanding and showcase your
                understanding to the entire world
              </div>
              <div className="card-content-description-border"></div>
              <div className="title">
                <div className="title-text">Title</div>
                <input />
              </div>
              <div className="input-content">
                <div className="content-text">Content</div>
                <div className="content-box">
                  <div className="content-menu">
                    <div className="content-menu-icon">
                      <div className="content-menu-text">File</div>
                      <div className="content-menu-text">Edit</div>
                      <div className="content-menu-text">View</div>
                      <div className="content-menu-text">Insert</div>
                      <div className="content-menu-text">Format</div>
                      <div className="content-menu-text">Tools</div>
                      <div className="content-menu-text">Table</div>
                      <div className="content-menu-text">Help</div>
                    </div>
                    <div className="content-menu-icon-2">
                      <img src={arrowCurveLeftRight} />
                      <img src={arrowCurveLeftDown} />
                      <img src={arrowExpand02} />
                      <div className="content-menu-text paragraph">Paragraph</div>
                    </div>
                  </div>
                  <textarea className="textarea-2"></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="empty"></div>
      </div>

      {/* Right Menu */}
      <div className="right-menu">
        <div className="menu-item">
          <div className="item">
            <i className="fa-solid fa-question"></i>
          </div>
          <div className="item">
            <img src={meeting} alt="meeting" />
          </div>
          <div className="item">
            <img src={schedule} alt="schedule" />
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default DeepThought;
