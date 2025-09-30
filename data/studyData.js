// data/studyData.js

// קוד זה מייצא את מערך הנתונים הראשי שבו ישתמשו כל דפי הלמידה באתר
const STUDY_DATA = [
    {
        id: 1,
        topic: "החייאת מכשירים - מבוגר",
        category: "החייאה",
        symptoms: ["אין דופק", "אין נשימה", "מחוסר הכרה (U ב-AVPU)"],
        [span_0](start_span)distinguishing: ["מוות קליני (הפיך, 4-6 דקות)[span_0](end_span)[span_1](start_span)", "בדיקת דופק בקרוטיד, נשימה בעליית בית החזה[span_1](end_span)"],
        treatment: [
            [span_2](start_span)"סייפטי, בדיקת AVPU[span_2](end_span)",
            [span_3](start_span)"C: עיסויים (30) - 100-120 לדקה, עומק 5-6 ס״מ[span_3](end_span)",
            [span_4](start_span)"חיבור דפיברילטור (ימין למעלה, שמאל למטה)[span_4](end_span)",
            [span_5](start_span)"A: סילוק הפרשות (סקשן), פתיחת נתיב אוויר (מצח-סנטר), החדרה AW[span_5](end_span)",
            [span_6](start_span)"B: הנשמות (2) - עם אמבו וחמצן על 10 LPM[span_6](end_span)",
        ],
        [span_7](start_span)mnemonic: "מעק\"ה (מיקום, עומק, קצב, הרפייה)[span_7](end_span). סכמה: C-A-B-D (דגש על עיסויים מיידי)"
    },
    {
        id: 2,
        topic: "שבץ מוחי",
        category: "מערכת העצבים",
        [span_8](start_span)symptoms: ["נוירולוגיים פתאומיים: פציאליס (עיוות פנים)[span_8](end_span)[span_9](start_span)", "חולשה/שיתוק פתאומי (צד אחד)[span_9](end_span)[span_10](start_span)", "קושי בדיבור או בבליעה[span_10](end_span)[span_11](start_span)", "כאב ראש פתאומי חמור (במיוחד בדימומי)[span_11](end_span)"],
        [span_12](start_span)distinguishing: ["איסכמי (חסימה) מול דימומי (קרע כלי דם)", "TIA: תסמינים חולפים תוך 24 שעות", "FAST E - בדיקה מהירה[span_12](end_span)"],
        [span_13](start_span)treatment: ["תמיכה ב-ABC", "רישום **זמן** הופעת הסימנים (קריטי לטיפול TPA)[span_13](end_span)[span_14](start_span)", "בדיקת סוכר", "פינוי **מהיר** לבי"ח ייעודי[span_14](end_span)"],
        [span_15](start_span)mnemonic: "FAST E: Face, Arms, Speech, Time, Eyes[span_15](end_span)"
    },
    {
        id: 3,
        topic: "אוטם שריר הלב (MI)",
        category: "מערכת הלב",
        [span_16](start_span)[span_17](start_span)symptoms: ["כאבים **לוחצים** בחזה שלא משתנים[span_16](end_span)[span_17](end_span)[span_18](start_span)", "חיוורון והזעה[span_18](end_span)[span_19](start_span)", "בחילות והקאות[span_19](end_span)[span_20](start_span)", "הקרנות כאב (לרוב לצד שמאל/לסת)[span_20](end_span)"],
        [span_21](start_span)distinguishing: ["אוטם שקט (ללא כאבים, נפוץ בסוכרתיים/קשישים)[span_21](end_span)[span_22](start_span)", "תעוקת חזה יציבה (כאב עובר במנוחה)[span_22](end_span)"],
        [span_23](start_span)treatment: ["תמיכה ב-ABC", "פינוי דחוף", "הרגעה", "לאבחן ע"י דופק ולחץ דם (אינם כלי אבחנה יחיד)[span_23](end_span)"],
        mnemonic: "כאב לוחץ + מזיע. סכנה: דום לב/VF"
    },
    {
        id: 4,
        topic: "אנפילקסיס (הלם אלרגי)",
        category: "חירום רב-מערכתי",
        [span_24](start_span)symptoms: ["פגיעה ב-2 מערכות ומעלה[span_24](end_span)[span_25](start_span)", "קושי נשימה/צפצופים (בצקת בדרכי הנשימה)[span_25](end_span)[span_26](start_span)", "צניחת לחץ דם (שוק)[span_26](end_span)[span_27](start_span)", "פריחה, גרד, נפיחות[span_27](end_span)"],
        [span_28](start_span)distinguishing: ["בצקת בדרכי הנשימה (לרינגוספאזם)[span_28](end_span)[span_29](start_span)", "היסטמין גורם להרחבת כלי דם וירידה בלחץ דם[span_29](end_span)"],
        treatment: ["תמיכה ב-ABC", "פינוי דחוף", "במקרה שוק אנפילקטי: עשוי לדרוש טיפול אפינפרין (אדרנלין) [implicit]"],
        mnemonic: "2 מערכות או יותר! סכנה: חסימת נתיב אוויר, הלם."
    },
    {
        id: 5,
        topic: "דלקת ריאות (Pneumonia)",
        category: "מערכת הנשימה",
        [span_30](start_span)symptoms: ["חום, צמרמורות, חולשה[span_30](end_span)[span_31](start_span)", "שיעול פרודוקטיבי (שיעול רטוב עם לחה)[span_31](end_span)[span_32](start_span)", "כאב בחזה המתגבר בנשימה[span_32](end_span)[span_33](start_span)[span_34](start_span)", "מצוקה נשימתית/קוצר נשימה[span_33](end_span)[span_34](end_span)"],
        [span_35](start_span)distinguishing: ["הסימן המבדיל: **חום**[span_35](end_span)[span_36](start_span)", "נגרם מחשיפה לקור קיצוני או פגיעה במערכת החיסונית[span_36](end_span)"],
        [span_37](start_span)treatment: ["תמיכה ב-ABC", "מתן חמצן ו/או הנשמה מסייעת (במידת הצורך)[span_37](end_span)[span_38](start_span)", "פינוי דחוף לביה\"ח/חבירה לאט\"ן[span_38](end_span)"],
        mnemonic: "חום + שיעול פרודוקטיבי"
    },
    {
        id: 6,
        topic: "הלם היפוולמי",
        category: "הלם/טראומה",
        [span_39](start_span)[span_40](start_span)symptoms: ["דופק מהיר **ו**חלש[span_39](end_span)[span_40](end_span)[span_41](start_span)", "לחץ דם נמוך במגמת ירידה[span_41](end_span)[span_42](start_span)[span_43](start_span)", "עור חיוור, לח וקר (עור חל\"ק)[span_42](end_span)[span_43](end_span)[span_44](start_span)", "נשימה מהירה (טכיפניאה)[span_44](end_span)"],
        [span_45](start_span)distinguishing: ["סיפור רקע של אובדן נוזלים/דם משמעותי (דימום, התייבשות, כוויות)[span_45](end_span)[span_46](start_span)", "הלב לא עובד כי אין לו מספיק נפח דם[span_46](end_span)"],
        [span_47](start_span)treatment: ["סכמת PHTLS", "שכיבה והרמת רגליים", "תמיכה ב-ABC ומתן חמצן", "מתן נוזלים (בסמכות מתאימה)[span_47](end_span)[span_48](start_span)", "פינוי דחוף[span_48](end_span)"],
        mnemonic: "נפח נמוך = חלש + מהיר"
    },
    {
        id: 7,
        topic: "חנק מלא (מבוגר)",
        category: "מצבי חירום נשימתיים",
        [span_49](start_span)symptoms: ["לא מצליח לנשום/לדבר/להשתעל[span_49](end_span)[span_50](start_span)", "סימון בידיים/אחיזת הצוואר[span_50](end_span)[span_51](start_span)", "סיפור מקרה של אכילה/חפץ זר[span_51](end_span)"],
        [span_52](start_span)distinguishing: ["חסימה מלאה (אין מעבר אוויר)[span_52](end_span)"],
        [span_53](start_span)treatment: ["לחיצות ברום הבטן (עד יציאת גוף זר או איבוד הכרה)[span_53](end_span)[span_54](start_span)", "באיבוד הכרה: החייאה על רקע חנק (בדיקת פה כל 2 דקות)[span_54](end_span)[span_55](start_span)", "בהיריון/כיסא גלגלים: עיסויים בחזה[span_55](end_span)"],
        mnemonic: "לחיצות ברום הבטן (למעלה ולפנים)"
    },
    {
        id: 8,
        topic: "פרכוסים",
        category: "מערכת העצבים",
        [span_56](start_span)symptoms: ["תנועות לא רצוניות (קצר חשמלי במוח)[span_56](end_span)[span_57](start_span)", "נשיכת לשון[span_57](end_span)[span_58](start_span)", "טכיקרדיה וטכיפנאה[span_58](end_span)"],
        [span_59](start_span)distinguishing: ["אפילפסיה (מחלה ידועה) מול פרכוס מסיבה אחרת (שבץ, סוכרת)[span_59](end_span)"],
        treatment: ["סייפטי! [span_60](start_span)הרחקת גורמים מסכנים מהמטופל[span_60](end_span)[span_61](start_span)", "שמירה על נתיב אוויר פתוח ומתן חמצן[span_61](end_span)[span_62](start_span)", "בדיקת סוכר", "פינוי לבית חולים[span_62](end_span)"],
        mnemonic: "קצר במוח - סכנה: חבלות משניות וחנק"
    },
    {
        id: 9,
        topic: "מכת חום",
        category: "פגיעות אקלים",
        [span_63](start_span)[span_64](start_span)symptoms: ["טמפרטורה **גבוהה מאוד** (מעל 40 מעלות)[span_63](end_span)[span_64](end_span)[span_65](start_span)", "עור **חם ויבש** (יכול להיות סמוק)[span_65](end_span)[span_66](start_span)[span_67](start_span)", "בלבול או שינויים במצב הכרה/התנהגות[span_66](end_span)[span_67](end_span)[span_68](start_span)", "דופק מהיר, ירידה בל\"ד (בשלב מתקדם)[span_68](end_span)"],
        [span_69](start_span)distinguishing: ["העור חם מאוד[span_69](end_span), לעומת התייבשות שמתחילה עם הזעה"],
        [span_70](start_span)treatment: ["הרחקה מיידית למקום מוצל וקריר[span_70](end_span)[span_71](start_span)", "הסרת בגדים, קירור אקטיבי (כולל במזגן)[span_71](end_span)[span_72](start_span)", "תמיכה ב-ABC ומתן חמצן", "מתן נוזלים (אם בהכרה)[span_72](end_span)"],
        mnemonic: "40 מעלות והזעה נעצרה"
    },
    {
        id: 10,
        topic: "היפותרמיה (קור)",
        category: "פגיעות אקלים",
        [span_73](start_span)[span_74](start_span)symptoms: ["טמפרטורה **נמוכה** (מתחת ל-35 מעלות)[span_73](end_span)[span_74](end_span)[span_75](start_span)", "רעידות (עד שהגוף מתעייף), חיוורון[span_75](end_span)[span_76](start_span)", "דופק מהיר, נשימה מהירה (בשלב מוקדם)[span_76](end_span)[span_77](start_span)", "שינויים במצב הכרה וירידה ברמת ההכרה[span_77](end_span)"],
        [span_78](start_span)distinguishing: ["גוף קר מאוד[span_78](end_span)"],
        [span_79](start_span)treatment: ["הרחקה למקום חם[span_79](end_span)[span_80](start_span)", "כיסוי, הסרת בגדים קרים/רטובים[span_80](end_span)[span_81](start_span)", "חימום פסיבי (לא חימום אגרסיבי) [implicit]", "תמיכה ב-ABC ופינוי דחוף[span_81](end_span)"],
        mnemonic: "קור מוחלט - כיסוי ופינוי"
    },
    // ניתן להוסיף נושאים נוספים כגון VF, הלם קרדיוגני, דלקת גרון, חזה אוויר וכו'
];

// פונקציה לבחירת פריט לפי ID
function getItemById(id) {
    return STUDY_DATA.find(item => item.id === id);
}

// פונקציה לערבוב מערך (לשימוש בבחנים)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
