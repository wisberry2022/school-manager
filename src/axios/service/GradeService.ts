import { axiosInstance } from "@/utils/AxiosInstance";
import { paths } from "../Paths";
import { ObjType } from "@/types/Common";
import { Grade } from "@/types/Domain";
import { Service } from "@/types/Service";

export const gradeService: ObjType<Service<void | Grade>> = {
  init: async () => {
    try {
      await axiosInstance.post(paths.student.grade.init);
    } catch (e) {
      throw e;
    }
  },
  getAll: async () => {
    try {
      const response = await axiosInstance.get(paths.student.grade.getAll);
      return response.data;
    } catch (e) {
      throw e;
    }
  },
};
