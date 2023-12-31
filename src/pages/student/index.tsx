import { Box, ColumnFlexBox, FlexBox } from "@/component/common/Box";
import { Button } from "@/component/common/Button";
import { SemitTitle } from "@/component/common/Title";
import { useTheme } from "@/theme/useTheme";
import { axiosInstance } from "@/utils/AxiosInstance";
import { FC, useEffect, useState } from "react";

const gradeInit = async () => {
  await axiosInstance.post("/api/v0/grade");
}

const Student: FC = () => {
  const theme = useTheme();
  const [isInited, setInit] = useState<boolean>(false);

  const onClick = () => {
    gradeInit();
  }


  return (
    <FlexBox>
      <ColumnFlexBox width="50rem">
        <SemitTitle>교실 관리</SemitTitle>
        <ColumnFlexBox>
          <FlexBox>hi</FlexBox>
        </ColumnFlexBox>
      </ColumnFlexBox>
      <ColumnFlexBox width="50rem" style={{ justifyContent: "center" }}>
        <SemitTitle>학년 관리</SemitTitle>
        <ColumnFlexBox>
          <FlexBox>
            <Button onClick={onClick} bg={theme.color[theme.theme]}>초기화</Button>
          </FlexBox>
        </ColumnFlexBox>
      </ColumnFlexBox>
      <ColumnFlexBox width="50rem" style={{ justifyContent: "center" }}>
        <SemitTitle>학생 관리</SemitTitle>
        <ColumnFlexBox>
          <FlexBox>hi</FlexBox>
        </ColumnFlexBox>
      </ColumnFlexBox>
    </FlexBox >
  )
}

export default Student;