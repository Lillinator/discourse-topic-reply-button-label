# Discourse Topic Reply Button Labels

### :woman_technologist: Overview
The core Discourse topic and post reply buttons use the same string and it can be a bit unclear to inexperienced users what the different functionalities are:

<img width="40%" height="40%" alt="image" src="https://github.com/user-attachments/assets/923f3772-7ad0-471a-a9cf-8b6d7b64e619" />

Unfortunately, changing the label in Admin->Site Texts results in changing labels for both buttons.

This lightweight theme component appends a “to Topic” to the topic reply button and “to Post” to the post reply button, to make them clearer, and also allows changing and translation of the strings.

There is a setting to toggle the Topic reply label in mobile (default is off).

Also included are common locale files for multi-language forums for those that aren’t using AI translation.

To only use the Topic reply button string, simply delete any entry in the post_reply_append string component translation setting and save it.

***

### :camera_flash: Screenshots

English (desktop and mobile):

<img width="40%" height="40%" alt="desktop" src="https://github.com/user-attachments/assets/aed1d45c-32b6-4bde-8f48-212a20e53efc" />

<img width="40%" height="40%" alt="mobile" src="https://github.com/user-attachments/assets/5f8c3ba3-3443-4fa2-aa09-3648a22832da" />


French:

<img width="40%" height="40%" alt="french" src="https://github.com/user-attachments/assets/4258b944-8e33-4e4c-a58e-24f6e312fbc7" />

Russian:

<img width="40%" height="40%" alt="russian" src="https://github.com/user-attachments/assets/590fef62-1c67-428a-95f6-6d50804e6d45" />

Only Topic reply button string:

<img width="40%" height="40%" alt="only topic reply button" src="https://github.com/user-attachments/assets/b2f86bab-8a4f-443b-be0f-1242ad39e112" />


***

### :gear: Settings

<img width="40%" height="40%" alt="settings" src="https://github.com/user-attachments/assets/eb8283f1-e904-4e63-8e04-62199e3b2379" />

***

### :bulb: Note

There is no mobile option for the Post reply button because the space in the post footer is very limited and injecting text onto the button breaks the post footer.

For more information, go to https://meta.discourse.org/t/discourse-topic-reply-button-label/402911
