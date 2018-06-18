import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);

export const newGeneralNotification = functions.firestore
    .document('Notifications/notidicationID').onUpdate(async event => {
        const data = event.after.data();
        const msg = data.message;

        const payload = {
            notification: {
                title: msg,
                sound: 'default',
                icon: 'ic_stat_normal',
                clickAction: "FCM_PLUGIN_ACTIVITY"
            },

            data: {
                title: msg
            }
        }

        const options = {
            priority: "high",
            timeToLive: 60 * 60 * 24 //24 hours
        };

        return admin.messaging().sendToTopic('pushes', payload, options);
    })

export const newStoryNotification = functions.firestore
    .document('HomeStories/{storyID}').onCreate(async event => {

        const data = event.data();

        const headline = data.headline;
        const prev = data.preview;

        const payload = {
            notification: {
                title: headline,
                body: prev,
                sound: 'default',
                icon: 'ic_stat_normal',
                clickAction: "FCM_PLUGIN_ACTIVITY"
            },

            data: {
                title: headline,
                body: prev,
            }
        }

        const options = {
            priority: "high",
            timeToLive: 60 * 60 * 24 //24 hours
        };

        return admin.messaging().sendToTopic('pushes', payload, options);
    })

export const newEventNotification = functions.firestore
    .document('Events/{eventID}').onCreate(async event => {

        const data = event.data();

        const preTitle = "אירוע חדש בתאריך";
        const bodyMsg = data.headline;
        const temp = data.date.split(" ")[0];

        const year = temp.split("/")[0];
        const month = temp.split("/")[1];
        const day = temp.split("/")[2];

        const date = day + "/" + month + "/" + year;
        
        const payload = {
            notification: {
                title: preTitle + " " + date + " ",
                body: bodyMsg,
                sound: 'default',
                icon: 'ic_stat_normal',
                clickAction: "FCM_PLUGIN_ACTIVITY"
            },

            data: {
                title: "אירוע חדש!" + "\n" + bodyMsg + "\n\n" + "מתי? " + date + ", " + data.date.split(" ")[1].substring(0, 5) + "\nהיכנסו ללוח אירועים לפרטים נוספים.",
            }
        }

        const options = {
            priority: "high",
            timeToLive: 60 * 60 * 24 //24 hours
        };

        return admin.messaging().sendToTopic('pushes', payload, options);
    })
