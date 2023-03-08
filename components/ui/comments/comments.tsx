import { FacebookProvider, Comments } from "react-facebook";
import { DiscussionEmbed } from "disqus-react";
import s from "./comments.module.css";

export default function CommentSection() {
  return (
    <div className={s.main}>
      <div className={s.comments}>
        <DiscussionEmbed shortname="medicinatec" config={{}} />
      </div>
    </div>
  );
}
