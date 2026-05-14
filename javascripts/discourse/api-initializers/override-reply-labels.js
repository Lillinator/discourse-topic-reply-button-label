import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("0.8", () => {
  const appendTopicReplyText = I18n.t(themePrefix("topic_reply_append"), {
    defaultValue: "to Topic",
  });

  document.documentElement.style.setProperty(
    "--topic-reply-append",
    `"${appendTopicReplyText}"`
  );
  
  const appendPostReplyText = I18n.t(themePrefix("post_reply_append"), {
    defaultValue: "to Post",
  });

  document.documentElement.style.setProperty(
    "--post-reply-append",
    `"${appendPostReplyText}"`
  );
});
