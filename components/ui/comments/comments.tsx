import { FacebookProvider, Comments } from "react-facebook";
import s from "./comments.module.css";

export default function CommentSection() {
  return (
    <div className={s.main}>
      <div className={s.comments}>
        <FacebookProvider appId="603822177855266">
          <Comments href="http://www.facebook.com/es" />
        </FacebookProvider>
      </div>
    </div>
  );
}
