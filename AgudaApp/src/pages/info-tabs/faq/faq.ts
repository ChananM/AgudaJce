import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FaqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-faq',
 templateUrl: 'faq.html',
 // templateUrl: 'template.html'
})
export class FaqPage {


items;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }


   



  initializeItems() {
    this.items=[
      {quest: "מה מטרת אגודת הסטודנטים?", ans: "האגודה היא הגוף המייצג את הסטודנטים במכללה, אשר דואג לרווחת הסטודנטים וכן לפעילויות תרבות ושירותים אקדמאים.",
      isOpen:false},
      {quest: "כמה עולה לי להיות חבר אגודה?", ans: "מחיר חברות באגודת הסטודנטים בעזריאלי הינו 120 ₪ לשנה בלבד.",
      isOpen:false},
      {quest: "האם כל סטודנט מחויב לשלם דמי חבר?", ans: "לא, חברות באגודת הסטודנטים אינה חובה, אך מי שאינו חבר אינו זכאי להטבות האגודה לרבות: מרתונים, טיולים, הנחות, ייצוג ועוד.",
      isOpen:false},
      {quest: "האם כל סטודנט יכול להצטרף לצוות האגודה?", ans: "אכן, כל סטודנט החל מיומו הראשון בשנה א' רשאי להצטרף לאגודה במגוון תפקידים אשר יכולים להשפיע על ההווי הסטודנטיאלי במכללה.",
      isOpen:false},
      {quest: "הועלתי על ידי המכללה לוועדת המשמעת על ידי המכללה, מה עליי לעשות?", ans: "תחילה עליך לדעת כי בתור חבר אגודה, הנך מיוצג על ידי האגודה בוועדת המשמעת, כמו כן אנו ממליצים ליצור קשר מראש עם מחלקת האקדמיה של האגודה.",
      isOpen:false},
      {quest: "אני סטודנט המשרת במילואים, האם מגיעה לי איזשהי הטבה מיוחדת מהאגודה?", ans: "כמובן, סטודנט המשרת בשירות המילואים רשאי להגיע למשרדי האגודה לקבלת ערכת קפה מפנקת בהשאלה, כמו כן האגודה עומדת מאחורי כל סטודנט היוצא לשירות במילואים לקבלת התנאים המגיעים לו מהמכללה.",
      isOpen:false},
      {quest: "האם קיימים תאים פוליטיים המקושרים לאגודת הסטודנטים?", ans: "חד משמעית לא! אגודת הסטודנטים בעזריאלי הינה אגודה שכל מטרתה היא ליצור הווי סטודנטיאלי וכן לדאוג לסטודנטים לתנאים הטובים ביותר שיוכלו לקבל, לכן הפוליטיקה לא תקבל כאן מקום.",
      isOpen:false},
      {quest: "האם חברותי באגודת הסטודנטים מזכה אותי באיזה שהן הנחות?", ans: "כמובן, אגודת הסטודנטים משתפת פעולה עם מספר רב של פסטיבלים ועסקים ברחבי ירושלים אשר נותנים הנחות בלעדיות לחברי האגודה שלנו, ניתן לראות פרסומים באפליקציה ובדף הפייסבוק שלנו.",
      isOpen:false}
      
    ];
  

   



  }
  toggleSection(i) {
    this.items[i].isOpen = !this.items[i].isOpen;
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.quest.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }










  ionViewDidLoad() {
    console.log('ionViewDidLoad FaqPage');
  }

}



