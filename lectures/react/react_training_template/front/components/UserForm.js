import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { getSearchUsersByKeyword } from "../redux/reducers/userSlice";

const checkboxGenderOptions = [
  { key: "전체", value: "" },
  { key: "남자", value: "남자" },
  { key: "여자", value: "여자" },
];

const checkboxHiredTypeOptions = [
  { key: "전체", value: "" },
  { key: "신입", value: "신입" },
  { key: "경력", value: "경력" },
];

const checkboxHiredStateOptions = [
  { key: "전체", value: "" },
  { key: "초대", value: "초대" },
  { key: "사용", value: "사용" },
  { key: "중지", value: "중지" },
];

const checkboxCompanyNameOptions = [
  { key: "전체", value: "" },
  { key: "한양풍동실험연구소", value: "한양풍동실험연구소" },
  { key: "기술본부", value: "기술본부" },
  { key: "기술팀", value: "기술팀" },
  { key: "영업팀", value: "영업팀" },
  { key: "모형팀", value: "모형팀" },
  { key: "실험부", value: "실험부" },
  { key: "편집부", value: "편집부" },
];

function UserForm() {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        page: 0,
        size: 10,
        keywordType: "이름",
        keyword: "",
        gender: [],
        hiredType: [],
        hiredState: [],
        dateType: "생년월일",
        birthDateStart: null,
        birthDateEnd: null,
        companyName: [],
      }}
      onSubmit={(values, onSubmitProps) => {
        onSubmitProps.setSubmitting(true);

        dispatch(getSearchUsersByKeyword(values));

        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
      }}
      enableReinitialize
    >
      {(formik) => {
        return (
          <Form>
            <Grid container justifyContent="space-evenly" alignItems="strech">
              <Grid
                item
                xs={12}
                sx={{
                  ".css-dmmspl-MuiFormGroup-root": {
                    flexDirection: "row",
                  },
                }}
              >
                {/* 성별 */}
                <Box className="form-control">
                  <Typography
                    variant="h6"
                    sx={{ width: "100px", textAlign: "center" }}
                  >
                    성별
                  </Typography>
                  <FormControl sx={{ display: "flex" }}>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="gender"
                            id={checkboxGenderOptions[0].value}
                            value={checkboxGenderOptions[0].value}
                            onChange={formik.handleChange}
                            defaultChecked
                          />
                        }
                        htmlFor={checkboxGenderOptions[0].value}
                        label={checkboxGenderOptions[0].key}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="gender"
                            id={checkboxGenderOptions[1].value}
                            value={checkboxGenderOptions[1].value}
                            checked={Boolean(
                              formik.values.gender.includes(
                                checkboxGenderOptions[1].value
                              )
                            )}
                            onChange={formik.handleChange}
                          />
                        }
                        htmlFor={checkboxGenderOptions[1].value}
                        label={checkboxGenderOptions[1].key}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="gender"
                            id={checkboxGenderOptions[2].value}
                            value={checkboxGenderOptions[2].value}
                            checked={Boolean(
                              formik.values.gender.includes(
                                checkboxGenderOptions[2].value
                              )
                            )}
                            onChange={formik.handleChange}
                          />
                        }
                        htmlFor={checkboxGenderOptions[2].value}
                        label={checkboxGenderOptions[2].key}
                      />
                    </FormGroup>
                  </FormControl>
                </Box>
              </Grid>

              <Grid
                item
                sx={{
                  ".css-dmmspl-MuiFormGroup-root": {
                    flexDirection: "row",
                  },
                }}
                xs={12}
              >
                {/* 입사구분 */}
                <Box className="form-control">
                  <Typography
                    variant="h6"
                    sx={{ width: "100px", textAlign: "center" }}
                  >
                    입사구분
                  </Typography>
                  <FormControl sx={{ display: "flex" }}>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="hiredType"
                            id={checkboxHiredTypeOptions[0].value}
                            value={checkboxHiredTypeOptions[0].value}
                            onChange={formik.handleChange}
                            defaultChecked
                          />
                        }
                        htmlFor={checkboxHiredTypeOptions[0].value}
                        label={checkboxHiredTypeOptions[0].key}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="hiredType"
                            id={checkboxHiredTypeOptions[1].value}
                            value={checkboxHiredTypeOptions[1].value}
                            checked={Boolean(
                              formik.values.hiredType.includes(
                                checkboxHiredTypeOptions[1].value
                              )
                            )}
                            onChange={formik.handleChange}
                          />
                        }
                        htmlFor={checkboxHiredTypeOptions[1].value}
                        label={checkboxHiredTypeOptions[1].key}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="hiredType"
                            id={checkboxHiredTypeOptions[2].value}
                            value={checkboxHiredTypeOptions[2].value}
                            checked={Boolean(
                              formik.values.hiredType.includes(
                                checkboxHiredTypeOptions[2].value
                              )
                            )}
                            onChange={formik.handleChange}
                          />
                        }
                        htmlFor={checkboxHiredTypeOptions[2].value}
                        label={checkboxHiredTypeOptions[2].key}
                      />
                    </FormGroup>
                  </FormControl>
                </Box>
              </Grid>

              <Grid
                item
                sx={{
                  ".css-dmmspl-MuiFormGroup-root": {
                    flexDirection: "row",
                  },
                }}
                xs={12}
              >
                {/* 계정상태 */}
                <Box className="form-control">
                  <Typography
                    variant="h6"
                    sx={{ width: "100px", textAlign: "center" }}
                  >
                    계정상태
                  </Typography>
                  <FormControl sx={{ display: "flex" }}>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="hiredState"
                            id={checkboxHiredStateOptions[0].value}
                            value={checkboxHiredStateOptions[0].value}
                            onChange={formik.handleChange}
                            defaultChecked
                          />
                        }
                        htmlFor={checkboxHiredStateOptions[0].value}
                        label={checkboxHiredStateOptions[0].key}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="hiredState"
                            id={checkboxHiredStateOptions[1].value}
                            value={checkboxHiredStateOptions[1].value}
                            checked={Boolean(
                              formik.values.hiredState.includes(
                                checkboxHiredStateOptions[1].value
                              )
                            )}
                            onChange={formik.handleChange}
                          />
                        }
                        htmlFor={checkboxHiredStateOptions[1].value}
                        label={checkboxHiredStateOptions[1].key}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="hiredState"
                            id={checkboxHiredStateOptions[2].value}
                            value={checkboxHiredStateOptions[2].value}
                            checked={Boolean(
                              formik.values.hiredState.includes(
                                checkboxHiredStateOptions[2].value
                              )
                            )}
                            onChange={formik.handleChange}
                          />
                        }
                        htmlFor={checkboxHiredStateOptions[2].value}
                        label={checkboxHiredStateOptions[2].key}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="hiredState"
                            id={checkboxHiredStateOptions[3].value}
                            value={checkboxHiredStateOptions[3].value}
                            checked={Boolean(
                              formik.values.hiredState.includes(
                                checkboxHiredStateOptions[3].value
                              )
                            )}
                            onChange={formik.handleChange}
                          />
                        }
                        htmlFor={checkboxHiredStateOptions[3].value}
                        label={checkboxHiredStateOptions[3].key}
                      />
                    </FormGroup>
                  </FormControl>
                </Box>
              </Grid>

              <Grid item xs={12}>
                {/* 이름, 이메일, 주소 */}
                <Box className="form-control">
                  <FormControl variant="outlined">
                    <Select
                      defaultValue="이름"
                      name="keywordType"
                      value={formik.values.keywordType}
                      onChange={formik.handleChange}
                    >
                      <MenuItem value="이름">이름</MenuItem>
                      <MenuItem value="이메일">이메일</MenuItem>
                      <MenuItem value="주소">주소</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl>
                    <TextField
                      id="outlined-basic"
                      placeholder="검색어를 입력해 주세요"
                      variant="outlined"
                      name="keyword"
                      value={formik.values.keyword}
                      onChange={formik.handleChange}
                    />
                  </FormControl>
                </Box>
              </Grid>

              <Grid item xs={12}>
                {/* 생년월일 시작일 & 생년월일 종료일*/}
                <Box className="form-control">
                  <FormControl variant="outlined">
                    <Select
                      defaultValue="생년월일"
                      name="dateType"
                      value={formik.values.dateType}
                      onChange={formik.handleChange}
                    >
                      <MenuItem value="생년월일">생년월일</MenuItem>
                      <MenuItem value="입사일">입사일</MenuItem>
                      <MenuItem value="학력 시작일">학력 시작일</MenuItem>
                    </Select>
                  </FormControl>
                  {/* <select>
                    <option value="생년월일">생년월일</option>
                    <option value="입사일">입사일</option>
                    <option value="학력시작일">학력 시작일</option>
                  </select> */}

                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      disableToolbar
                      name="birthDateStart"
                      inputFormat={"yyyy-MM-dd"}
                      mask={"____-__-__"}
                      value={formik.values.birthDateStart}
                      onChange={(newDate) => {
                        formik.setFieldValue(
                          "birthDateStart",
                          dayjs(newDate).format("YYYY-MM-DD")
                        );
                      }}
                      renderInput={(params) => {
                        return <TextField {...params} variant="outlined" />;
                      }}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </LocalizationProvider>

                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      disableToolbar
                      name="birthDateEnd"
                      value={formik.values.birthDateEnd}
                      inputFormat={"yyyy-MM-dd"}
                      mask={"____-__-__"}
                      onChange={(newDate) => {
                        formik.setFieldValue(
                          "birthDateEnd",
                          dayjs(newDate).format("YYYY-MM-DD")
                        );
                      }}
                      renderInput={(params) => {
                        return <TextField {...params} variant="outlined" />;
                      }}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </LocalizationProvider>
                </Box>
              </Grid>

              <Grid item xs={12}>
                {/* 소속 */}
                <Box className="form-control">
                  <Typography
                    variant="h6"
                    sx={{ width: "100px", textAlign: "center" }}
                  >
                    소속
                  </Typography>
                  <FormControl
                    sx={{
                      display: "flex",
                      ".css-dmmspl-MuiFormGroup-root": {
                        flexDirection: "row",
                      },
                    }}
                  >
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="companyName"
                            id={checkboxCompanyNameOptions[0].value}
                            value={checkboxCompanyNameOptions[0].value}
                            onChange={formik.handleChange}
                            defaultChecked
                          />
                        }
                        htmlFor={checkboxCompanyNameOptions[0].value}
                        label={checkboxCompanyNameOptions[0].key}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="companyName"
                            id={checkboxCompanyNameOptions[1].value}
                            value={checkboxCompanyNameOptions[1].value}
                            checked={Boolean(
                              formik.values.companyName.includes(
                                checkboxCompanyNameOptions[1].value
                              )
                            )}
                            onChange={formik.handleChange}
                          />
                        }
                        htmlFor={checkboxCompanyNameOptions[1].value}
                        label={checkboxCompanyNameOptions[1].key}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="companyName"
                            id={checkboxCompanyNameOptions[2].value}
                            value={checkboxCompanyNameOptions[2].value}
                            checked={Boolean(
                              formik.values.companyName.includes(
                                checkboxCompanyNameOptions[2].value
                              )
                            )}
                            onChange={formik.handleChange}
                          />
                        }
                        htmlFor={checkboxCompanyNameOptions[2].value}
                        label={checkboxCompanyNameOptions[2].key}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="companyName"
                            id={checkboxCompanyNameOptions[3].value}
                            value={checkboxCompanyNameOptions[3].value}
                            checked={Boolean(
                              formik.values.companyName.includes(
                                checkboxCompanyNameOptions[3].value
                              )
                            )}
                            onChange={formik.handleChange}
                          />
                        }
                        htmlFor={checkboxCompanyNameOptions[3].value}
                        label={checkboxCompanyNameOptions[3].key}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="companyName"
                            id={checkboxCompanyNameOptions[4].value}
                            value={checkboxCompanyNameOptions[4].value}
                            checked={Boolean(
                              formik.values.companyName.includes(
                                checkboxCompanyNameOptions[4].value
                              )
                            )}
                            onChange={formik.handleChange}
                          />
                        }
                        htmlFor={checkboxCompanyNameOptions[4].value}
                        label={checkboxCompanyNameOptions[4].key}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="companyName"
                            id={checkboxCompanyNameOptions[5].value}
                            value={checkboxCompanyNameOptions[5].value}
                            checked={Boolean(
                              formik.values.companyName.includes(
                                checkboxCompanyNameOptions[5].value
                              )
                            )}
                            onChange={formik.handleChange}
                          />
                        }
                        htmlFor={checkboxCompanyNameOptions[5].value}
                        label={checkboxCompanyNameOptions[5].key}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="companyName"
                            id={checkboxCompanyNameOptions[6].value}
                            value={checkboxCompanyNameOptions[6].value}
                            checked={Boolean(
                              formik.values.companyName.includes(
                                checkboxCompanyNameOptions[6].value
                              )
                            )}
                            onChange={formik.handleChange}
                          />
                        }
                        htmlFor={checkboxCompanyNameOptions[6].value}
                        label={checkboxCompanyNameOptions[6].key}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="companyName"
                            id={checkboxCompanyNameOptions[7].value}
                            value={checkboxCompanyNameOptions[7].value}
                            checked={Boolean(
                              formik.values.companyName.includes(
                                checkboxCompanyNameOptions[7].value
                              )
                            )}
                            onChange={formik.handleChange}
                          />
                        }
                        htmlFor={checkboxCompanyNameOptions[7].value}
                        label={checkboxCompanyNameOptions[7].key}
                      />
                    </FormGroup>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12}>
                {/* 버튼 */}
                <Button
                  type="submit"
                  variant="contained"
                  disabled={formik.isSubmitting}
                >
                  검색
                </Button>
                <Button type="reset" variant="contained">
                  초기화
                </Button>
              </Grid>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
}

export default UserForm;
