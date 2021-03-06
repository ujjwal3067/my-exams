//requirement: https://github.com/Deerhound579/my-exams/issues/16
import formatDate from './formatDate';
type examInfo = {
    "COURSE NUMBER": string,
    "SECTION": string,
    "TITLE": string,
    "EXAM DATE":string,
    "TIME": string,
    "BUILDING": string | null,
    "ROOM": string | null ,
    "ROW": string | null,
    "FROM": string | null,
    "TO": string | null,
};

export default (exams : examInfo[]): (string| Date | null | Number[])[][] => {
    return exams.map(exam=>{
        return[
        exam["COURSE NUMBER"],
        exam["SECTION"],
        exam["ROOM"],
        exam["ROW"],
        formatDate(exam["EXAM DATE"]),
        exam["TIME"].split(':').map(n => Number(n))
        ];
});
};
