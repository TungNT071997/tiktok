import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faHeart,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Button from "~/components/Button";

const cx = classNames.bind(styles);
function Home() {
  return (
    <div className={cx("main-container")}>
      <div>
        <div className={cx("data-item")}>
          <a>
            <img
              className={cx("avatar")}
              src="https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1656411220512774~c5_100x100.jpeg?x-expires=1670421600&x-signature=5UdaQPZ4UqA8UytbSCvmMLYrlEU%3D"
              alt=""
            />
          </a>
          <div className={cx("content-container")}>
            <div className={cx("content-text")}>
              <div className={cx("author-container")}>
              <a >
                  <h3 className={cx("author-title")}>Nguyễn Thanh Tùng</h3>
                  <h4 className={cx("author-name")}> Thanh Tùng</h4>
                </a>
              </div>
              <Button className={cx("follow-btn")} outline small>
                Follow
              </Button>
              <div>
                <span>Today</span>
              </div>
              <h4>Sound</h4>
            </div>
            <div className={cx("video-wrapper")}>
              <div className={cx("video-container")}>
              <video controls className={cx("video-player")}>
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className={cx("action-container")}>
              <button className={cx("ButtonActionItem")}>
                <span className={cx("SpanIconWrapper")}>
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    width="24"
                    height="24"
                  >
                    <FontAwesomeIcon icon={faHeart} />
                  </svg>
                </span>
                <strong className={cx("StrongText")}>610.5K</strong>
              </button>
              <button className={cx("ButtonActionItem")}>
                <span className={cx("SpanIconWrapper")}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <FontAwesomeIcon icon={faCommentDots} />
                  </svg>
                </span>
                <strong className={cx("StrongText")}>4474</strong>
              </button>
              <button className={cx("ButtonActionItem")}>
                <span className={cx("SpanIconWrapper")}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <FontAwesomeIcon icon={faShare} />
                  </svg>
                </span>
                <strong className={cx("StrongText")}>3526</strong>
              </button>
            </div>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
