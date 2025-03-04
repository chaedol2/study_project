import React from "react";
import {
  Avatar,
  Button,
  Divider,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { orange } from "@mui/material/colors";
import { Box, Stack } from "@mui/system";
import { ErrorMessage, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { putCreateUserByValues } from "../redux/reducers/userSlice";
import * as Yup from "yup";

const UserCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const tableStyling = {
    padding: "0px 0px",
  };

  const initialValues = {
    name: "",
    email: "",
    birthDate: "",
    gender: "",
    address: "",
    phone: "",
    hiredType: "",
    hiredDate: "",
    jobList: [
      {
        companyName: "",
        startDate: "",
        endDate: "",
        majorJob: "",
      },
    ],
  };

  const validationSchema = Yup.object({
    jobList: Yup.array().of(
      Yup.object().shape({
        companyName: Yup.string().required("Required").nullable(),
        startDate: Yup.string().required("Required").nullable(),
        endDate: Yup.string().required("Required").nullable(),
        majorJob: Yup.string().required("Required").nullable(),
      })
    ),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, onSubmitProps) => {
        if (window.confirm("등록 하시겠습니까?")) {
          onSubmitProps.setSubmitting(true);
          dispatch(putCreateUserByValues(values));
          onSubmitProps.setSubmitting(false);
          alert("등록 되었습니다.");
          navigate("/", { replace: true });
        } else {
          alert("취소 하였습니다.");
        }
      }}
    >
      {(formik) => {
        return (
          <Form>
            <Grid
              container
              sx={{ border: "1px solid gray", padding: "20px 50px" }}
            >
              {/* ---------1계정정보--------- */}
              <Grid item xs={2}>
                <Box
                  sx={{
                    display: "flex",
                    width: "200px",
                    alignItems: "flex-end",
                  }}
                >
                  <Avatar sx={{ bgcolor: orange[500] }}>01</Avatar> 계정정보
                </Box>
              </Grid>
              <Grid
                item
                xs={10}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                {/* 이름 */}
                <Box sx={{ display: "flex" }}>
                  <Box sx={{ width: "200px" }}>
                    <Typography>이름</Typography>
                  </Box>
                  <Box
                    sx={{
                      "& > :not(style)": { m: 1, width: "500px" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      variant="standard"
                      name="name"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />
                  </Box>
                </Box>

                {/* 이메일 */}
                <Box sx={{ display: "flex" }}>
                  <Box sx={{ width: "200px" }}>
                    <Typography>이메일</Typography>
                  </Box>
                  <Box
                    sx={{
                      "& > :not(style)": { m: 1, width: "500px" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      variant="standard"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                  </Box>
                </Box>
              </Grid>

              <Divider sx={{ width: "90%" }} />

              {/* ---------2기본정보--------- */}
              <Grid item xs={2}>
                <Box
                  sx={{
                    display: "flex",
                    width: "200px",
                    alignItems: "flex-end",
                  }}
                >
                  <Avatar sx={{ bgcolor: orange[500] }}>02</Avatar> 기본정보
                </Box>
              </Grid>
              <Grid
                item
                xs={10}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                {/* 성별 */}
                <Box sx={{ display: "flex" }}>
                  <Box sx={{ width: "200px" }}>
                    <Typography>성별</Typography>
                  </Box>
                  <Box
                    sx={{
                      "& > :not(style)": { m: 1, width: "500px" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      name="gender"
                      variant="standard"
                      onChange={formik.handleChange}
                      value={formik.values.gender}
                    />
                  </Box>
                </Box>

                {/* 핸드폰 */}
                <Box sx={{ display: "flex" }}>
                  <Box sx={{ width: "200px" }}>
                    <Typography>핸드폰</Typography>
                  </Box>
                  <Box
                    sx={{
                      "& > :not(style)": { m: 1, width: "500px" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      name="phone"
                      variant="standard"
                      onChange={formik.handleChange}
                      value={formik.values.phone}
                    />
                  </Box>
                </Box>

                {/* 거주지 주소 */}
                <Box sx={{ display: "flex" }}>
                  <Box sx={{ width: "200px" }}>
                    <Typography>거주지 주소</Typography>
                  </Box>
                  <Box
                    sx={{
                      "& > :not(style)": { m: 1, width: "500px" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      name="address"
                      variant="standard"
                      onChange={formik.handleChange}
                      value={formik.values.address}
                    />
                  </Box>
                </Box>

                {/* 생년월일 */}
                <Box sx={{ display: "flex" }}>
                  <Box sx={{ width: "200px" }}>
                    <Typography>생년월일</Typography>
                  </Box>
                  <Box
                    sx={{
                      "& > :not(style)": { m: 1, width: "500px" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      name="birthDate"
                      variant="standard"
                      onChange={formik.handleChange}
                      value={formik.values.birthDate}
                    />
                  </Box>
                </Box>

                {/* 프로필 사진 */}
                <Box sx={{ display: "flex" }}>
                  <Box sx={{ width: "200px" }}>
                    <Typography>프로필 사진</Typography>
                  </Box>
                  <Stack direction="row" spacing={2}>
                    <Avatar src="/broken-image.jpg" />
                  </Stack>
                </Box>
              </Grid>

              <Divider sx={{ width: "90%" }} />

              {/* ---------3입사정보--------- */}
              <Grid item xs={2}>
                <Box
                  sx={{
                    display: "flex",
                    width: "200px",
                    alignItems: "flex-end",
                  }}
                >
                  <Avatar sx={{ bgcolor: orange[500] }}>03</Avatar> 입사 정보
                </Box>
              </Grid>
              <Grid
                item
                xs={10}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                {/* 입사일 */}
                <Box sx={{ display: "flex" }}>
                  <Box sx={{ width: "200px" }}>
                    <Typography>입사일</Typography>
                  </Box>
                  <Box
                    sx={{
                      "& > :not(style)": { m: 1, width: "500px" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      name="hiredDate"
                      variant="standard"
                      onChange={formik.handleChange}
                      value={formik.values.hiredDate}
                    />
                  </Box>
                </Box>

                {/* 입사 구분 */}
                <Box sx={{ display: "flex" }}>
                  <Box sx={{ width: "200px" }}>
                    <Typography>입사 구분</Typography>
                  </Box>
                  <Box
                    sx={{
                      "& > :not(style)": { m: 1, width: "500px" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      name="hiredType"
                      variant="standard"
                      onChange={formik.handleChange}
                      value={formik.values.hiredType}
                    />
                  </Box>
                </Box>
              </Grid>

              <Divider sx={{ width: "90%" }} />

              {/* ---------4소속정보--------- */}
              <Grid item xs={2}>
                <Box
                  sx={{
                    display: "flex",
                    width: "200px",
                    alignItems: "flex-end",
                  }}
                >
                  <Avatar sx={{ bgcolor: orange[500] }}>04</Avatar> 소속 정보
                </Box>
              </Grid>
              <Grid item xs={10}>
                <TableContainer
                  component={Paper}
                  sx={{
                    border: "1px solid rgba(0,0,0,0.2)",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <Table stickyHeader>
                    <TableHead>
                      <TableRow
                        style={{ backgroundColor: "#f5f5f5", height: "35px" }}
                      >
                        <TableCell
                          sx={{ ...tableStyling, width: 100 }}
                          align="center"
                        >
                          소속부서
                        </TableCell>

                        <TableCell
                          sx={{ ...tableStyling, width: 100 }}
                          align="center"
                        >
                          직종
                        </TableCell>

                        <TableCell
                          sx={{ ...tableStyling, width: 100 }}
                          align="center"
                        >
                          근무시작일
                        </TableCell>
                        <TableCell
                          sx={{ ...tableStyling, width: 100 }}
                          align="center"
                        >
                          근무종료일
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell component="th" align="center">
                          <TextField
                            name="jobList[0].companyName"
                            variant="standard"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.jobList[0].companyName}
                          />
                          <ErrorMessage name="jobList[0].companyName" />
                        </TableCell>
                        <TableCell align="center">
                          <TextField
                            name="jobList[0].majorJob"
                            variant="standard"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.jobList[0].majorJob}
                          />
                          <ErrorMessage name="jobList[0].majorJob" />
                        </TableCell>
                        <TableCell align="center">
                          <TextField
                            name="jobList[0].startDate"
                            variant="standard"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.jobList[0].startDate}
                            placeholder="YYYY-MM-DD"
                          />
                          <ErrorMessage name="jobList[0].startDate" />
                        </TableCell>
                        <TableCell align="center">
                          <TextField
                            name="jobList[0].endDate"
                            variant="standard"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.jobList[0].endDate}
                            placeholder="YYYY-MM-DD"
                          />
                          <ErrorMessage name="jobList[0].endDate" />
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              sx={{ align: "right" }}
              disabled={formik.isSubmitting}
            >
              등록하기
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default UserCreate;
