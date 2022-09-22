import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Button from "~/components/Button";
import styles from "./AccountPreview.module.scss";

const cx = classNames.bind(styles);
function AccountPreview() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <img
          className={cx("avatar")}
          src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f89b316574f8f0ab300e20d4b7ff6a29~c5_100x100.jpeg?x-expires=1661868000&x-signature=h%2FA6gNT%2BGQpzscn4SAL2dPH8dLQ%3D"
          alt=""
        />

        <Button className={cx("follow-btn")} primary>
          Follow
        </Button>
      </div>
      <div className={cx("body")}>
        <p className={cx("nickname")}>
          <strong>tungnguyenthanh</strong>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </p>
        <p className={cx("name")}>Tung Nguyen Thanh</p>
        <p className={cx("analytics")}>
          <strong className={cx("value")}>8.2M </strong>
          <span className={cx("label")}>Follower</span>
          <strong className={cx("value")}>8.2M </strong>
          <span className={cx("label")}>Likes</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
