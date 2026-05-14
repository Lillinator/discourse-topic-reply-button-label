# Discourse Topic Reply Button Labels

### :woman_technologist: Overview
The core Discourse topic and post reply buttons use the same string and it can be a bit unclear to inexperienced users what the different functionalities are:

<img width="40%" height="40%" alt="image" src="https://github.com/user-attachments/assets/923f3772-7ad0-471a-a9cf-8b6d7b64e619" />

Unfortunately, changing the label in Admin->Site Texts results in changing labels for both buttons. 

This lightweight theme component appends a "to Topic" to the topic reply button and "to Post" to the post reply button, to make them clearer, and also allows changing and translation of the strings. There are some included some common locale language files for multi-language forums for those that aren't using AI translation. 

To only use the Topic reply button string, simply delete any entry in the `post_reply_append` string component translation setting and save it.

***

### :camera_flash: Screenshots

English:

<img width="40%" height="40%" alt="image" src="https://github.com/user-attachments/assets/aed1d45c-32b6-4bde-8f48-212a20e53efc" />

French:

<img width="40%" height="40%" alt="image" src="https://github.com/user-attachments/assets/4258b944-8e33-4e4c-a58e-24f6e312fbc7" />

Russian:

<img width="40%" height="40%" alt="image" src="https://github.com/user-attachments/assets/590fef62-1c67-428a-95f6-6d50804e6d45" />

Only Topic reply button string:

<img width="40%" height="40%" alt="image" src="https://github.com/user-attachments/assets/b2f86bab-8a4f-443b-be0f-1242ad39e112" />


***

### :gear: Settings

<img width="40%" height="40%" alt="image" src="https://github.com/user-attachments/assets/e297b25c-5564-4c8b-a5fa-dc74b22c12fc" />

***

### :bulb:  Note

This component only applies to desktop view for now; I may make a toggle to allow for the mobile topic post button text, but space is very limited in the mobile view footer UI.

For more information, go to https://meta.discourse.org/t/discourse-topic-reply-button-label/402911
