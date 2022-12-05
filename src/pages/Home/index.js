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
                <a>
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
                <canvas
                  width="56.25"
                  height="100"
                  class="tiktok-196h150-CanvasVideoCardPlaceholder e1bh0wg70"
                ></canvas>
                <div className={cx("video-player")}>
                  <div className={cx("container")}>
                    <div className={cx("basic-player")}>
                      <div className={cx("wrapper-video")}>
                        <video
                          class=""
                          playsinline="true"
                          x5-playsinline="true"
                          webkit-playsinline="true"
                          tabindex="2"
                          mediatype="video"
                          src="https://v16-webapp.tiktok.com/3e9c488734f25df06263f428764d9d75/638e5249/video/tos/maliva/tos-maliva-ve-0068c799-us/edae171c2bb049938603bc9f28158e50/?a=1988&amp;ch=0&amp;cr=0&amp;dr=0&amp;lr=tiktok_m&amp;cd=0%7C0%7C1%7C0&amp;cv=1&amp;br=2266&amp;bt=1133&amp;cs=0&amp;ds=3&amp;ft=H3bLjvyBQ9wUxPF912HC~~iRgGa-W.RUXZZSJQiZ-x4kS&amp;mime_type=video_mp4&amp;qs=0&amp;rc=ZjQ0OzhlOTg6OGc6aGk0O0BpanU2bDM6ZnRnaDMzZzczNEBeX2MwMzEvNi4xNDEwYTNfYSMxMzBjcjRvYzBgLS1kMS9zcw%3D%3D&amp;l=20221205141900010244075060261D7658&amp;btag=80000"
                        ></video>
                      </div>
                    </div>
                  </div>
                </div>
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
