import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("0.8", () => {
  const appendText = I18n.t(themePrefix("topic_reply_append"), {
    defaultValue: "to Topic",
  });
  
  document.documentElement.style.setProperty(
    "--topic-reply-append",
    `"${appendText}"`
  );
});
