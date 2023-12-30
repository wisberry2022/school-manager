import { ObjType } from "@/types/Common";

type Nav = {
  name: string;
  path: string;
}

export const navSet: ObjType<Nav> = {
  student: {
    name: "학생관리",
    path: "/student"
  },
  fundamental: {
    name: "기초업무관리",
    path: "/fundamental"
  },
  staff: {
    name: "교직원 관리",
    path: "/staff"
  },
  lecture: {
    name: "수업 관리",
    path: "/lecture"
  }
}