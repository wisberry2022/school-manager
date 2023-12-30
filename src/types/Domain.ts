export type GradeType =
  | "FIRST_YEAR"
  | "SECOND_YEAR"
  | "THIRD_YEAR"
  | "DEFAULT_VALUE";

  export type Grade = {
    grade: GradeType;
    memo: string;
  }