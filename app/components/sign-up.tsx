import styles from "./sign-up.module.scss";
import { IconButton } from "./button";

import { useNavigate } from "react-router-dom";
import { Path } from "../constant";
import { useAccessStore } from "../store";
import Locale from "../locales";

import BotIcon from "../icons/bot.svg";

export function SignUpPage() {
  const navigate = useNavigate();
  const access = useAccessStore();

  const goHome = () => navigate(Path.Home);
  const goSignUp = () => navigate(Path.SignUp);

  return (
    <div className={styles["auth-page"]}>
      <div className={`no-dark ${styles["auth-logo"]}`}>
        <BotIcon />
      </div>

      <div className={styles["auth-title"]}>{Locale.SignUp.Title}</div>
      <div className={styles["auth-tips"]}>{Locale.SignUp.Tips}</div>

      <input
        className={styles["auth-input"]}
        type="text"
        placeholder={Locale.SignUp.InputAccount}
        value={access.accessAccount}
        onChange={(e) => {
          access.updateCode(e.currentTarget.value);
        }}
      />

      <input
        className={styles["auth-input"]}
        type="password"
        placeholder={Locale.SignUp.InputPassword}
        value={access.accessPassword}
        onChange={(e) => {
          access.updateCode(e.currentTarget.value);
        }}
      />

      <input
        className={styles["auth-input"]}
        type="password"
        placeholder={Locale.SignUp.InputPasswordConfirm}
        value={access.accessPassword}
        onChange={(e) => {
          access.updateCode(e.currentTarget.value);
        }}
      />

      <div className={styles["auth-actions"]}>
        <IconButton
          text={Locale.SignUp.Reset}
          type="danger"
          bordered
          onClick={goHome}
        />

        <IconButton
          text={Locale.SignUp.SignUp}
          type="primary"
          bordered
          onClick={goHome}
        />
      </div>
      <div className={styles["auth-actions"]}>
        <IconButton text={Locale.SignUp.Later} onClick={goHome} />
      </div>
    </div>
  );
}
